import React from "react";

import "./Card.css";

const Card = ({ title, description, id, deleteIdea }) => {
  //we use destructuring to pass in the name of the properties of the data that we want rendered on our page.
  return (
    <div className="card" id={id}>
      <h3>{title}</h3>
      <p>{description}</p>
      <button
        onClick={() => {
          deleteIdea(id);
        }}
      >
        delete
      </button>
    </div>
  );
};

export default Card;
