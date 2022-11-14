import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function OverBlack(props) {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    document.title = "How To Write A Screenplay - Over Black";
  }, []);
  return (
    <div className="container">
      <div className="extrasContainerHeader">
        <Link
          to="/screentour/superimpose"
          style={{ color: "inherit", textDecoration: "inherit" }}
        >
          <span className="startLink">
            <FontAwesomeIcon icon={faArrowLeft} />
          </span>
        </Link>
        <span>OVER BLACK</span>
        <Link
          to="/screentour/outro"
          style={{ color: "inherit", textDecoration: "inherit" }}
        >
          <span className="startLink">
            <FontAwesomeIcon icon={faArrowRight} />
          </span>
        </Link>
      </div>
      <div className="blog">
        <div className="blogText">
          Sometimes in movies there is superimposition before we even get to the
          first scene of the film. Sometimes there's voice-over dialogue as
          well. All the while, we, the audience, have the pleasure of staring at
          a black screen.
          <br></br>
          <br></br>
          This is where "<span id="courrier">OVER BLACK</span>" comes in.
          <br></br>
          <br></br>
          Think of it as the useful version of "
          <span id="courrier">FADE IN</span>". Anything that goes beneath "
          <span id="courrier">OVER BLACK</span>" is part of the script, it's
          just happening over a black screen (i.e., without a visual).
          <br></br>
          <br></br>
          <div id="border"></div>
          <div className="blogSubHeader">HOW TO</div>
          Left side. All caps. Colon.
          <br></br>
          <br></br>
          <span className="dividerCourrier">OVER BLACK:</span>
          <br></br>
          <br></br>
          <span style={{ marginLeft: "20px" }}>**WHATEVER**</span>
          <br></br>
          <br></br>
          <span className="dividerCourrier" id="bold">
            INT. EXAMPLE - DAY
          </span>
          <div className="gifContainer">
            <img
              src="https://media.giphy.com/media/3o6Zt16nOfEI0C9sPu/giphy.gif"
              alt="it's simple, bro"
              className="gif"
            />
          </div>
          <div id="border"></div>
          <div className="blogSubHeader">WHEN TO</div>
          As always, most of these extra blocks and concepts are just that,
          they're extra. There might be a million reasons you want to have some
          content happen over a black screen, but, most of the time, it'll be a
          stupid one.
          <br></br>
          <br></br>
          But, if you want to go for it, definetly don't have it for more than a
          few blocks.
          <br></br>
          <br></br>
        </div>
      </div>
    </div>
  );
}

export default OverBlack;
