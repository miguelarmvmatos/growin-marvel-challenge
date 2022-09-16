import React, { Fragment } from "react";

import CardItem from "./CardItem";

function CardSection({ heroes }) {
  return (
    <Fragment>
      <div className="card_section">
        {heroes.map((hero) => (
          <CardItem
            image={hero.thumbnail.path + "/landscape_xlarge.jpg"}
            title={hero.name}
            description={hero.description}
            id={hero.id}
            key={hero.id}
          />
        ))}
      </div>
    </Fragment>
  );
}

export default CardSection;
