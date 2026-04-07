import { useState, useEffect } from "react";
import { getDatacharacter } from "../api/getData";
import { useNavigate } from "react-router";
import slugify from "slugify";

const RickMorty = () => {
  const [data, setData] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    (async function () {
      const fetchData = await getDatacharacter();
      setData(fetchData);
    })();
  }, []);
  return (
    <>
      {data !== null ? (
        data.map((character) => {
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
        })
      ) : (
        <p>is Loading ...</p>
      )}
    </>
  );
};

export default RickMorty;
