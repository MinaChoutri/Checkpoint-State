import React from "react";

const Movie = ({ movie }) => {
  const poster = movie.poster === "N/A" ? "./container.json" : movie.Poster;

  return (
    <div>
      <h2>{movie.Title}</h2>
      <div>
        <img width="200" src={poster} />
      </div>
      <p>({movie.Year})</p>
    </div>
  );
};

export default Movie;
