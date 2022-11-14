import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faArrowRight,
  faClose,
} from "@fortawesome/free-solid-svg-icons";
import sceneNoRules from "../../../../images/fadeOut/sceneNoRules.png";
import sceneWithRules from "../../../../images/fadeOut/sceneWithRules.png";
import sceneWithScreengradeRules from "../../../../images/fadeOut/sceneWithScreengradeRules.png";

function FadeOut(props) {
  const [handleShow, setHandleShow] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
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
      <div className="containerHeader">
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
      </div>
      <div className="blog">
        <div className="blogText">
          Alright. Here's where you deserve your real congratulations, as well
          as a place to reap the fruits of your labor.
          <div className="gifContainer">
            <img
              src="https://media.giphy.com/media/3o6fJ1BM7R2EBRDnxK/giphy.gif"
              alt="congrats bro!"
              className="gif"
            />
          </div>
          First off, feel free to continue writing about our story. Any ideas or
          finished scripts about what happens to{" "}
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
          <span className="divider">Good luck and get writing!</span>
          <div className="pictureContainer">
            <div className="pictureLabel">NO RULES</div>
            <img className="picture" src={sceneNoRules} alt="without rules" />
          </div>
          <div className="pictureContainer">
            <div className="pictureLabel">SCREENPLAY RULES</div>
            <img className="picture" src={sceneWithRules} alt="with rules" />
          </div>
        </div>
      </div>
      {!handleShow ? (
        <div className="screengradeHeader" onClick={show}>
          CLICK HERE FOR SCREENGRADE VERSION
        </div>
      ) : (
        <div className="closeHeader">
          <FontAwesomeIcon
            icon={faClose}
            onClick={close}
            className="closeButton"
          />
        </div>
      )}
      {handleShow && (
        <div className="screengradeContainer">
          <div className="screengradeBlogText">
            <div className="screengradePictureContainer">
              <img
                className="picture"
                src={sceneWithScreengradeRules}
                alt="with screengrade rules"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default FadeOut;
