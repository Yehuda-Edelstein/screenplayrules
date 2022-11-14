import React from "react";
import { Link } from "react-router-dom";
import "./style.index.scss";

function Footer(props) {
  return (
    <div className="footer">
      <div className="copyright">
        ©️2022 <span className="websiteName">Screenplay Rules</span>
      </div>
      <Link to="about" style={{ color: "inherit", textDecoration: "inherit" }}>
        <div className="footerLink">ABOUT</div>
      </Link>
    </div>
  );
}

export default Footer;
