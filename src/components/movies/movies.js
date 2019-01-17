import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";
import  './movies.css'

const movies = (props) => {
  return (
    <div className='movieContainer'>
      <Card>
        <CardImg
          top
          width="100%"
          src={`http://image.tmdb.org/t/p/w185/${props.poster_path}`}
          alt="Card image cap"
        />
        <CardBody>
          <CardTitle>{props.original_title}</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>
            {props.overview}
          </CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default movies;
