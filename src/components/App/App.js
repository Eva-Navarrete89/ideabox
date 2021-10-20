import React, { Component } from "react";

import Ideas from "../Ideas/Ideas";

import "./App.css";

// The Data lives in the App component because it the parent component where it would be easiest and the logical to pass down data to children

class App extends Component {
  constructor() {
    super();
    // We pass in the data using state. Using state in a class component will always give us an object.
    // That allows us to access the data using dot notaion
    this.state = {
      ideas: [
        {
          id: 1,
          title: "Prank Travis",
          description: "Stick googly eyes on all his stuff",
        },
        {
          id: 2,
          title: "Make a secret password app",
          description:
            "So you and your rideshare driver can both know neither one of you is lying",
        },
        {
          id: 3,
          title: "Learn a martial art",
          description: "To exact vengeance upon my enemies",
        },
      ],
    };
  }
  //
  // We pass the data by creating a property to our component and giving it the value of our object which hold our data
  render() {
    return (
      <main className="App">
        <h1>IdeaBox</h1>
        <Ideas ideas={this.state.ideas} />
      </main>
    );
  }
}

export default App;
