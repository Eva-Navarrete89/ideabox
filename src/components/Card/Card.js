import React from "react";

import "./Card.css";

const Card = ({ title, description, id }) => {
  //we use destructuring to pass in the name of the properties of the data that we want rendered on our page.
  return (
    <div className="card" id={id}>
      <h3>{title}</h3>
      <p>{description}</p>
      <button>delete</button>
    </div>
  );
};

export default Card;
