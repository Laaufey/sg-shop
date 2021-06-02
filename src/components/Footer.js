import React from "react";
import logo from "../media/logo.png";
import facebook from "../media/facebook.png";
import insta from "../media/instagram.png";
import { Link } from "react-router-dom";

export default function footer() {
  return (
    <div className="footer">
      <img src={logo} className="logoFooter" />
      <div className="infofooter">
        <p>Snyrtivöruverslunin Glæsibæ</p>
        <p>Álfheimar 74</p>
        <p>104 Reykjavík</p>
      </div>
      <div className="days">
        <p>Monday - Friday</p>
        <p>Saturday</p>
        <p>Sunday</p>
      </div>
      <div className="hours">
        <p> 10:00 - 18:00</p>
        <p>10:00 - 16:00</p>
        <p>CLOSED</p>
      </div>
      <div className="more">
        <p>Returns</p>
        <p>FAQ</p>
        <p>Terms</p>
      </div>
      <div>
        <p>Privacy</p>
        <p>Support</p>
        <p>About</p>
      </div>
      <div className="socials">
        <a href="https://www.instagram.com/snyrtivoruversluninglaesibae/">
          <img src={insta} className="social insta" />
        </a>
        <a href="https://www.facebook.com/snyrtivoruverslunin">
          <img src={facebook} className="social face" />
        </a>
      </div>
    </div>
  );
}
