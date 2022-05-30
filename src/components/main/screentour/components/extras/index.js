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
            <span id="italic">I'm confused -- aren't we done here?</span> Yes
            and no.
            <br></br>
            <br></br>
            In truth, you could write an entire script just using the blocks I
            previously described in the main screentour section, but your
            screenwriting arsenal would be greatly hindered.
            <br></br>
            <br></br>
            What if you want your protagonist to have a flashback? Or articulate
            a montage? You could figure these things out for yourself or...
          </div>
        </div>
      </div>
    </div>
  );
}

export default Extras;
