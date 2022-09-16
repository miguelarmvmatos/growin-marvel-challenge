import React, { useState, useEffect } from "react";

import { useParams } from "react-router-dom";

import { getCharacter } from "../api/Api";

function CardDetails() {
  let { id } = useParams();

  const [character, setCharacter] = useState();

  useEffect(() => {
    getCharacter(id).then((output) => {
      setCharacter(output.data.results[0]);
    });
  }, []);
  if (!character) return;
  console.log("character", character);
  return (
    <div className="container large">
      <div className="hero__details-container">
        <img
          src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
          alt="hero full size"
        />
        <div className="hero__details">
          <h4>Name</h4>
          <p>{character.name}</p>
          {character.description ? (
            <>
              <h4>Description</h4>
              <p>{character.description}</p>
            </>
          ) : null}
          <div className="hero__series">
            <h4>Series</h4>
            <ul>
              {character.series.items.map((serie) => (
                <li key={Math.random() * 1000}>{serie.name}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardDetails;
