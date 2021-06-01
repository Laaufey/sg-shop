import React from "react";
import imgOne from "../media/sunscreen.jpg";

export default function banner() {
  return (
    <>
      <div className="bannerLeft bannerImg">
        <img src={imgOne} alt="banner-1" className="bannerImg imgOne" />
      </div>
      <div className="bannerRight bannerText bannerOne">
        <h1>Be smart. Protect your skin.</h1>
        <p>
          It doesn't matter what season it is or what the weather is like, those
          harmful ultraviolet rays are abundant. That’s why we recommend wearing
          sunscreens or daycreams containing SPF everyday. Your skin will thank
          you!
        </p>
        <button>Shop sunscreen</button>
      </div>
    </>
  );
}
