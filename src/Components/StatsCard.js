import React from "react";

function StatsCard({ title, value, change }) {
  const cardStyles = {
    flex: "1",
    padding: "20px",
    backgroundColor: "#f9f9f9",
    borderRadius: "10px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
  };

  const titleStyles = {
    fontSize: "1rem",
    fontWeight: "bold",
    marginBottom: "10px",
  };

  const valueStyles = {
    fontSize: "1.5rem",
    marginBottom: "10px",
    color: "#333",
  };

  const changeStyles = {
    color: change.startsWith("+") ? "green" : "red",
    fontWeight: "bold",
  };

  return (
    <div style={cardStyles}>
      <h3 style={titleStyles}>{title}</h3>
      <p style={valueStyles}>{value}</p>
      <span style={changeStyles}>{change}</span>
    </div>
  );
}

export default StatsCard;
