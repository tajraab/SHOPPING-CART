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
