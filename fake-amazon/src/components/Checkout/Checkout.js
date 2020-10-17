import React from "react";

import { useStateValue } from "../../StateProvider";
import Subtotal from "./Subtotal/Subtotal";
import CheckoutProduct from "./CheckoutProduct/CheckoutProduct";
import "./Checkout.css";

const Checkout = () => {
  const { cart } = useStateValue()[0];

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className={cart?.length === 0 ? "checkout__adEmpty" : "checkout__ad"}
          src="https://images-na.ssl-images-amazon.com/images/G/01/gift-certificates/consumer/2020/GCLP/EGCU_D_1024x180_v1_EN_20200318._CB1584039996_.jpg"
          alt=""
        />
        {cart?.length === 0 ? (
          <div className="checkout__emptyCart">
            <h2>Your Shopping Cart is empty.</h2>
            <p>
              You have no items in your cart. Add some by clicking the "Add to cart" button below an
              item on the home page.
            </p>
          </div>
        ) : (
          <div>
            <h2 className="checkout__title">Your Shopping Cart</h2>

            {cart?.map((item) => (
              <CheckoutProduct
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
        <div className="checkout__right">
          <Subtotal />
        </div>
      )}
      <div className="checkout__right"></div>
    </div>
  );
};

export default Checkout;
