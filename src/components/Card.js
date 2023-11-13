import React, { useContext } from "react";

export default function ({ product }) {
  return (
    <div
      style={{ width: "250px", height: "250px", backgroundColor: "red" }}
      className="card"
    >
      <h1>{product.title}</h1>
      <h1>{product.id}</h1>
    </div>
  );
}