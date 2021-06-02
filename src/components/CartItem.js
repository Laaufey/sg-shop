import React from "react";

export default function CartItem(props) {
  console.log(props.item);
  console.log(CartItem.length);

  const handleIncrement = () => {
    props.editCartItems(props.slug, 1);
  };
  if (props.item.amount) {
    return (
      <div className="cartItem">
        <img src={props.item.defaultProductVariant.imageUrl} />
        <h1>{props.item.title}</h1>
        <div>
          <button className="down">-</button>
          <p>{props.item.amount}</p>
          <button className="up" onClick={handleIncrement}>
            +
          </button>
        </div>
        <h3>{props.item.defaultProductVariant.price + "kr"} </h3>
      </div>
    );
  } else {
    return null;
  }
}
