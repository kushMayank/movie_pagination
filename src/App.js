import React, { Component } from "react";
// import Movie from "./components/movies/movies";
import MoviesContainer from "./components/movies/movieContainer";
import PaginationContainer from "./components/pagination/paginationContainer";
import "./style.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="appHeader">
          <h1>Movies Database</h1>
        </div>
        <div className="moviesContainer">
          <MoviesContainer />
        </div>
        <div className="paginationContainer">
          <PaginationContainer />
        </div>
      </div>
    );
  }
}

export default App;
