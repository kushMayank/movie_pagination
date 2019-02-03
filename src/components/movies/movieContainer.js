import React from "react";
import { connect } from "react-redux";
import Movies from "./movies.js";
import { fetchPopularMovieList, fetchSearchMovieList } from "./action";
import "./movies.css";
import Loader from "../commons/loader";

class MovieContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      page: 1,
      movieName: "",
      errorMessage: ""
    };
  }
  componentDidMount() {
    this.props.fetchPopularMovieList(this.state.page);
  }

  handleChange(e) {
    console.log("e.target.value", e.target.value);
    this.setState({
      movieName: e.target.value,
      errorMessage: ""
    });
  }

  handleSearch(e) {
    console.log("here in the handleSearch", this);
    if (this.state.movieName.trim() !== "") {
      this.props.fetchSearchMovieList(this.state.movieName);
      this.setState({
        errorMessage: ""
      });
    } else {
      this.setState({
        errorMessage: "Please enter the key"
      });
    }
  }

  handleHome = () => {
    console.log("handle go to home ");
    this.props.fetchPopularMovieList(this.state.page);
  };

  handleNext() {
    console.log("this in hanld eNext", this);
    this.setState({
      page: this.state.page + 1
    });
    this.props.fetchPopularMovieList(this.state.page);
  }

  handlePrevious() {
    if (this.state.page > 1) {
      this.setState({
        page: this.state.page - 1
      });
      this.props.fetchPopularMovieList(this.state.page);
    }
  }

  render() {
    var movieList = this.props.movies;
    return (
      <div className="movieContainer">
        <button onClick={e => this.handleNext(e)}>next</button>
        <button
          disabled={this.state.page === 1}
          onClick={e => this.handlePrevious(e)}
        >
          previous
        </button>
        <div className="search">
          <h4>Search</h4>
          <input
            onChange={e => this.handleChange(e)}
            type="text"
            name="search"
            id="search"
            placeholder="Enter the Movie Name"
          />
          <span className="errorMessage">{this.state.errorMessage}</span>
          <button onClick={e => this.handleSearch(e)}>Submit</button>
        </div>
        <div className="movieInlineFlex">
          {this.props.isLoading ? (
            <Loader />
          ) : movieList.length > 0 ? (
            movieList.map((props, i) => <Movies key={i} {...props} />)
          ) : (
            <div className="noData">
              No Data <span onClick={this.handleHome}>click me go Home</span>
            </div>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    movies: state.movieReducer.movieList,
    isLoading: state.movieReducer.isLoading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchPopularMovieList: page => dispatch(fetchPopularMovieList(page)),
    fetchSearchMovieList: query => dispatch(fetchSearchMovieList(query))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieContainer);
