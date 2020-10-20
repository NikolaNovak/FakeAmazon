import React from "react";
import { useStateValue } from "../../../StateProvider";

import "./Product.css";

const Product = ({ id, title, image, price, rating }) => {
  const dispatch = useStateValue()[1];

  const addToCart = () => {
    dispatch({
      type: "ADD_TO_CART",
      item: {
        id,
        title,
        image,
        price,
        rating,
      },
    });
  };

  return (
    <div key={id} className="product">
      <div className="product__info">
        <p>{title}</p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <span key={Math.random() * 1000} role="img" aria-label="rating stars">
                ⭐
              </span>
            ))}
        </div>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
      </div>
      <img src={image} alt="" />
      <button onClick={addToCart}>Add to cart</button>
    </div>
  );
};

export default Product;
