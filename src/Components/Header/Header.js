import React from "react";
import AddProduct from "../Products/AddProduct";
import "./Header.css";
function Header({filteredProducts,setFilteredProducts}) {
  return (
    <div className="header">
      <div>
        <h2>Products</h2>
      </div>
      <div>
        <AddProduct filteredProducts={filteredProducts} setFilteredProducts={setFilteredProducts} />
      </div>
    </div>
  );
}

export default Header;
