import React from "react";
import "./Card.css";
function Card({ title, imageUrl, price }) {
  return (
    <div className="card-container">
      <div className="image-container">
        <img src={imageUrl} alt="" />
      </div>
      <div className="card-content">
        <div className="card-title">
          <h3>{title}</h3>
        </div>
        <div className="card-price">
          <p>${price}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
