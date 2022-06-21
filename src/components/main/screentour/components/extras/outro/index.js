import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faArrowLeft,
  faHome,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Outro(props) {
  useEffect(() => {
    document.title = "How To Write A Screenplay - Over Black";
  }, []);
  return (
    <div className="container">
      <div className="extrasContainerHeader">
        <Link
          to="/screentour/overblack"
          style={{ color: "inherit", textDecoration: "inherit" }}
        >
          <span className="startLink">
            <FontAwesomeIcon icon={faArrowLeft} />
          </span>
        </Link>
        <span>OUTRO</span>
        <Link to="/" style={{ color: "inherit", textDecoration: "inherit" }}>
          <span className="startLink">
            <FontAwesomeIcon icon={faHome} />
          </span>
        </Link>
      </div>
      <div className="blog">
        <div className="blogText"></div>
      </div>
    </div>
  );
}

export default Outro;
