import React from "react";
import { connect } from "react-redux";
import Movies from "./movies.js";
import { fetchPopularMovieList } from "./action";
import "./movies.css";
import Loader from "../commons/loader";

class MovieContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      page: 1
    };
  }
  componentDidMount() {
    this.props.fetchPopularMovieList(this.state.page);
  }

  handleNext() {
    console.log("here in the handleNext", this.state.page);
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
    console.log("mpovie list", movieList.length);
    return (
      <div className="movieContainer">
        <button onClick={e => this.handleNext(e)}>next</button>
        <button
          disabled={this.state.page === 1}
          onClick={e => this.handlePrevious(e)}
        >
          previous
        </button>
        <div className="movieInlineFlex">
          {this.props.isLoading ? (
            <Loader />
          ) : (
            movieList.map((props, i) => <Movies key={i} {...props} />)
          )}
          {/* {movieList.map((props, i) => (
            <Movies key={i} {...props} />
          ))} */}
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
    fetchPopularMovieList: page => dispatch(fetchPopularMovieList(page))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieContainer);
