import React, { useEffect } from "react";

import { getCharacters } from "../api/Api";

function Home() {
  useEffect(() => {
    getCharacters().then((output) => {
      /*setCharacters(output.data.results)
            setCharactersRef(output.data.results)
            setLoading(false)*/
      console.log(output.data.results);
    });
  }, []);
  return <div>Home</div>;
}

export default Home;
