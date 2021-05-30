import React, { useState } from "react";
import Card from "../Card/Card";
import Dropdown from "../utlis/Dropdown";
import "./ProductList.css";
function ProductList({ filteredProducts }) {
  const [sort, setSort] = useState("default");
  function sortProducts(product1, product2) {
    console.log(sort);
    if (sort === "default") {
      return;
    } else if (sort === "lowToHigh") {
      if (product1.productPrice > product2.productPrice) {
        return 1;
      }
      if (product1.productPrice < product2.productPrice) {
        return -1;
      }
      return 0;
    } else if (sort === "highToLow") {
      if (product1.productPrice > product2.productPrice) {
        return -1;
      }
      if (product1.productPrice < product2.productPrice) {
        return 1;
      }
      return 0;
    }
  }
  return (
    <div className="productList-container">
      <div className="productList-header">
        <div>
          <p> showing1-8 of 9 results</p>
        </div>
        <Dropdown
          sort={sort}
          setSort={(sort) => {
            setSort(sort);
          }}
        />
      </div>
      <div className="productList">
        {filteredProducts
          .sort((product1, product2) => sortProducts(product1, product2))
          .map((product) => {
            return (
              <Card
                title={product.productTitle}
                imageUrl={product.productImageUrl}
                price={product.productPrice}
              />
            );
          })}
      </div>
    </div>
  );
}

export default ProductList;
