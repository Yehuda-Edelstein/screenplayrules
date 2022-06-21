import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import singleSceneMontageExample from "../../../../../images/extras/montages/singleSceneMontageExample.png";
import swimmingMontage from "../../../../../images/extras/montages/swimmingMontage.png";
import multipleScene from "../../../../../images/extras/montages/multipleScene.png";
import dash from "../../../../../images/extras/montages/dash.png";
import elipses from "../../../../../images/extras/montages/elipses.png";

function Montages(props) {
  useEffect(() => {
    document.title = "How To Write A Screenplay - Montages";
  }, []);
  return (
    <div className="container">
      <div className="extrasContainerHeader">
        <Link
          to="/screentour/reading"
          style={{ color: "inherit", textDecoration: "inherit" }}
        >
          <span className="startLink">
            <FontAwesomeIcon icon={faArrowLeft} />
          </span>
        </Link>
        <span>MONTAGES</span>
        <Link
          to="/screentour/flashbacks"
          style={{ color: "inherit", textDecoration: "inherit" }}
        >
          <span className="startLink">
            <FontAwesomeIcon icon={faArrowRight} />
          </span>
        </Link>
      </div>
      <div className="blog">
        <div className="blogText">
          You'll be hard pressed to find a movie these days without some type of
          montage. Whether it happens in one location or throught multiple
          locations -- go on, try for yourslef. Find me a movie that doesn't
          have a montage in it and send it over to{" "}
          <a href="mailto:screenplayrules@gmail.com">
            screenplayrules@gmail.com
          </a>
          . We can form a list.
          {/* GIF */}
          <br></br>
          <br></br>
          There are two basic types of montages: single-scene and
          multiple-scene.
          <br></br>
          <br></br>
          <div className="blogSubHeader" id="courrier">
            SINGLE-SCENE
          </div>
          Obviously, a single-scene montage is a montage that takes place over a
          single scene. Obviously:
          <div className="pictureContainer">
            <img
              className="picture"
              src={singleSceneMontageExample}
              alt="single-scene montage example"
            />
          </div>
          Simple enough. Also, if you want to make the montage more specific,
          you can add a description to the montage opener:
          <div className="pictureContainer">
            <img
              className="picture"
              src={swimmingMontage}
              alt="montage description"
            />
          </div>
          Just make sure to add a "<span id="courrier">SWIMMING</span>" in the
          montage closer as well.
          <br></br>
          <br></br>
          <div className="blogSubHeader" id="courrier">
            MULTIPLE-SCENE
          </div>
          Obviously, a multiple-scene montage is -- you get the point:
          <div className="pictureContainer">
            <img
              className="picture"
              src={multipleScene}
              alt="multiple-scene montage example"
            />
          </div>
          Naturally, your montages will be more complicated than these examples
          so don't get fooled. They can be tricky.
          <br></br>
          <br></br>
          Note: the elipses (i.e., "<span id="courrier">...</span>") before each
          montage line is one way to do it, but I've scene dashes as well, so as
          always, whichever you prefer:
          <div className="pictureContainer">
            <img className="picture" src={elipses} alt="elipses" />
            <div className="pictureLabel">VS.</div>
            <img className="picture" src={dash} alt="dashes" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Montages;
