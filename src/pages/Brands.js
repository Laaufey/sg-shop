import React from "react";
import { NavLink } from "react-router-dom";

import chanelBrand from "../media/brandImages/CHANEL-Brand-image.jpg";
import lancomeBrand from "../media/brandImages/LANCOME-Brand-image.jpg";
import guerlainBrand from "../media/brandImages/GUERLAIN-Brand-image.jpg";
import biothermBrand from "../media/brandImages/BIOTHERM-Brand-image.jpg";
import elizabethBrand from "../media/brandImages/EA-Brand-image.jpg";
import helenaBrand from "../media/brandImages/HR-Brand-image.jpg";
import bioeffectBrand from "../media/brandImages/BIOEFFECT-Brand-image.jpg";

export default function Brands() {
  return (
    <main>
      <h1 className="pageName">Brands</h1>
      <div className="brandPage">
        <NavLink to="/chanel">
          <img className="brandImg" src={chanelBrand} />
          <h2>CHANEL</h2>
        </NavLink>

        <NavLink to="/guerlain">
          <img className="brandImg" src={guerlainBrand} />
          <h2>GUERLAIN</h2>
        </NavLink>

        <NavLink to="/bioeffect">
          <img className="brandImg" src={bioeffectBrand} />
          <h2>BIOEFFECT</h2>
        </NavLink>
        <NavLink to="/lancome">
          <img className="brandImg" src={lancomeBrand} />
          <h2>LANCÔME</h2>
        </NavLink>
        <NavLink to="/helena">
          <img className="brandImg" src={helenaBrand} />
          <h2>Helena Rubinstein</h2>
        </NavLink>
        <NavLink to="/biotherm">
          <img className="brandImg" src={biothermBrand} />
          <h2>Biotherm</h2>
        </NavLink>
        <NavLink to="/elizabeth">
          <img className="brandImg" src={elizabethBrand} />
          <h2>Elizabeth Arden</h2>
        </NavLink>
      </div>
    </main>
  );
}
