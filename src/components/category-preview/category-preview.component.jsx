import "./category-preview.styles.scss";
import React from "react";
import ProductCard from "../product-card/product-card.component";

function CategoryPreview({ title, products }) {
  return (
    <div className="category-preview-container">
      <h2>
        <span className="title">{title.toUpperCase()} </span>
      </h2>
      <div className="product-cards-container">
        {products
          .filter((product, index) => index < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
}

export default CategoryPreview;
