import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import wolfSample from "../../../../../../images/extras/language/wolfSample.png";

function Language(props) {
  useEffect(() => {
    document.title = "How To Write A Screenplay - F**king language, bro!";
  }, []);
  return (
    <div className="container">
      <div className="containerHeader">
        <Link
          to="/screentour/camerashots"
          style={{ color: "inherit", textDecoration: "inherit" }}
        >
          <span className="startLink">
            <FontAwesomeIcon icon={faArrowLeft} />
          </span>
        </Link>
        <span>LANGUAGE</span>
        <Link
          to="/screentour/reading"
          style={{ color: "inherit", textDecoration: "inherit" }}
        >
          <span className="startLink">
            <FontAwesomeIcon icon={faArrowRight} />
          </span>
        </Link>
      </div>
      <div className="blog">
        <div className="blogText">
          If you think this section is talking about actual language, you're
          dead fucking wrong, you fat piece of shit -- I don't give a fuck how
          vulgar you make your dumb little bitch scipt. It's not like you're
          selling the shit?
          <br></br>
          <br></br>
          That being said, it looks bad if you keep using profanity as a crutch.
          A lot of amatuar writers think all intense scenes require a barrage of
          explatives, but they don't. So, use them wisely. Fucker.
          <div className="pictureContainer">
            <div className="pictureLabel">
              <a
                href="https://www.scriptslug.com/script/the-wolf-of-wall-street-2013"
                rel="noreferrer noopener"
                target="_blank"
              >
                The Wolf of Wall Street (2013)
              </a>
            </div>
            <img
              className="picture"
              src={wolfSample}
              alt="The Wolf of Wall Street (2013)"
            />
          </div>
          Anyways, this section is actually talking about foriegn languages and
          subtitles. It's pretty simple, conceptially. You have a character
          that's from a foriegn country or different galaxy, and you want them
          to speak in a specific language.
          <br></br>
          <br></br>
          This is totally fine, just don't spell out the foriegn language.
          Instead write the sentence how you normally would and include a wryly:
          <br></br>
          <br></br>
          Note: if your character is speaking the language badly for comedic
          effect, you <span id="italic">can</span> write out the foriegn words
          in English. Just make sure to use a wryly here as well.
        </div>
      </div>
    </div>
  );
}

export default Language;