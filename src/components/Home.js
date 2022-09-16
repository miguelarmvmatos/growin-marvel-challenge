import React, { useState, useEffect } from "react";

import CardSection from "./CardSection";
import Pagination from "./Pagination";
import Search from "./Search";

import { getCharacters } from "../api/Api";

function Home(props) {
  const [characterSelected, setCharacterSelected] = useState("");
  const [characters, setCharacters] = useState([]);
  const [charactersRef, setCharactersRef] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [charactersPerPage] = useState(15);

  const indexOfLastCharacter = currentPage * charactersPerPage;
  const indexOfFirstCharacter = indexOfLastCharacter - charactersPerPage;
  const currentCharacters = characters.slice(
    indexOfFirstCharacter,
    indexOfLastCharacter
  );

  // Change Page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Search Filter Function
  const updateCharacters = (characterSelected) => {
    const filtered = charactersRef.filter((hero) => {
      console.log(characterSelected);
      return hero.name.toLowerCase().includes(characterSelected.toLowerCase());
    });
    setCharacterSelected(characterSelected);
    setCharacters(filtered);
  };

  useEffect(() => {
    getCharacters().then((output) => {
      setCharacters(output.data.results);
      setCharactersRef(output.data.results);
      /*setLoading(false)*/
      console.log(output);
    });
  }, []);
  return (
    <div className="home">
      <Search characters={characters} setCharacter={updateCharacters} />
      <CardSection characters={currentCharacters} />
      <Pagination
        totalcharacters={characters.length}
        charactersPerPage={charactersPerPage}
        paginate={paginate}
      />
    </div>
  );
}

export default Home;
