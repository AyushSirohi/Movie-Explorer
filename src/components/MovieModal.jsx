import React from "react";

const MovieModal = ({ movie, onClose }) => {
  if (!movie) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "rgba(0,0,0,0.7)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
      }}
    >
<div
  style={{
    background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
    padding: "20px",
    borderRadius: "20px",
    width: "500px",
    maxHeight: "80vh",   
    overflowY: "auto",  
    color: "white",
    position: "relative",
  }}
>
  <button
    onClick={onClose}
    style={{
      position: "absolute",
      top: "10px",
      right: "10px",
      background: "transparent",
      border: "none",
      fontSize: "20px",
      color: "white",
      cursor: "pointer",
    }}
  >
    ✖
  </button>

        <h2>{movie.Title}</h2>
        <img
          src={movie.Poster}
          alt={movie.Title}
          style={{ width: "200px", borderRadius: "10px", margin: "10px 0" }}
        />
        <p><strong>Year:</strong> {movie.Year}</p>
        <p><strong>Genre:</strong> {movie.Genre}</p>
        <p><strong>Actors:</strong> {movie.Actors}</p>
        <p><strong>Plot:</strong> {movie.Plot}</p>
        <p><strong>IMDB Rating:</strong> ⭐ {movie.imdbRating}</p>
      </div>
    </div>
  );
};

export default MovieModal;

