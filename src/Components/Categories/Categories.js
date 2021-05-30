import React from "react";
import "./Categories.css";
function Categories({ productCategory, setFilter }) {
  return (
    <div>
      <p className="categories-title">CATEGORIES</p>
      <div className="categories">
        {productCategory.map((category) => {
          return <p  onClick={() => setFilter(category)}>{category}</p>;
        })}
      </div>
    </div>
  );
}

export default Categories;
