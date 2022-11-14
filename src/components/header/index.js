import "./style.index.scss";
import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClapperboard, faEllipsis } from "@fortawesome/free-solid-svg-icons";

function Header(props) {
  return (
    <div className="header">
      <div className="bigScreenHeader">
        {/* maybe have two different paths. Either way at the end have a side by side by side of no rules, rules, then screengrade. Have a screengrade section at the bottom */}
        <Link to="/" style={{ color: "inherit", textDecoration: "inherit" }}>
          <div className="title">
            <FontAwesomeIcon className="headerIcon" icon={faClapperboard} />
            <span className="screenplayTitle">SCREENPLAY</span>
            <span className="rules">RULES</span>
          </div>
        </Link>

        <div className="navBar"></div>

        <div className="smallScreenMenu">
          <FontAwesomeIcon icon={faEllipsis} />
        </div>
      </div>
    </div>
  );
}

export default Header;
