import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import descriptionBeat from "../../../../../images/extras/beats/descriptionBeat.png";
import wrylyBeat from "../../../../../images/extras/beats/wrylyBeat.png";

function Beats(props) {
  useEffect(() => {
    document.title = "How To Write A Screenplay - Beats";
  }, []);
  return (
    <div className="container">
      <div className="extrasContainerHeader">
        <Link
          to="/screentour/musiccues"
          style={{ color: "inherit", textDecoration: "inherit" }}
        >
          <span className="startLink">
            <FontAwesomeIcon icon={faArrowLeft} />
          </span>
        </Link>
        <span>BEATS</span>
        <Link
          to="/screentour/superimpose"
          style={{ color: "inherit", textDecoration: "inherit" }}
        >
          <span className="startLink">
            <FontAwesomeIcon icon={faArrowRight} />
          </span>
        </Link>
      </div>
      <div className="blog">
        <div className="blogText">
          As I mentioned in an earlier section's glossary (re: dialogue) a beat
          is a moment of time, used between blocks in a script, or as a wryly,
          to suggest a distinct pause in a scene.
          <br></br>
          <br></br>
          Although beats can be used effectivly, to many of them can destract
          from the story and is seen as an amatuar move. But, don't let that
          stop you from giving it a try:
          <div className="pictureContainer">
            <div className="pictureLabel">DESCRIPTION BEAT</div>
            <img
              className="picture"
              src={descriptionBeat}
              alt="description beat example"
            />
          </div>
          <div className="pictureContainer">
            <div className="pictureLabel">WRYLY BEAT</div>
            <img className="picture" src={wrylyBeat} alt="wryly beat example" />
          </div>
          The difference between the two options is self-explanotory. One goes
          between blocks, while the other goes between{" "}
          <span id="italic">a</span> block.
          <br></br>
          <br></br>
          <span id="bold">Note:</span> if you ever think of putting a "
          <span id="courrier">(beat)</span>" before any dialogue has been
          spoken, think again. It belongs in the description before. Wryly beats
          only break up existing dialogue.
          <br></br>
          <br></br>
        </div>
      </div>
    </div>
  );
}

export default Beats;
