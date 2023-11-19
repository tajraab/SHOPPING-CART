import React from "react";
import "./Product.css";
import { useState } from "react";
function Card({ product, addToCart }) {
    const [quantity, setQuantity] = useState(0);
    const max = 10;
    const increase = () => {
      if (quantity !== max) {
        setQuantity(quantity + 1);
      }
    };
    const decrease = () => {
      if (quantity > 0) setQuantity(quantity - 1);
    };
  
    return (
      <div className="main-cont">
        <div className="first-cont">
        <img src={product.imageURL} alt={product.title} />
      </div>
      <div className="second-cont">
        <h4>{product.title}</h4>
        <h5 id="green-underline">Remove</h5>
      </div>
      <div className="third-cont">
        <h4>{Number(product.price)}$</h4>
        <div className="quantity">
          <p style={{ cursor: "pointer" }} onClick={decrease}>
            -
          </p>
