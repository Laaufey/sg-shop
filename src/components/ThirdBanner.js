import React from "react";
import imgThree from "../media/banner3.jpg";

export default function SecondBanner() {
  return (
    <>
      <div className="bannerLeft bannerImg">
        <img src={imgThree} alt="banner-2" className="bannerImg imgThree" />
      </div>
      <div className="bannerRight bannerText bannerThree">
        <h1>Be creative. Show your personality.</h1>
        <p>
          Too much bare exposure to the sun can increase the risk of skin cancer
          and cause early skin aging. It doesn't matter what season it is or
          what the weather is like, those harmful ultraviolet rays are abundant.
        </p>
        <button>Shop makeup</button>
      </div>
    </>
  );
}
