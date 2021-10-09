import React from "react";

import "./Card.css";

const Card = ({ title, description, id }) => {
  return (
    <div className="card" id={id}>
      <h3>{title}</h3>
      <p>{description}</p>
      <button>delete</button>
    </div>
  );
};

export default Card;
