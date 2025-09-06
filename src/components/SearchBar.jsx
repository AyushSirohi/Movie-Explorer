import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div  style={{
        display: "flex",
        justifyContent: "center",
        marginBottom: "30px",
      }}>
      <input
        type="text"
        placeholder="Search movies..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{
          width: "350px",
          padding: "12px 16px",
          borderRadius: "30px 0 0 30px",
          border: "none",
          outline: "none",
          fontSize: "16px",
          background: "#1e293b",
          color: "white",
          boxShadow: "0 0 10px rgba(0, 255, 255, 0.4)",
        }}
      />
      <button onClick={handleSearch} style={{
          padding: "12px 20px",
          borderRadius: "0 30px 30px 0",
          border: "none",
          background: "linear-gradient(90deg, #00c6ff, #ff6ec4)",
          color: "white",
          fontWeight: "bold",
          cursor: "pointer",
          transition: "0.2s",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.8")}
        onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}>
        Search
      </button>
    </div>
  );
};

export default SearchBar;