"use client";

import React, { useState } from "react";

const Card = ({ children }: { children: React.ReactNode }) => {
  const [isHovered, setIsHovered] = useState(false);

  const cardStyle = {
    padding: "40px",
    margin: "20px",
    // width: "200px",
    boxShadow: isHovered
      ? "0 20px 40px rgba(0, 0, 0, 0.15)"
      : "0 10px 20px rgba(0, 0, 0, 0.1)",
    borderRadius: "12px",
    border: "1px solid #e0e0e0",
    backgroundColor: "#fff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    cursor: "pointer",
    transform: isHovered ? "translateY(-5px)" : "translateY(0)",
  };

  const handleMouseOver = () => {
    setIsHovered(true);
  };

  const handleMouseOut = () => {
    setIsHovered(false);
  };

  return (
    <div
      style={cardStyle}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      {children}
    </div>
  );
};

export default Card;
