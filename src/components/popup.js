import React from "react";

import { NavLink } from "react-router-dom";

const Popup = (props) => {
  return (
    <div className="popup-box">
      <div class="popup">
        <div className="pop-head">
          <h3>Added to cart</h3>
          <span className="close-icon" onClick={props.handleClose}>
            x
          </span>
        </div>
        <div className="pop-body">
          <img
            className="pop-img"
            src={props.singleProduct.defaultProductVariant.imageUrl}
          />
          <div>
            <h1>{props.singleProduct.title}</h1>
            <p>{props.singleProduct.tags[1]}</p>
            <p>Qty: 1</p>
            <h3>{props.singleProduct.defaultProductVariant.price + "kr"}</h3>
          </div>
          <div className="pop-buttons">
            <NavLink to="/cart">
              <button className="btn-1">Go to cart</button>
            </NavLink>
            <button className="btn-2" onClick={props.handleClose}>
              Continue shopping
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
