import React from "react";
import imgThree from "../media/banner3.jpg";

export default function SecondBanner() {
  return (
    <>
      <div className="bannerLeft bannerImg">
        <img src={imgThree} alt="banner-2" className="imgThree" />
      </div>
      <div className="bannerRight bannerText bannerThree">
        <div>
          <h1>
            Be creative. <br />
            Show your personality.
          </h1>
          <p>
            Do you use makeup to express your personality and creativity or
            simply just for an extra bit of sparkle? whatever the reason, we
            encourage you to use makeup in whatever way makes you feel good.
            Just remember you look gorgeous with and without it!
          </p>
          <button>Shop makeup</button>
        </div>
      </div>
    </>
  );
}
