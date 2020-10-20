import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import ShoppingCart from "./components/ShoppingCart/ShoppingCart";
import Login from "./components/Login/Login";
import Checkout from "./components/Checkout/Checkout";
import "./App.css";

const promise = loadStripe(process.env.REACT_APP_STRIPE_API_KEY);

const App = () => {
  const dispatch = useStateValue()[1];

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // the user is logged in
        dispatch({ type: "SET_USER", user: authUser });
      } else {
        // the user is logged out
        dispatch({ type: "SET_USER", user: null });
      }
    });

    return () => {
      unsubscribe();
    };
  }, [dispatch]);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/cart">
            <Header />
            <ShoppingCart />
          </Route>
          <Route path="/checkout">
            <Header />
            <Elements stripe={promise}>
              <Checkout />
            </Elements>
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
