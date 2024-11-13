import { useRouter } from "next/router";
import { useFetch } from "./hooks/useFetch";

type Post = {
  id: number;
  title: string;
  views: number;
};

export default function PostDetails() {
  const router = useRouter();
  const { id } = router.query;
  const { data } = useFetch<Post>(`posts/${id}`);

  if(!data) return <>Loading...</>
 
  return (
    <div>
      <ul>
        <li>{data.id}</li>
        <li>{data.title}</li>
        <li>{data.views}</li>
      </ul>
    </div>
  );
}
