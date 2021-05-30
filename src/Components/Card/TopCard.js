import React from "react";
import "./TopCard.css";
function TopCard({title, imageUrl, price}) {
  return (
    <div className="top-products">
      <div className="top-image">
        <img src={imageUrl} alt=""/>
      </div>
      <div className="topcard-content">
        <div className="topcard-title">
          <h3>{title}</h3>
        </div>
        <div className="topcard-rating">
          <p>⭐⭐⭐⭐⭐</p>
        </div>
        <div className="topcard-price">
          <p>${price}</p>
        </div>
      </div>
    </div>
  );
}

export default TopCard;
