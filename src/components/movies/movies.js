import React from "react";
import "./movies.css";

const movies = props => {
  return (
    <div className="movieCardBlock">
      <div className="movieImgBlock">
        <img
          src={`http://image.tmdb.org/t/p/w342/${props.poster_path}`}
          alt="Card image cap"
        />
      </div>
      <div className="movieTextBlock">
        <h2>{props.original_title}</h2>
        <h2>{props.vote_average}</h2>
        <p>{props.overview}</p>
      </div>
    </div>
  );
};

export default movies;
