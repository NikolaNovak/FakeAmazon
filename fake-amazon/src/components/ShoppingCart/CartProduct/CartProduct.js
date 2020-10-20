import React from "react";
import { useStateValue } from "../../../StateProvider";

import "./CartProduct.css";

const CartProduct = ({ id, title, image, price, rating }) => {
  const dispatch = useStateValue()[1];

  const removeFromCart = () => {
    dispatch({ type: "REMOVE_FROM_CART", id: id });
  };

  return (
    <div className="cartProduct">
      <img className="cartProduct__image" src={image} alt="" />

      <div className="cartProduct__info">
        <div className="cartProduct__titlePrice">
          <p className="cartProduct__title">{title}</p>
          <p className="cartProduct__price">
            <small>$</small>
            <strong>{price}</strong>
          </p>
        </div>
        <button onClick={removeFromCart}>Remove from cart</button>
      </div>
    </div>
  );
};

export default CartProduct;
