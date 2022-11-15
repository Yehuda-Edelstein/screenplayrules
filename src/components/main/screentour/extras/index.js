import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "./style.index.scss";

function Extras(props) {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    document.title = "How To Write A Screenplay - Extras - Introduction";
  }, []);
  return (
    <div>
      <div className="container">
        <div className="extrasContainerHeader">
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
            <span id="italic">I'm confused -- aren't we done here?</span> Yes
            and no.
            {/* <div className="gifContainer">
              <img
                src="https://media.giphy.com/media/118p3q768COZhu/giphy.gif"
                alt="what's happening"
                className="gif"
              />
            </div> */}
            <br></br>
            <br></br>
            <div className="blogSubHeader">WHAT'S HAPPENING</div>
            In truth, you could write an entire script just using the blocks I
            previously described in the main screentour section, but your
            screenwriting arsenal would be greatly hindered.
            <br></br>
            <br></br>
            What if you want your protagonist to have a flashback? Or articulate
            a montage? You could figure these things out for yourself or...
            <div className="gifContainer">
              <img
                className="gif"
                src="https://media.giphy.com/media/1132uJKzZQc4ow/giphy.gif"
                alt="Willy Winka Tripping Balls"
              />
            </div>
            <div className="screentour-footer">
              <Link
                to="/screentour/fadeout"
                style={{ color: "inherit", textDecoration: "inherit" }}
              >
                <span className="screentour-footer-link">BACK</span>
              </Link>
              <Link
                to="/screentour/textdecoration"
                style={{ color: "inherit", textDecoration: "inherit" }}
              >
                <span className="screentour-footer-link">NEXT PAGE</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Extras;
