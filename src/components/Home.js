import React, { useState, useEffect } from "react";

import CardSection from "./CardSection";
import Pagination from "./Pagination";
import Search from "./Search";

import { getAllCharacters } from "../api/Api";

function Home(props) {
  const [characterSelected, setCharacterSelected] = useState("");
  const [characters, setCharacters] = useState([]);
  const [charactersRef, setCharactersRef] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [charactersPerPage] = useState(100);
  const [loading, setLoading] = useState(true);

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
      return hero.name.toLowerCase().includes(characterSelected.toLowerCase());
    });
    setCharacterSelected(characterSelected);
    setCharacters(filtered);
  };

  useEffect(() => {
    getAllCharacters().then((output) => {
      setCharacters(output);
      setCharactersRef(output);
      setLoading(false);
    });
  }, []);
  return (
    <div className="home">
      <Search characters={characters} setCharacter={updateCharacters} />
      <CardSection characters={currentCharacters} loading={loading} />
      <Pagination
        totalcharacters={characters.length}
        charactersPerPage={charactersPerPage}
        paginate={paginate}
      />
    </div>
  );
}

export default Home;
