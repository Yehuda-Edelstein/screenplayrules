import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faArrowLeft,
  faHome,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Outro(props) {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    document.title = "How To Write A Screenplay - Over Black";
  }, []);
  return (
    <div className="container">
      <div className="extrasContainerHeader">
        <Link
          to="/screentour/overblack"
          style={{ color: "inherit", textDecoration: "inherit" }}
        >
          <span className="startLink">
            <FontAwesomeIcon icon={faArrowLeft} />
          </span>
        </Link>
        <span>OUTRO</span>
        <Link to="/" style={{ color: "inherit", textDecoration: "inherit" }}>
          <span className="startLink">
            <FontAwesomeIcon icon={faHome} />
          </span>
        </Link>
      </div>
      <div className="blog">
        <div className="blogText">
          Okay, now <span id="italic">I'm</span> tired. I mean, that was a lot,
          right? For both of us.<br></br>
          <br></br>Anyways, I hope you enjoyed. I hope you learned some stuff.
          Feel free to show this to aspiring screenwriters.
          <br></br>
          <br></br>
          Or just get the hell off the site.
          <div className="gifContainer">
            <img
              src="https://media.giphy.com/media/J2ilWC0ZU4IThg034P/giphy.gif"
              alt="your choice"
              className="gif"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Outro;
