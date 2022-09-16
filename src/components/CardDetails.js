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
      <div className="character_details-container">
        <img
          src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
          alt="hero full size"
        />
        <div className="character_details">
          <h4>Name</h4>
          <p>{character.name}</p>
          {character.description ? (
            <>
              <h4>Description</h4>
              <p className="character_description">{character.description}</p>
            </>
          ) : null}
          {character.series.available !== 0 ? (
            <div className="character_series">
              <h4>Series</h4>
              <ul>
                {character.series.items.map((serie) => (
                  <li key={Math.random() * 1000}>{serie.name}</li>
                ))}
              </ul>
            </div>
          ) : null}
          {character.series.available !== 0 ? (
            <div className="character_stories">
              <h4>Stories</h4>
              <ul>
                {character.stories.items.map((story) => (
                  <li key={Math.random() * 1000}>{story.name}</li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default CardDetails;
