import React from "react";
import TopCard from "../Card/TopCard";
import "./ProductList.css";
function TopProductList({ productDetails }) {
  console.log("TopProductList", productDetails);
  if (productDetails) {
    return (
      <div className="TopProductList">
        <h5 className="topProduct-title">TOP PRODUCTS</h5>
        {productDetails
          .filter((product) => product.isTopProduct)
          .slice(0, 3)
          .map((product) => {
            return (
              <TopCard
                title={product.productTitle}
                imageUrl={product.productImageUrl}
                price={product.productPrice}
              />
            );
          })}
      </div>
    );
  }
}

export default TopProductList;
