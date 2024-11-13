import { useRouter } from "next/router";
import { useCallback } from "react";
import { useFetch } from "./hooks/useFetch";
import api from "./services/api";
import { mutate as MutateGlobal } from "swr";

type Post = {
  id: number;
  title: string;
  views: number;
};

export default function PostsList() {
  const router = useRouter();
  const { data, mutate } = useFetch<Array<Post>>("posts");

  const handleNavigate = (id: number) => {
    router.push(`/posts/${id}`);
  };

  const handleNameChange = useCallback(
    (id: number) => {
      api.put(`posts/${id}`, { title: "New post my" });
      const updatedPostList = data?.map((post) => {
        if (post.id === id) {
          return { ...post, title: "New title my" };
        }
        return post;
      });

      // Ele não irá chamar api novamente, pq esse false faz ele ignorar a requisição na api
      mutate(updatedPostList, false);
      MutateGlobal(`posts/${id}`, { id, title: "New title my" });
    },
    [data, mutate]
  );

  const addNewPost = useCallback(() => {
    console.log('called');
    if (data) {
      const newPostList = [
        ...data,
        { id: 15, title: "My new post new", views: 200 },
      ];
      // mutate(newPostList, false);
      MutateGlobal(`posts`, newPostList);
    }
  }, [data]);

  if (!data) {
    return <>Loading...</>;
  }

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <ul className="flex gap-2">
        {data.map((post) => {
          return (
            <li
              key={post.id}
              className="bg-blue-800 font-bold mb-3 rounded flex items-center h-20 p-2"
            >
              <label onClick={() => handleNavigate(post.id)}>
                {post.title}
              </label>
              <button
                type="button"
                className="p-3 bg-gray-500 text-white rounded mt-2 ml-2 font-bold"
                onClick={() => handleNameChange(post.id)}
              >
                Alterar post
              </button>
            </li>
          );
        })}
      </ul>
      <button
        className="p-3 bg-green-500 text-white rounded mt-2 font-bold"
        onClick={addNewPost}
      >
        NEW POST
      </button>
    </div>
  );
}
