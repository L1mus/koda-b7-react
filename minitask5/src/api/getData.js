export async function getDatacharacter() {
  try {
    const response = await fetch("https://rickandmortyapi.com/api/character");
    if (!response) {
      throw new Error("fail to fetch data");
    }
    const data = await response.json();
    return data.results;
  } catch (error) {
    throw new Error(error);
  }
}

export async function getDataCharacterById(id) {
  try {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character/${id}`,
    );
    if (!response) {
      throw new Error("fail to fetch data");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error);
  }
}
