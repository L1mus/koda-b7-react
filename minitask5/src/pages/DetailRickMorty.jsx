import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getDataCharacterById } from "../api/getData";

const DetailRickMorty = () => {
  const [detail, setDetail] = useState({});
  const { id } = useParams();

  useEffect(() => {
    (async function () {
      const dataFetch = await getDataCharacterById(id);
      setDetail(dataFetch);
    })();
  }, []);

  return (
    <>
      <h1>Detail</h1>
      {Object.keys(detail).length ? (
        <div className="flex flex-col border border-black ">
          <h1>{detail.name}</h1>
          <img src={detail.image} alt={detail.name} />
          <p>Status: {detail.status}</p>
          <p>Species {detail.species}</p>
        </div>
      ) : (
        <p>isLoading...</p>
      )}
    </>
  );
};

export default DetailRickMorty;
