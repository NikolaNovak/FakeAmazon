import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useStateValue } from "../../StateProvider";
import { getCartTotal } from "../../reducer";
import axios from "../../axios";
import { db } from "../../firebase";

import CurrencyFormat from "react-currency-format";
import CartProduct from "../ShoppingCart/CartProduct/CartProduct";
import "./Checkout.css";

const Checkout = () => {
  const history = useHistory();
  const [{ cart, user }, dispatch] = useStateValue();
  const [disabled, setDisabled] = useState(true);
  const [processing, setProcessing] = useState(false);
  const [succeeded, setSucceeded] = useState(false);
  const [clientSecret, setClientSecret] = useState("");
  const [error, setError] = useState(null);
  const stripe = useStripe();
  const elements = useElements();

  useEffect(() => {
    const total = getCartTotal(cart);

    if (total !== 0) {
      const getClientSecret = async () => {
        const response = await axios({
          method: "post",
          url: `/payments/create?total=${total * 100}`,
        });
        setClientSecret(response.data.clientSecret);
      };

      getClientSecret();
    }
  }, [cart]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);

    await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: { card: elements.getElement(CardElement) },
      })
      .then(({ paymentIntent }) => {
        db.collection("users")
          .doc(user?.uid)
          .collection("orders")
          .doc(paymentIntent.id)
          .set({ cart: cart, amount: paymentIntent.amount, created: paymentIntent.created });

        setSucceeded(true);
        setError(null);
        setProcessing(false);

        dispatch({
          type: "EMPTY_CART",
        });

        history.replace("/orders");
      });
  };

  const handleChange = (e) => {
    setDisabled(e.empty);
    setError(e.error ? e.error.message : "");
  };

  return (
    <div className="checkout">
      {!user && (
        <h1>
          Please <Link to="/login">Sign In</Link> to complete your order.
        </h1>
      )}
      {user && (
        <div className="checkout__userSignedIn">
          <div className="checkout__container">
            <h2>Checkout</h2>
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
              <div className="checkout__details">
                <form onSubmit={handleSubmit}>
                  <CardElement onChange={handleChange} />
                  <p className="checkout__testPayment">
                    Note: To test the payment functionality just start typing "424242..." until all
                    the card details are filled.
                  </p>
                  <div className="checkout__priceContainer">
                    <CurrencyFormat
                      renderText={(value) => <h3>Order Total: {value}</h3>}
                      decimalScale={2}
                      value={getCartTotal(cart)}
                      displayType={"text"}
                      thousandSeparator={true}
                      prefix={"$"}
                    />
                    <button disabled={disabled || processing || succeeded}>
                      <span>{processing ? <p>Processing...</p> : "Buy Now"}</span>
                    </button>
                  </div>

                  {error && <div>{error}</div>}
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Checkout;
