import React from "react";
import moment from "moment";

import CurrencyFormat from "react-currency-format";
import CartProduct from "../../ShoppingCart/CartProduct/CartProduct";
import "./Order.css";

const Order = ({ order }) => {
  return (
    <div className="order">
      <div className="order__upperSection">
        <p className="order__id">
          <small>Order ID: {order.id}</small>
        </p>
        <p>{moment.unix(order.data.created).format("MMMM Do YYYY, HH:mm")}</p>
      </div>

      <div className="order__middleSection">
        {order.data.cart?.map((item) => (
          <CartProduct
            key={item.id}
            id={item.id}
            title={item.title}
            image={item.image}
            price={item.price}
            hideButton
          />
        ))}
      </div>

      <div className="order__lowerSection">
        <CurrencyFormat
          renderText={(value) => <h3 className="order__total">Order Total: {value}</h3>}
          decimalScale={2}
          value={order.data.amount / 100}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"$"}
        />
      </div>
    </div>
  );
};

export default Order;
