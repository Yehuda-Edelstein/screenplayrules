import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Extras(props) {
  useEffect(() => {
    document.title = "How To Write A Screenplay - Extras - Introduction";
  }, []);
  return (
    <div>
      <div className="container">
        <div className="containerHeader">
          <Link
            to="/screentour/fadeout"
            style={{ color: "inherit", textDecoration: "inherit" }}
          >
            <span className="startLink">
              <FontAwesomeIcon icon={faArrowLeft} />
            </span>
          </Link>
          <span>EXTRAS</span>
          <Link
            to="/screentour/textdecoration"
            style={{ color: "inherit", textDecoration: "inherit" }}
          >
            <span className="startLink">
              <FontAwesomeIcon icon={faArrowRight} />
            </span>
          </Link>
        </div>
        <div className="blog">
          <div className="blogText">
            <div className="blogSubHeader">WHAT'S HAPPENING</div>
            **write something**
          </div>
        </div>
      </div>
    </div>
  );
}

export default Extras;
