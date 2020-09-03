import React from "react";

import "./Product.css";

const Product = ({ id, title, image, price, rating }) => {
  return (
    <div key={id} className="product">
      <div className="product__info">
        <p>{title}</p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <span key={Math.random()} role="img" aria-label="rating stars">
                ⭐
              </span>
            ))}
        </div>
        <p className="product__price">${price}</p>
      </div>
      <img src={image} alt="" />
      <button>Add to basket</button>
    </div>
  );
};

export default Product;
