import { propTypes } from "@sanity/block-content-to-react";
import React from "react";
import { NavLink } from "react-router-dom";

import Logo from "../media/logo.png";

export default function Nav(props) {
  console.log(props.notificationsCount);
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
              <NavLink to="/">
                <img src={Logo} className="logo" />
              </NavLink>
            </li>
            <li>
              <NavLink to="/brands">Brands</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/cart">Cart({props.notificationsCount})</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
