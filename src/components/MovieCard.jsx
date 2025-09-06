import React from "react";

const MovieCard = ({ title, poster, rating, onClick, onAddFavorite }) => {
  return (
    <div
      style={{
        background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)", // dark gradient
        borderRadius: "16px",
        padding: "15px",
        width: "200px",
        textAlign: "center",
        cursor: "pointer",
        boxShadow: "0 0 10px rgba(0, 255, 255, 0.4)", // glowing effect
        transition: "transform 0.2s, box-shadow 0.2s",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "scale(1.05)";
        e.currentTarget.style.boxShadow = "0 0 20px rgba(0, 255, 255, 0.8)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "scale(1)";
        e.currentTarget.style.boxShadow = "0 0 10px rgba(0, 255, 255, 0.4)";
      }}
    >
      {/* Poster */}
      <img
        src={poster}
        alt={title}
        style={{
          width: "100%",
          borderRadius: "12px",
          marginBottom: "10px",
        }}
        onClick={onClick}
      />

      {/* Title */}
      <h3 style={{ fontSize: "16px", color: "white", margin: "8px 0" }}>
        {title}
      </h3>

      {/* Rating */}
      <p style={{ color: "#b0c4de", margin: "5px 0" }}>Year:{rating}</p>
    </div>
  );
};

export default MovieCard;
