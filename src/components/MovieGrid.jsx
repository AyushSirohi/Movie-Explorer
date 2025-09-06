import React from "react";
import MovieCard from "./MovieCard";

const MovieGrid = ({ movies, onMovieClick, onAddFavorite }) => {
  if (movies.length === 0) {
    return <p style={{ textAlign: "center" }}>No movies found. Try searching!</p>;
  }

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", // responsive columns
        gap: "20px", // spacing between cards
        marginTop: "20px",
      }}
    >
      {movies.map((movie, index) => (
        <MovieCard
          key={index}
          title={movie.Title}
          poster={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/150"}
          rating={movie.Year}
          onClick={() => onMovieClick(movie.imdbID)}
          onAddFavorite={() => onAddFavorite(movie)}
        />
      ))}
    </div>
  );
};

export default MovieGrid;
