import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import awfulDialogue from "../../../../../images/slang/awfulDialogue.png";
import toyStoryExample from "../../../../../images/slang/toyStoryExample.png";

function Slang(props) {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    document.title = "How To Write A Screenplay - Slang";
  }, []);
  return (
    <div className="container">
      <div className="extrasContainerHeader">
        <Link
          to="/textdecoration"
          style={{ color: "inherit", textDecoration: "inherit" }}
        >
          <span className="startLink">
            <FontAwesomeIcon icon={faArrowLeft} />
          </span>
        </Link>
        <span>SLANG</span>
        <Link
          to="/camerashots"
          style={{ color: "inherit", textDecoration: "inherit" }}
        >
          <span className="startLink">
            <FontAwesomeIcon icon={faArrowRight} />
          </span>
        </Link>
      </div>
      <div className="blog">
        <div className="blogText">
          When I use the word slang, I'm referring to the changing, shortening,
          or combining of ordinary words in order to garner more natural
          dialogue.
          <br></br>
          <br></br>I am <span id="italic">not</span> talking about actual slang,
          in the way it's normally used: "<span id="courrier">Chopper</span>"
          isn't slang unless it's "<span id="courrier">Choppa</span>"
          <sup>*</sup>. Understand?
          <div className="gifContainer">
            <img
              src="https://media.giphy.com/media/Wpa3DZwTyJPxKsr0bl/giphy.gif"
              alt="NLE CHOPPA SUX"
              className="gif"
            />
          </div>
          See, writing good dialogue is crucial in developing a good screenplay.
          And a key to writing good dialogue is humanizing it.
          <br></br>
          <br></br>
          People sound like people, not like aliens trying to blend in. "
          <span id="courrier">What is up?</span>" should be "
          <span id="courrier">What's up?</span>" or "
          <span id="courrier">Wazzup?</span>" depending on the character.
          <br></br>
          <br></br>
          <span id="bold">Note:</span> obviously sometimes dialogue is supposed
          to sound like it was written by bots for comedic effect or whatever,
          so use your discretion. Pretty much, don't be a bot.
          <div className="pictureContainer">
            <img className="picture" src={awfulDialogue} alt="bot dialogue" />
          </div>
          <span id="bold">Note:</span> when you have two totally equal
          characters (usually extras or side characters) they should be
          introduced with an accompanying number like so:{" "}
          <span id="courrier">(1)</span>, <span id="courrier">(2)</span>, etc.
          <br></br>
          <br></br>
          <span id="bold">Note within a note:</span> it looks nicer to wrap the
          number in parentheses in my opinion, but you don't have to. "
          <span id="courrier">CHARACTER (1)</span>" vs.{" "}
          <span id="courrier">CHARACTER #1</span>" vs. "
          <span id="courrier">CHARACTER 1</span>". Your call as always.
          <br></br>
          <br></br>
          <span id="bold">Note cubed:</span> if you think you noticed an
          inconsistency with my numbering rule, you didn't (re: wrylies
          section). Only number both characters when they have equally important
          or unimportant roles.
          <div className="pictureContainer">
            <div className="pictureLabel">
              <a
                href="https://www.scriptslug.com/script/toy-story-1995"
                rel="noreferrer noopener"
                target="_blank"
              >
                Toy Story (1995)
              </a>
            </div>
            <img
              className="picture"
              src={toyStoryExample}
              alt="Toy Story (1995)"
            />
          </div>
          Earlier I wrote an example scene that had a non-numbered "
          <span id="courrier">CHARACTER</span>" who was surprised by a numbered
          "<span id="courrier">CHARACTER (2)</span>". The difference here is
          that I used those character names for simplicity. Realistically,
          they'd both have unique names since they both serve a a unique purpose
          in the script.
          <br></br>
          <br></br>
          <span id="bold">p.s.:</span> if I don't note something you're confused
          by, it'll probably be covered in a further section, so keep your
          britches on.
          <br></br>
          <br></br>
          <div className="screentour-footer">
            <Link
              to="/textdecoration"
              style={{ color: "inherit", textDecoration: "inherit" }}
            >
              <span className="screentour-footer-link">BACK</span>
            </Link>
            <Link
              to="/camerashots"
              style={{ color: "inherit", textDecoration: "inherit" }}
            >
              <span className="screentour-footer-link">NEXT PAGE</span>
            </Link>
          </div>
        </div>
      </div>
      <div className="localGlossary">
        <div className="localGlossaryHeader">LOCAL GLOSS'</div>
        <ol>
          <span className="localGlossaryFooter">
            * Personally, I always use an apostrophe after words I'm shortening.
            I just think it looks cleaner to write Choppa' than Choppa, but
            that's just me. As long as it sounds mammalian, I'm okay with it.
          </span>
        </ol>
        <div className="localGlossaryFooter">
          <br></br>
        </div>
      </div>
    </div>
  );
}

export default Slang;
