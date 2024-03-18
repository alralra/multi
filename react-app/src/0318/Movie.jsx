import React from "react";

const Movie = (props) => {

  return (
    <div>
      <h1> 영화 제목 : {props.title} </h1>
      <h1> 개봉 : {props.open}</h1>
    </div>
  );
};
export default Movie;
