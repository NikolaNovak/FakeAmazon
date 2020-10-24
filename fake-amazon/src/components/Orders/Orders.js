import React, { useState, useEffect } from "react";
import { db } from "../../firebase";
import { useStateValue } from "../../StateProvider";
import { Link } from "react-router-dom";

import Order from "./Order/Order";
import "./Orders.css";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const { user } = useStateValue()[0];

  useEffect(() => {
    if (user) {
      db.collection("users")
        .doc(user?.uid)
        .collection("orders")
        .orderBy("created", "desc")
        .onSnapshot((snapshot) =>
          setOrders(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
        );
    } else {
      setOrders([]);
    }
  }, [user]);

  return (
    <div className="orders">
      {!user && (
        <h1>
          Please <Link to="/login">Sign In</Link> to view your orders.
        </h1>
      )}
      {user && (
        <div>
          <h1>Your Orders</h1>
          <div className="orders__order">
            {orders?.map((order) => (
              <Order key={order.id} order={order} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Orders;
