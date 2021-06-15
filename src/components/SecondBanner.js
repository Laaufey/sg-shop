import React from "react";
import imgTwo from "../media/banner-2.jpg";

export default function SecondBanner() {
  return (
    <>
      <div className="bannerLeft bannerText bannerTwo">
        <div>
          <h1>
            Be kind to yourself. <br />
            Skincare is self-care.{" "}
          </h1>
          <p>
            Create your own self-care rituals with our high quality luxury
            skincare products. Go beyond just fixing dry, cracked skin by also
            renewing and rejuvenating your complexion with nutrient-rich
            formulas. We guarantee they are worth every penny.
          </p>
          <button>Shop skincare</button>
        </div>
      </div>
      <div className="bannerRight bannerImg">
        <img src={imgTwo} alt="banner-2" className="imgTwo" />
      </div>
    </>
  );
}
