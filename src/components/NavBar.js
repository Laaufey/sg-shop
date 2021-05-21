import React from "react";
import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <header>
      <div>
        <nav>
          <ul>
            <li>
              <NavLink to="/fragrances">Fragrances</NavLink>
            </li>
            <li>
              <NavLink to="/makeup">Make-Up</NavLink>
            </li>
            <li>
              <NavLink to="/skincare">Skincare</NavLink>
            </li>
            <li>
              <NavLink to="/">SG LOGO</NavLink>
            </li>
            <li>
              <NavLink to="/brands">Brands</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/cart">Cart</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
