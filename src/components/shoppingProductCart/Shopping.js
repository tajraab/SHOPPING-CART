import React from "react";
import "./Shopping.css";
import { useState } from "react";

function Shopping({ product, removeFromCart }) {
    const [quantity, setQuantity] = useState(0);
  
    const max = 10;
    const increase = () => {
      if (quantity !== max) {
        setQuantity(quantity + 1);
      }