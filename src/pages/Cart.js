import React from "react";
import CartList from "../components/CartList";
import { NavLink } from "react-router-dom";

import Recommended from "../components/recommended";
import Similar from "../components/similar";

export default function Cart(props) {
  console.log(props.cartItems.map((i) => i.amount));
  console.log(props.notificationsCount);
  function EmptyCart() {
    if (props.notificationsCount === 0) {
      return (
        <div className="empty">
          <div>
            <h3>Hi gorgeous!</h3>
            <p>Your cart is empty</p>
          </div>
          <div>
            <NavLink to="/">
              <button>Back to shop</button>
            </NavLink>
          </div>
        </div>
      );
    } else {
      return (
        <CartList
          cartItems={props.cartItems}
          editCartItems={props.editCartItems}
        />
      );
    }
  }

  return (
    <main>
      <div>
        <EmptyCart />
        <Recommended />
        <Similar />
      </div>
    </main>
  );
}
