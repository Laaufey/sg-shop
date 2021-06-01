import React from "react";

export default function Newsletter() {
  return (
    <>
      <div className="newsLetter">
        <div>
          <h1>Sign up & save!</h1>
          <p>
            Get a <b>10% discount</b> off your first order
          </p>
          <ul className="check">
            <li>Exclusice offers</li>
            <li>Updates on new arrivals</li>
            <li>Tips on skincare and beauty</li>
          </ul>
          <button>Sign up</button>
        </div>
      </div>
      <div className="shipping">
        <div>
          <h1>Fast & secure</h1>
          <ul className="check">
            <li>2 day delivery</li>
            <li>Secure payments</li>
            <li>Free & easy returns</li>
            <li>Money back guarenteed</li>
          </ul>
        </div>
      </div>
    </>
  );
}
