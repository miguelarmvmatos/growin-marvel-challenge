import MD5 from "crypto-js/md5";

const getHash = (ts, secretKey, publicKey) => {
  return MD5(ts + secretKey + publicKey).toString();
};
// Get all the Characters
export const getCharacters = async () => {
  let apiKey = process.env.REACT_APP_MARVEL_API_KEY;
  let privateKey = process.env.REACT_APP_MARVEL_API_HASH;
  let ts = Date.now().toString();
  let hash = getHash(ts, privateKey, apiKey);
  const URL = `https://gateway.marvel.com/v1/public/characters?ts=${ts}&apikey=${apiKey}&hash=${hash}&limit=100`;
  return fetch(URL)
    .then((response) => response.json())
    .catch((error) => console.log("ERROR : ", error));
};

// Get all the Characters
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
