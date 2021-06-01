import React from "react";

export default function CartItem(props) {
  console.log(props.item);
  console.log(CartItem.length);

  if (props.item.amount) {
    return (
      <div className="cartItem">
        <img src={props.item.defaultProductVariant.imageUrl} />
        <h1>{props.item.title}</h1>
        <h1>{" - " + props.item.amount + " + "}</h1>
        <h1>{props.item.defaultProductVariant.price + "kr"} </h1>
      </div>
    );
  } else {
    return null;
  }
}
