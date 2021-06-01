import React from "react";
import logo from "../media/logo.png";

export default function footer() {
  return (
    <div className="footer">
      <img src={logo} className="logoFooter" />
      <div>
        <p>Snyrtivöruverslunin Glæsibæ</p>
        <p>Álfheimar 74</p>
        <p>104 Reykjavík</p>
      </div>
      <div>
        <p>Monday - Friday</p>
        <p>Saturday</p>
        <p>Sunday</p>
      </div>
      <div>
        <p> 10:00 - 18:00</p>
        <p>10:00 - 16:00</p>
      </div>
      <div>
        <p>Returns</p>
        <p>FAQ</p>
        <p>Terms</p>
        <p>Privacy</p>
      </div>
      <div>
        <p>Support</p>
        <p>About</p>
      </div>
      <div>
        <img />
      </div>
    </div>
  );
}
