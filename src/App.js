import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      ideas: [],
    };
  }

  render() {
    return (
      <main className="App">
        <h1>IdeaBox</h1>
        <p>Hello</p>
      </main>
    );
  }
}

export default App;
