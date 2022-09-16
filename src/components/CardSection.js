import React, { Fragment } from "react";

import CardItem from "./CardItem";

function CardSection({ characters }) {
  const IMAGE_SIZE = "standard_fantastic";
  return (
    <Fragment>
      <div className="card_section">
        {characters.map((character) => (
          <CardItem
            //image={character.thumbnail.path + "/landscape_xlarge.jpg"}
            image={`${character.thumbnail.path}/${IMAGE_SIZE}.${character.thumbnail.extension}`}
            title={character.name}
            description={character.description}
            id={character.id}
            key={character.id}
          />
        ))}
      </div>
    </Fragment>
  );
}
export default CardSection;
