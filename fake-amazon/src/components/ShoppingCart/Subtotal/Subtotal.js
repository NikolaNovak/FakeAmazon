import React from "react";
import { useHistory } from "react-router-dom";
import { useStateValue } from "../../../StateProvider";
import { getCartTotal } from "../../../reducer";
import CurrencyFormat from "react-currency-format";

import "./Subtotal.css";

const Subtotal = () => {
  const history = useHistory();
  const { cart } = useStateValue()[0];

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({cart?.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" />
              This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getCartTotal(cart)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button onClick={() => history.push("/checkout")}>Proceed to Checkout</button>
    </div>
  );
};

export default Subtotal;
