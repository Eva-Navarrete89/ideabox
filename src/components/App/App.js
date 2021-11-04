import React, { Component } from "react";

import Ideas from "../Ideas/Ideas";
import Form from "../Form/Form";

import "./App.css";

// The Data lives in the App component because it the parent component where it would be easiest and the logical to pass down data to children

class App extends Component {
  constructor() {
    super();
    // We pass in the data using state. Using state in a class component will always give us an object.
    // That allows us to access the data using dot notaion
    this.state = {
      ideas: [],
    };
  }
  addIdea = (newIdea) => {
    this.setState({ ideas: [...this.state.ideas, newIdea] });
  };

  deleteIdea = (id) => {
    const filteredIdeas = this.state.ideas.filter((idea) => idea.id != id);
    this.setState({ ideas: filteredIdeas });
  };
  // We pass the data by creating a property to our component and giving it the value of our object which hold our data
  render() {
    return (
      <main className="App">
        <h1>IdeaBox</h1>
        <Form addIdea={this.addIdea} />
        <Ideas ideas={this.state.ideas} deleteIdea={this.deleteIdea} />
      </main>
    );
  }
}

export default App;
