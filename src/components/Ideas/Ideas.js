import React from "react";
import Card from "../Card/Card";

import "./Ideas.css";

const Ideas = ({ ideas, deleteIdea }) => {
  // we pass down data to the children by using props.
  // But we destructured props and are using the property name which we gave the component in the the parent compent (APP)
  // We use map within our Ideas child component (Card) to return an array of the same length with the properties/data we want to display
  //we pass the values of our mapped items through properties which we will use to pass down to the child component (Card)
  const ideaCards = ideas.map((idea) => {
    return (
      <Card
        title={idea.title}
        description={idea.description}
        id={idea.id}
        key={idea.id}
        deleteIdea={deleteIdea}
      />
    );
  });
  return <div className="ideas-container">{ideaCards}</div>;
};

export default Ideas;
