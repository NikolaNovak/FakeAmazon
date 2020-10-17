import React from "react";

import { useStateValue } from "../../StateProvider";
import Subtotal from "./Subtotal/Subtotal";
import CartProduct from "./CartProduct/CartProduct";
import "./ShoppingCart.css";

const ShoppingCart = () => {
  const { cart } = useStateValue()[0];

  return (
    <div className="cart">
      <div className="cart__left">
        <img
          className={cart?.length === 0 ? "cart__adEmpty" : "cart__ad"}
          src="https://images-na.ssl-images-amazon.com/images/G/01/gift-certificates/consumer/2020/GCLP/EGCU_D_1024x180_v1_EN_20200318._CB1584039996_.jpg"
          alt=""
        />
        {cart?.length === 0 ? (
          <div className="cart__emptyCart">
            <h2>Your Shopping Cart is empty.</h2>
            <p>
              You have no items in your cart. Add some by clicking the "Add to cart" button below an
              item on the home page.
            </p>
          </div>
        ) : (
          <div>
            <h2 className="cart__title">Your Shopping Cart</h2>

            {cart?.map((item) => (
              <CartProduct
                key={item.id}
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
              />
            ))}
          </div>
        )}
      </div>
      {cart.length > 0 && (
        <div className="cart__right">
          <Subtotal />
        </div>
      )}
      <div className="cart__right"></div>
    </div>
  );
};

export default ShoppingCart;
