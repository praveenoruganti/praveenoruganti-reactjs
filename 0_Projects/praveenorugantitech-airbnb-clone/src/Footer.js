import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <p>
        &copy;{new Date().getFullYear()}&nbsp;Airbnb Clone
      </p>
    </div>
  );
}

export default Footer;
