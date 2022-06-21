import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function OverBlack(props) {
  useEffect(() => {
    document.title = "How To Write A Screenplay - Over Black";
  }, []);
  return (
    <div className="container">
      <div className="extrasContainerHeader">
        <Link
          to="/screentour/superimpose"
          style={{ color: "inherit", textDecoration: "inherit" }}
        >
          <span className="startLink">
            <FontAwesomeIcon icon={faArrowLeft} />
          </span>
        </Link>
        <span>OVER BLACK</span>
        <Link
          to="/screentour/outro"
          style={{ color: "inherit", textDecoration: "inherit" }}
        >
          <span className="startLink">
            <FontAwesomeIcon icon={faArrowRight} />
          </span>
        </Link>
      </div>
      <div className="blog">
        <div className="blogText"></div>
      </div>
    </div>
  );
}

export default OverBlack;
