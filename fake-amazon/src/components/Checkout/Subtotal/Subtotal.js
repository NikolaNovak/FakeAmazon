import React from "react";

import { useStateValue } from "../../../StateProvider";
import CurrencyFormat from "react-currency-format";
import "./Subtotal.css";
import { getBasketTotal } from "../../../reducer";

const Subtotal = () => {
  const { basket } = useStateValue()[0];
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} item(s)): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" />
              This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button>Proceed to Checkout</button>
    </div>
  );
};

export default Subtotal;