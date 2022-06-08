import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faArrowRight,
  faClose,
} from "@fortawesome/free-solid-svg-icons";
import "./style.index.scss";
import sceneNoRules from "../../../../../images/fadeOut/sceneNoRules.png";
import sceneWithRules from "../../../../../images/fadeOut/sceneWithRules.png";
import sceneWithScreengradeRules from "../../../../../images/fadeOut/sceneWithScreengradeRules.png";

function FadeOut(props) {
  const [handleShow, setHandleShow] = useState(false);

  useEffect(() => {
    document.title = "How To Write A Screenplay - Fade Out?";
  }, []);

  function show() {
    setHandleShow(true);
  }

  function close() {
    setHandleShow(false);
  }
  return (
    <div className="container">
      <header className="containerHeader">
        <Link
          to="/screentour/transitions"
          style={{ color: "inherit", textDecoration: "inherit" }}
        >
          <span className="startLink">
            <FontAwesomeIcon icon={faArrowLeft} />
          </span>
        </Link>
        <span>FADE OUT?</span>
        <Link
          to="/screentour/extras"
          style={{ color: "inherit", textDecoration: "inherit" }}
        >
          <span className="startLink">
            <FontAwesomeIcon icon={faArrowRight} />
          </span>
        </Link>
      </header>
      <article className="blog">
        <p className="blogText">
          Alright. Here's where you deserve your real congratulations, as well
          as a place to reap the fruits of your labor.
          <br></br>
          <br></br>
          First off, feel free to continue writing about our story -- any ideas
          or finished scripts about what happens to{" "}
          <span id="courrier">Brady</span> and <span id="courrier">Jules</span>,
          please send to{" "}
          <a href="mailto:screenplayrules@gmail.com">
            screenplayrules@gmail.com
          </a>
          . I'd love to see them.
          <br></br>
          <br></br>
          Second, below you will find a top-on-top comparison of the same scene,
          one without rules and one with. You decide which one you prefer.
          <br></br>
          <br></br>
          Lastly, for anybody wondering whether or not you should end your
          script with "<span id="courrier">FADE OUT</span>" I advise you to see
          the question mark and/or refer to the section on "
          <span id="courrier">FADE IN</span>".<br></br>
          <br></br>
          Good luck and get writing!
          <div className="pictureContainer">
            <div className="pictureLabel">NO RULES</div>
            <img className="picture" src={sceneNoRules} alt="without rules" />
          </div>
          <div className="pictureContainer">
            <div className="pictureLabel">SCREENPLAY RULES</div>
            <img className="picture" src={sceneWithRules} alt="with rules" />
          </div>
        </p>
      </article>
      {!handleShow ? (
        <header className="screengradeHeader" onClick={show}>
          CLICK HERE FOR SCREENGRADE VERSION
        </header>
      ) : (
        <header className="closeHeader">
          <FontAwesomeIcon
            icon={faClose}
            onClick={close}
            className="closeButton"
          />
        </header>
      )}
      {handleShow && (
        <article className="screengradeContainer">
          <p className="screengradeBlogText">
            <div className="screengradePictureContainer">
              <img
                className="picture"
                src={sceneWithScreengradeRules}
                alt="with screengrade rules"
              />
            </div>
            Now, that's just darn pretty.
          </p>
        </article>
      )}
    </div>
  );
}

export default FadeOut;
