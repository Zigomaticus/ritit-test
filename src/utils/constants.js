const ROOT = "https://swapi.dev/api/";
const PLANETS = "planets";
const PEOPLE = "people";

export const getApi = async (url) => {
  const res = await fetch(url);
  return await res.json();
};

(async () => {
  const body = await getApi(ROOT + PLANETS);
  console.log(body);
})();
