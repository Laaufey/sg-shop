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
          return (
            <CartItem
              className="cartList"
              item={i}
              editCartItems={props.editCartItems}
            />
          );
        })}
      </div>
      <div>
        <div className="headCart">
          <h3>Checkout</h3>
        </div>
        <div className="checkout">
          <p>Items subtotal:</p>
          <label>
            <input name="isGoing" type="checkbox" />
            Do you want samples ?
          </label>
          <label>
            <input name="shipping" type="radio" />
            Pick up in store
            <br />
            <input name="shipping" type="radio" />
            Send to my home
          </label>
          <p>Shipping: FREE</p>
          <div className="line"></div>
          <p>TOTAL:</p>
          <button>Checkout</button>
        </div>
      </div>
    </div>
  );
}
