import React from "react";

import "./CheckoutProduct.css";
import { useStateValue } from "../../../StateProvider";

const CheckoutProduct = ({ id, title, image, price, rating }) => {
  const dispatch = useStateValue()[1];

  const removeFromBasket = () => {
    dispatch({ type: "REMOVE_FROM_BASKET", id: id });
  };

  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={image} alt="" />

      <div className="checkoutProduct__info">
        <div className="checkoutProduct__titlePrice">
          <p className="checkoutProduct__title">{title}</p>
          <p className="checkoutProduct__price">
            <small>$</small>
            <strong>{price}</strong>
          </p>
        </div>
        <button onClick={removeFromBasket}>Remove from cart</button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
