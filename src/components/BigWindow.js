import React, { useState } from "react";
import windowImg from "../media/bigWindow.jpg";
import imgteo from "../media/banner1.jpg";
import { render } from "@testing-library/react";

export default function BigImage() {
  const handleClick = () => {
    setClick(!clicked);
  };
  var timer;

  function StartTimer() {
    timer = setInterval(function () {
      setClick();
    }, 10000);
  }
  const [clicked, setClick] = useState(false);
  return (
    <div className={clicked ? "bigwindow pic2" : "bigwindow pic1"}>
      <div className="text">
        <h1>It's your time to glow</h1>
        <p>
          Wave goodbye to tired looking skin and say hello to glow! 20% off
          selected skincare products for a limited time only.
        </p>
        <button className="shopNow">Shop Now</button>
      </div>
      <div className="dots">
        <i className="fas fa-circle" onClick={handleClick}></i>
        <i className="fas fa-circle" onClick={handleClick}></i>
      </div>
    </div>
  );
}
