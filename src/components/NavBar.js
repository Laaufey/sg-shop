import React from "react";
import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <header>
      <div>
        <nav>
          <NavLink to="/fragrances">Fragrances</NavLink>
          <NavLink to="/makeup">Make-Up</NavLink>
          <NavLink to="/skincare">Skincare</NavLink>
          <NavLink to="/" exact>
            SG LOGO
          </NavLink>
          <NavLink to="/brands">Brands</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/cart">Cart</NavLink>
        </nav>
      </div>
    </header>
  );
}
