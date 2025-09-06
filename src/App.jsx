import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import MovieGrid from "./components/MovieGrid";
import MovieModal from "./components/MovieModal";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const apiKey = import.meta.env.VITE_OMDB_API_KEY;

  const fetchMovies = async (query) => {
    if (!query) return;
    setLoading(true);

    try {
      const response = await fetch(`http://www.omdbapi.com/?apikey=${apiKey}&s=${query}`);
      const data = await response.json();
      if (data.Search) {
        setMovies(data.Search);
      } else {
        setMovies([]);
      }
    } catch (error) {
      console.error("Error fetching movies:", error);
    }

    setLoading(false);
  };

  const fetchMovieDetails = async (id) => {
    try {
      const response = await fetch(`http://www.omdbapi.com/?apikey=${apiKey}&i=${id}&plot=full`);
      const data = await response.json();
      setSelectedMovie(data);
    } catch (error) {
      console.error("Error fetching movie details:", error);
    }
  };

  return (
    <div style={{
    padding: "20px",
    minHeight: "100vh",
    background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)", // dark gradient
    fontFamily: "Arial, sans-serif",
    color: "white",
  }}>
      <h1  style={{
      textAlign: "center",
      fontSize: "3rem",
      fontWeight: "bold",
      background: "linear-gradient(90deg, #00c6ff, #ff6ec4)", // cyan to pink
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      marginBottom: "30px",
    }}>🎬 Movie Explorer</h1>
      <SearchBar onSearch={fetchMovies} />
      {loading ? <p>Loading...</p> : <MovieGrid movies={movies} onMovieClick={fetchMovieDetails} />}
      <MovieModal movie={selectedMovie} onClose={() => setSelectedMovie(null)} />
    </div>
  );
};

export default App;
