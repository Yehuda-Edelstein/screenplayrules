import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import sameLine from "../../../../../images/extras/cameraShots/sameLine.png";
import differentLine from "../../../../../images/extras/cameraShots/differentLine.png";

function CameraShots(props) {
  useEffect(() => {
    document.title = "How To Write A Screenplay - Camera Shots";
  }, []);
  return (
    <div className="container">
      <div className="extrasContainerHeader">
        <Link
          to="/screentour/slang"
          style={{ color: "inherit", textDecoration: "inherit" }}
        >
          <span className="startLink">
            <FontAwesomeIcon icon={faArrowLeft} />
          </span>
        </Link>
        <span>CAMERA SHOTS</span>
        <Link
          to="/screentour/language"
          style={{ color: "inherit", textDecoration: "inherit" }}
        >
          <span className="startLink">
            <FontAwesomeIcon icon={faArrowRight} />
          </span>
        </Link>
      </div>
      <div className="blog">
        <div className="blogText">
          As I've stated earlier in the tour, unless you're QT, it's not your
          job as a screenwriter to shoot the movie. Just to write it.
          <br></br>
          <br></br>
          This means that unless it's actually necessary for the understanding
          of the scene you shouldn't include any camera shots. It's a rookie
          move. Unless you're not a rookie in which case you can do what you
          want. But again, if you're reading this you are probably a rookie.
          <br></br>
          <br></br>
          Here are two acceptable shots you can use when needed:
          <ul>
            <li>
              <span id="courrier">ANGLE ON</span>
            </li>
            <li>
              <span id="courrier">CLOSE ON</span>
            </li>
          </ul>
          Any other shot is most likely superfluous to the plot and should be
          omitted.
          <br></br>
          <br></br>
          I've seen "<span id="courrier">TRACKING SHOT</span>" and "
          <span id="courrier">ZOOM IN ON</span>"/"
          <span id="courrier">ZOOM OUT TO</span>", but those are likely
          unnecessary as well, so, refrain from using them if you can. But, if
          you really think it's important to the plot...
          <br></br>
          <br></br>
          <div className="blogSubHeader">HOW TO</div>
          Writing a camera shot is very simple. Left side,{" "}
          <span id="courrier">ALL CAPS</span>, and no punctuation. The only
          debate is whether the shot should be its own block or part of the
          description that follows it:
          <div className="pictureContainer">
            <div className="pictureLabel">DIFFERENT LINE</div>
            <img className="picture" src={differentLine} alt="different line" />
          </div>
          <div className="pictureContainer">
            <div className="pictureLabel">SAME LINE</div>
            <img className="picture" src={sameLine} alt="same line" />
          </div>
          Note: sorry for the obvious labels, but it looks nicer.
          <br></br>
          <br></br>
          <div className="blogSubHeader">WHEN TO</div>
          Again, writing camera shots into your screenplay should be for the
          purpose of plot. Only.
          <br></br>
          <br></br>
          With our scene above, it's crucial in seeing "
          <span id="courrier">CHARACTER (1)</span>" displayed on the "
          <span id="courrier">SCREEN</span>". For comedic effect or whatever.
          Not as something happening in the background, but as an actual shot.
          <br></br>
          <br></br>
          Note: the difference between "<span id="courrier">ANGLE ON</span>" and
          "<span id="courrier">CLOSE ON</span>" is distance, although most times
          they are interchangeable. Personally, I use "
          <span id="courrier">CLOSE ON</span>" only when it's a cut to a close
          up of something that was in the previous shot.
        </div>
      </div>
    </div>
  );
}

export default CameraShots;
