import React, { Component } from 'react';
import Search from "./Search";

class App extends Component {
  state = {
    searchTerm: null,
    characterList: []
  }

  userInput = (event) => {
    event.preventDefault();
    const searchValue = event.currentTarget.search.value;
    this.setState({
      searchTerm: searchValue
    })
    fetch(`https://swapi.co/api/people/?search=${searchValue}`)
      .then(resJson => resJson.json())
      .then(res => res.results.map(char => {
        return {
          name: char.name
        }
      }))
      .then(data => this.setState({
        characterList: data
      }));
  };

  render() {
    return (
      <div className="App">
        <Search userInput={this.userInput} />
      </div>
    );
  }
}

export default App;
