import React from "react";
import "./Product.css";
import { useState } from "react";
function Card({ product, addToCart }) {
    const [quantity, setQuantity] = useState(0);
  
