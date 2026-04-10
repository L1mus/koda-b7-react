// import { useState, useEffect } from "react";
// import { getDatacharacter } from "../api/getData";
import { useNavigate } from "react-router";
import slugify from "slugify";
import useFetch from "../customHooks/useFetch";

const RickMorty = () => {
  // const [data, setData] = useState(null);
  const [data, loading, error] = useFetch(
    "https://rickandmortyapi.com/api/character",
  );
  const navigate = useNavigate();
  // useEffect(() => {
  //   (async function () {
  //     const fetchData = await getDatacharacter();
  //     setData(fetchData);
  //   })();
  // }, []);
  if (error) return <p>Error Faild To fetch data</p>;
  if (loading) return <p>Loading...</p>;
  console.log(data);
  return (
    <>
      {data !== null &&
        data.results.map((character) => {
          return (
            <div
              className="cursor-pointer"
              onClick={() => {
                navigate(
                  `/rickmorty/${character.id}/${slugify(character.name, { lower: true })}`,
                );
              }}
              key={character.id}
            >
              {" "}
              <h1>{character.name}</h1>
              <img src={character.image} alt={character.name} />
            </div>
          );
        })}
    </>
  );
};

export default RickMorty;
