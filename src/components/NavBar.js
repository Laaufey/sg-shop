import { propTypes } from "@sanity/block-content-to-react";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import Logo from "../media/logo.png";

export default function Nav(props) {
  console.log(props.notificationsCount);
  const handleClick = () => {
    setClick(!clicked);
  };
  const [clicked, setClick] = useState(false);

  return (
    <header>
      <div className="mobile-navbar">
        <div className="menuIcon" onClick={handleClick}>
          <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
        <NavLink to="/">
          <img src={Logo} className="logo" />
        </NavLink>
        <div className="sansCart">
          <NavLink to="/cart">
            <i class="fas fa-shopping-cart"></i>
            <span className="cartNr">{props.notificationsCount}</span>
          </NavLink>
        </div>
      </div>
      <div>
        <nav className={clicked ? "nav active" : "nav"}>
          <ul>
            <li className="onMobile">
              <NavLink to="/" className="nav-home">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/fragrances">Fragrances</NavLink>
            </li>
            <li>
              <NavLink to="/makeup">Make-Up</NavLink>
            </li>
            <li>
              <NavLink to="/skincare">Skincare</NavLink>
            </li>
          </ul>
          <ul>
            <li className="onScreens">
              <NavLink to="/">
                <img src={Logo} className="logo" />
              </NavLink>
            </li>
          </ul>
          <ul>
            <li>
              <NavLink to="/brands">Brands</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li className="onScreens">
              <NavLink to="/cart">Cart({props.notificationsCount})</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
