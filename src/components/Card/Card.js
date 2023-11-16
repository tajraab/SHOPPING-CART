// import React from 'react';
import "./Card.css";
import React, { useState } from "react";

function Card() {
  const [selectedColor, setSelectedColor] = useState("#456ABD"); 
  const [selectedSize, setSelectedSize] = useState("M");

  const colorOptions = [
    { color: "lightgrey", img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/t-shirt-large2.png" },
    { color: "#456ABD", img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/t-shirt-large.png" },
    { 
      color: "#EAA523",
      img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/t-shirt-large3.png",
    },
  ];

  const handleColorChange = (color, img) => {
    setSelectedColor(color);
    document.body.style.background = color;
    document.querySelector(".wrapper .price").style.color = color;
    document
      .querySelectorAll(".size-value span.color")
      .forEach((span) => (span.style.color = color));
    document.querySelector(".size-value span.active").style.background = color;
    document.querySelector(".image img").src = img;
    document.querySelectorAll(".btns button").forEach((btn) => {
      btn.style.background = color;
      btn.style.borderColor = color;
    });
  };

  const handleSizeChange = (size) => {
    setSelectedSize(size);
  };

  return (
    <div className="container">
      <div className="image">
        <img
          src={
            colorOptions.find((option) => option.color === selectedColor)?.img
          }
          alt=""
        />
      </div>
      <div className="card-content">
        <div className="wrapper">
          <div className="title">Adidas Originals</div>
          <p>Men's running tshirt</p>
          <span className="price">$29.99</span>
          <div className="content size">
            <div className="name size-name">Size</div>
            <div className="size-value">
              <span
                className={`color ${selectedSize === "XS" ? "active" : ""}`}
                onClick={() => handleSizeChange("XS")}
              >
                XS
              </span>
              <span
                className={`color ${selectedSize === "S" ? "active" : ""}`}
                onClick={() => handleSizeChange("S")}
              >
                S
              </span>
              <span
                className={`color ${selectedSize === "M" ? "active" : ""}`}
                onClick={() => handleSizeChange("M")}
              >
                M
              </span>
              <span
                className={`color ${selectedSize === "L" ? "active" : ""}`}
                onClick={() => handleSizeChange("L")}
              >
                L
              </span>
              <span
                className={`color ${selectedSize === "XL" ? "active" : ""}`}
                onClick={() => handleSizeChange("XL")}
              >
                XL
              </span>
            </div>
          </div>
          <div className="content colour">
            <div className="name colour-name">Colour</div>
            <div className="colour-value">
              {colorOptions.map((option) => (
                <span
                  key={option.color}
                  className={`${option.color} ${
                    selectedColor === option.color ? "active" : ""
                  }`}
                  data-color={option.color}
                  data-img={option.img}
                  onClick={() => handleColorChange(option.color, option.img)}
                ></span>
              ))}
            </div>
          </div>
          <div className="btns">
            <button>Buy now</button>
            <button>Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
