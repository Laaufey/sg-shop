import React from "react";
import CartItem from "./CartItem";

export default function CartList(props) {
  return (
    <div className="fullCart">
      <div>
        {console.log(props.cartItems)}

        <div className="headCart">
          <h3>Items in cart</h3>
        </div>

        {props.cartItems.map((i) => {
          return <CartItem item={i} />;
        })}
      </div>
      <div>
        <div className="headCart">
          <h3>Checkout</h3>
        </div>
        <div className="checkout">
          <p>Items subtotal:</p>
          <p>Shipping:</p>
          <div className="line"></div>
          <p>TOTAL:</p>
          <button>Checkout</button>
        </div>
      </div>
    </div>
  );
}
