import React from "react";
import { Link } from "react-router-dom";

function CardItem(props) {
  return (
    <Link to={`/${props.id}`}>
      <div className="card">
        <img src={props.image} alt="thumbnail" />
        <div className="card_name">
          <h3 title={props.title}>{props.title}</h3>
        </div>
      </div>
    </Link>
  );
}

export default CardItem;
