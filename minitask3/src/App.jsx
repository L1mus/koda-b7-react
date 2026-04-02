import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [dataSearching, setDataSearcing] = useState([]);
  const [isSearching, setIsSeaching] = useState(true);

  const APIURL = "https://pokeapi.co/api/v2/";

  const fetchDataPokemon = async (enpointAPI) => {
    try {
      const response = await fetch(`${APIURL}${enpointAPI}`);
      if (!response.ok) {
        throw new Error(`Fetch data Gagal : ${response.status}`);
      }
      const data = response.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  const searchPokemonById = async (id) => {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
      if (!response.ok) {
        throw new Error(`Fetch data Gagal : ${response.status}`);
      }
      const data = response.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    (async () => {
      const dataById = async () => {
        const response = await fetchDataPokemon("pokemon/");
        const data = response.results.slice(0, 30);
        const ids = data.map((e) => e.url.split("/")[6]);
        return ids;
      };
      const arrId = await dataById();
      const data = [];
      for (let i of arrId) {
        data.push(await searchPokemonById(i));
      }
      setData(data);
    })();
  }, []);

  const handleSearchByName = async (e) => {
    e.preventDefault();
    if (search.trim === "") {
      isSearching(false);
      return;
    }
    const searching = data.filter((e) => e.name.startsWith(search));
    setDataSearcing(searching);
    setIsSeaching(false);
  };

  return (
    <>
      <form
        className="flex gap-12 items-center mb-4"
        onClick={handleSearchByName}
      >
        <label className="text-xl" htmlFor="search">
          Search
        </label>
        <input
          className="border border-black rounded-sm p-1"
          type="text"
          name="search"
          id="search"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        <button type="submit">Search</button>
      </form>
      <section className="p-6">
        <ol className="grid grid-cols-4 gap-5 ">
          {isSearching
            ? data.map((element) => {
                return (
                  <li
                    className="list-none border-2 border-solid border-amber-500 p-6 flex items-center flex-col rounded-2xl"
                    key={element.id}
                  >
                    <h1 className="text-2xl uppercase">{element.name}</h1>
                    <img
                      src={element.sprites.front_default}
                      alt={element.name}
                    />
                    <h2>
                      Type:{" "}
                      <span>
                        {element.types.map((types) => types.type.name)}
                      </span>
                    </h2>
                  </li>
                );
              })
            : dataSearching.map((element) => {
                return (
                  <li
                    className="list-none border-2 border-solid border-amber-500 p-6 flex items-center flex-col rounded-2xl"
                    key={element.id}
                  >
                    <h1>{element.name}</h1>
                    <img
                      src={element.sprites.front_default}
                      alt={element.name}
                    />
                    <h2>
                      Type:{" "}
                      <span>
                        {element.types.map((types) => types.type.name)}
                      </span>
                    </h2>
                  </li>
                );
              })}
        </ol>
      </section>
    </>
  );
}

export default App;
