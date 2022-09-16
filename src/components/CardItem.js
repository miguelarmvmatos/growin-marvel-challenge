import React from "react";
import { Link } from "react-router-dom";

function CardItem(props) {
  return (
    <Link to={`/${props.id}`}>
      <div className="card">
        <img src={props.image} alt="thumbnail" />
        <h1 className="card-name">{props.title}</h1>
      </div>
    </Link>
  );
}

export default CardItem;
