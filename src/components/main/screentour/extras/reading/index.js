import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import readingExample from "../../../../../images/extras/reading/readingExample.png";

function Reading(props) {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    document.title = "How To Write A Screenplay - Reading!";
  }, []);
  return (
    <div className="container">
      <div className="extrasContainerHeader">
        <Link
          to="/screentour/language"
          style={{ color: "inherit", textDecoration: "inherit" }}
        >
          <span className="startLink">
            <FontAwesomeIcon icon={faArrowLeft} />
          </span>
        </Link>
        <span>READING</span>
        <Link
          to="/screentour/montages"
          style={{ color: "inherit", textDecoration: "inherit" }}
        >
          <span className="startLink">
            <FontAwesomeIcon icon={faArrowRight} />
          </span>
        </Link>
      </div>
      <div className="blog">
        <div className="blogText">
          There may come a time in your script where some specific words need to
          be seen by the audience. This isn't referring to words that are
          superimposed on screen, but rather to props that contain visible
          writing (ex: clocks, signs, screens, etc.)
          <br></br>
          <br></br>
          The way to do this is almost too simple to have to explain, but you'd
          be surprised:
          <div className="pictureContainer">
            <img
              className="picture"
              src={readingExample}
              alt="reading example"
            />
          </div>
          The only rule to note is that you should never use a period unless
          that's actually in the word(s) or sentences(s) being shown. It's just
          assumed, so it isn't really necessary.
          <br></br>
          <br></br>
          Also, readings can be for anything. Words, numbers, symbols -- it
          doesn't matter, just put it in quotes and you're golden.
          <br></br>
          <br></br>
          <span id="bold">Note:</span> you don't actually have to use the word "
          <span id="courrier">reading</span>" or{" "}
          <span id="courrier">reads</span>". You can write it however you like,
          just as long as whatever is being read is in quotes.
          <br></br>
          <br></br>
        </div>
      </div>
    </div>
  );
}

export default Reading;
