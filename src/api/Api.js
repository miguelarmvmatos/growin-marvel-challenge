import MD5 from "crypto-js/md5";

const getHash = (ts, secretKey, publicKey) => {
  return MD5(ts + secretKey + publicKey).toString();
};
// Get all Characters
export const getCharacters = async (offset = 0) => {
  let apiKey = process.env.REACT_APP_MARVEL_API_KEY;
  let privateKey = process.env.REACT_APP_MARVEL_API_HASH;
  let ts = Date.now().toString();
  let hash = getHash(ts, privateKey, apiKey);
  const params = {
    ts,
    apikey: apiKey,
    hash,
    limit: "100",
    offset: `${offset}`,
  };
  const searchParams = new URLSearchParams(params);
  const URL = `https://gateway.marvel.com/v1/public/characters?${searchParams.toString()}`;
  const response = await fetch(URL)
    .then((response) => response.json())
    .catch((error) => console.log("ERROR : ", error));
  return response.data;
};

// Get a Character
export const getCharacter = async (id) => {
  let apiKey = process.env.REACT_APP_MARVEL_API_KEY;
  let privateKey = process.env.REACT_APP_MARVEL_API_HASH;
  let ts = Date.now().toString();
  let hash = getHash(ts, privateKey, apiKey);
  const URL = `https://gateway.marvel.com/v1/public/characters/${id}?ts=${ts}&apikey=${apiKey}&hash=${hash}&limit=100`;
  return fetch(URL)
    .then((response) => response.json())
    .catch((error) => console.log("ERROR : ", error));
};

export const getAllCharacters = async () => {
  let offset = 0;
  let allCharacters = [];
  let hasMoreResults = true;

  while (hasMoreResults) {
    const { total, results } = await getCharacters(offset);
    allCharacters = [...allCharacters, ...results];
    offset += 100;
    hasMoreResults = offset < total;
  }
  return allCharacters;
};
