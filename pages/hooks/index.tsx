import { useEffect, useState } from "react";

type RepositoryInterface = {
  id: number;
  name: string;
  favorite?: boolean;
};

type ItemHookProps = {
  repository: RepositoryInterface;
};

const ItemHook = ({ repository }: ItemHookProps) => {
  const [favorite, setFavorite] = useState(false);

  console.log(`handle ${repository.id}`);

  const handleFavorite = () => {
    setFavorite(!favorite);
  };

  return (
    <div key={repository.id} className="flex items-center gap-3 mt-2">
      <span className="w-64">
        {repository.name} -{" "}
        <span className="text-yellow-400 font-bold">
          {favorite ? "Favorito" : null}{" "}
        </span>
      </span>
      <button
        onClick={handleFavorite}
        className="bg-emerald-500 rounded font-semibold text-white ml-2 hover:bg-emerald-600 p-3"
      >
        Favoritar
      </button>
    </div>
  );
};

const Hooks = () => {
  const [repositories, setRepositories] = useState(
    [] as Array<RepositoryInterface>
  );

  console.log("test");

  useEffect(() => {
    (async () => {
      const response = await fetch(
        "https://api.github.com/users/evertonwalker/repos"
      );
      const data = await response.json();
      console.log(data);
      setRepositories(data);
    })();
    // se Deixarmos o array vazio de useEffect ele só será executado uma única vez, pq ele só é iniciado
    // quando o component está começando então basicamente um Loading inicial
  }, []);

  const handleAddRepository = () => {
    setRepositories([
      ...repositories,
      { id: Math.random(), name: "Novo repo" },
    ]);
  };

  const handleFavorite = (id: number) => {
    const newRepositores = repositories.map((repo) => {
      return repo.id === id
        ? { ...repo, favorite: !repo.favorite }
        : { ...repo };
    });
    setRepositories(newRepositores);
  };

  return (
    <>
      <div>
        <ul>
          {repositories.map((rep) => {
            return <ItemHook key={rep.id} repository={rep} />;
          })}
        </ul>
        <div>
          {/* <button
            className="bg-emerald-500 rounded font-semibold text-white ml-2 hover:bg-emerald-600 p-3"
            onClick={handleAddRepository}
          >
            Adicionar Repositório
          </button> */}
        </div>
      </div>
    </>
  );
};

export default Hooks;
