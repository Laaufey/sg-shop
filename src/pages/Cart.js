import React from "react";
import CartList from "../components/CartList";

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
            <button>Back to shop</button>
          </div>
        </div>
      );
    } else {
      return <CartList cartItems={props.cartItems} />;
    }
  }
  function FullCart() {
    return <CartList cartItems={props.cartItems} />;
  }
  return (
    <main>
      <div>
        <EmptyCart />
      </div>
    </main>
  );
}
