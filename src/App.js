import React, { Component } from "react";
// import Movie from "./components/movies/movies";
import MoviesContainer from './components/movies/movieContainer'
import Search from "./components/search/search";
import Pagination from "./components/pagination/pagination";
import "./style.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="appHeader">
          <h1> Movie DataBase</h1>
          <div className="searchBox">
            {" "}
            <Search />{" "}
          </div>
        </div>
        <div className="moviesContainer">
          <MoviesContainer/>
          {/* <MoviesContainer/>
          <MoviesContainer/>
          <MoviesContainer/>
          <MoviesContainer/>
          <MoviesContainer/>
          <MoviesContainer/>
          <MoviesContainer/> */}
        </div>
        <div className="paginationContainer">
          <Pagination />
        </div>
      </div>
    );
  }
}

export default App;
