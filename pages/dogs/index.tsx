import { useFetchBreedsQuery } from "@/features/dogs/dogs-api-slice";
import Image from "next/image";

const Dogs = () => {
  const { data, error, isLoading } = useFetchBreedsQuery();

  return (
    <>
      <h2>Say hello to dogs</h2>
      <div className="App">
        {error ? (
          <>Oh no, there was an error</>
        ) : isLoading ? (
          <>Loading...</>
        ) : data ? (
          <>
            {data.map((dogBreed) => {
              return (
                <div key={dogBreed.id}>
                  <span>{dogBreed.name}</span>
                  <Image src={dogBreed.image.url} alt={dogBreed.name} />
                </div>
              );
            })}
          </>
        ) : null}
      </div>
    </>
  );
};

export default Dogs;
