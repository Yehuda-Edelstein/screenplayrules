import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import flashbackEx from "../../../../../images/extras/flashbacks/flashbackEx.png";
import flashbackMontageEx from "../../../../../images/extras/flashbacks/flashbackMontageEx.png";

function Flashbacks(props) {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    document.title = "How To Write A Screenplay - Flashbacks";
  }, []);
  return (
    <div className="container">
      <div className="extrasContainerHeader">
        <Link
          to="/screentour/montages"
          style={{ color: "inherit", textDecoration: "inherit" }}
        >
          <span className="startLink">
            <FontAwesomeIcon icon={faArrowLeft} />
          </span>
        </Link>
        <span>FLASHBACKS</span>
        <Link
          to="/screentour/musiccues"
          style={{ color: "inherit", textDecoration: "inherit" }}
        >
          <span className="startLink">
            <FontAwesomeIcon icon={faArrowRight} />
          </span>
        </Link>
      </div>
      <div className="blog">
        <div className="blogText">
          You know the drill. Our protagonist sees an ex walk by them in slow
          motion and has a flashback to when they were happily together.
          <br></br>
          <br></br>
          Gross, but accurate:
          <div className="pictureContainer">
            <img
              className="picture"
              src={flashbackEx}
              alt="flashback example"
            />
          </div>
          Now, this is a very basic flashback. Often they are more complicated
          and convoluted, but this should show you how it's done.
          <br></br>
          <br></br>
          <div id="border"></div>
          An advanced move that's done a lot these days is a montage within a
          flashback:
          <div className="pictureContainer">
            <img
              className="picture"
              src={flashbackMontageEx}
              alt="flashback example"
            />
          </div>
          And that's how that's done.
          <div className="gifContainer">
            <img
              src="https://media.giphy.com/media/15BuyagtKucHm/giphy.gif"
              alt="mic drop"
              className="gif"
            />
          </div>
          <span id="bold">Note:</span> you can also have flashbacks within
          flashbacks. Just remember to add a montage description to let the
          reader know what the hell is going on.
          <br></br>
          <br></br>
          <span id="bold">p.s.:</span> I think montages and flashbacks are a bit
          tacky and overused, but they do have their place. Just be smart with
          them.
          <br></br>
          <br></br>
          <div className="screentour-footer">
            <Link
              to="/screentour/montages"
              style={{ color: "inherit", textDecoration: "inherit" }}
            >
              <span className="screentour-footer-link">BACK</span>
            </Link>
            <Link
              to="/screentour/musiccues"
              style={{ color: "inherit", textDecoration: "inherit" }}
            >
              <span className="screentour-footer-link">NEXT PAGE</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Flashbacks;
