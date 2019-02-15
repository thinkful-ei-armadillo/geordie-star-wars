import React, { Component } from 'react';

class App extends Component {
  state = {
    searchTerm: null,
    characterList: []
  }
  render() {
    return (
      <div className="App">
      <h1>Star Wars</h1>
      </div>
    );
  }
}

export default App;
