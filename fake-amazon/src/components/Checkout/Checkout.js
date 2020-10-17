import React from "react";

import "./Checkout.css";
import { useStateValue } from "../../StateProvider";
import CartProduct from "../ShoppingCart/CartProduct/CartProduct";
import { Link } from "react-router-dom";

const Checkout = () => {
  const [{ cart, user }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__container">
        <h1>
          Checkout (<Link to="/cart">{cart?.length} items</Link>)
        </h1>

        <div className="checkout__section">
          <div className="checkout__title">
            <h3>Delivery Address</h3>
          </div>
          <div className="checkout__address">
            <p>Email: {user?.email}</p>
            <p>Address: 123 React Lane</p>
            <p>City: Reactown, JSX</p>
          </div>
        </div>

        <div className="checkout__section">
          <div className="checkout__title">
            <h3>Review Items</h3>
          </div>
          <div className="checkout__items">
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
        </div>

        <div className="checkout__section">
          <div className="checkout__title">
            <h3>Payment Method</h3>
          </div>
          <div className="checkout__details"></div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
