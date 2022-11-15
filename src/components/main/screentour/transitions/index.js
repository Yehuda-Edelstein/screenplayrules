import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faArrowRight,
  faClose,
} from "@fortawesome/free-solid-svg-icons";
import cutToExample from "../../../../images/transitions/cutToExample.png";
import dissolveToExample from "../../../../images/transitions/dissolveToExample.png";
import quickCutToExample from "../../../../images/transitions/quickCutToExample.png";
import regularSlugs from "../../../../images/transitions/regularSlugs.png";
import intercutSlugs from "../../../../images/transitions/intercutSlugs.png";
import screengradeIntercutSlugs from "../../../../images/transitions/screengradeIntercutSlugs.png";

function Transitions(props) {
  const [handleShow, setHandleShow] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    document.title = "How To Write A Screenplay - Transitions";
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
          to="/screentour/dialogue"
          style={{ color: "inherit", textDecoration: "inherit" }}
        >
          <span className="startLink">
            <FontAwesomeIcon icon={faArrowLeft} />
          </span>
        </Link>
        <span>TRANSITIONS</span>
        <Link
          to="/screentour/fadeout"
          style={{ color: "inherit", textDecoration: "inherit" }}
        >
          <span className="startLink">
            <FontAwesomeIcon icon={faArrowRight} />
          </span>
        </Link>
      </div>
      <div className="blog">
        <div className="blogText">
          <span className="divider">Wow. That was a lot</span>
          {/* <div className="gifContainer">
            <img
              src="https://media.giphy.com/media/l1KVaj5UcbHwrBMqI/giphy.gif"
              alt="phew"
              className="gif"
            />
          </div> */}
          <br></br>
          <br></br>
          Trust me, it gets easier. At least this part does. Understanding the
          rules of it all. Just wait. Once you know how to write a screenplay,
          then you'll actually have to write one. And that's the hard part.
          <br></br>
          <br></br>
          But, congrats! You've made it through your first basic scene.
          <br></br>
          <br></br>
          Every other scene you write after this will just be a variation made
          up from the previous sections (along with some extras that we'll be
          getting to shortly, if you've got the stomach for it).
          <br></br>
          <br></br>
          The only thing holding us back from jumping between scenes, getting to
          110, and writing (or maybe not writing) that satisfying "
          <span id="courrier">FADE OUT</span>" at the end are the transitions:
          <br></br>
          <br></br>
          How do we get from scene A to scene B?
          <br></br>
          <br></br>
          <div id="border"></div>
          <div className="blogSubHeader">BASIC TRANSITIONS</div>
          In days of old, we'd simply "<span id="courrier">CUT TO</span>" the
          next scene, however, it isn't done anymore. The reason being, similar
          to "<span id="courrier">FADE IN</span>" and "
          <span id="courrier">FADE OUT</span>".
          <br></br>
          <br></br>
          <span className="divider">It's pointless</span>
          <div className="pictureContainer">
            <img className="picture" src={cutToExample} alt="cut to example" />
          </div>
          "<span id="courrier">CUT TO</span>" is the default, so it's
          unnecessary. It's accepted that when a new slugline appears, we will
          be cutting to that scene. I mean, how else are we supposed to get
          there?
          <br></br>
          <br></br>
          And, yes, it's true that there are many different transitions, but
          what they all have in common is that they're generally superfluous.
          <br></br>
          <br></br>
          Furthermore, the type of transition which ends up in the film
          (assuming it isn't plot-related) is usually not for the screenwriter
          to decide anyway. So, why write it?
          <br></br>
          <br></br>
          Now, if you really feel the scene needs some kind of a distinct
          transition, here's a list of acceptable ones to choose from:
          <div>
            <ul>
              <li>
                <span id="courrier">QUICK CUT TO:</span>
              </li>
              <li>
                <span id="courrier">DISSOLVE TO:</span>
              </li>
              <li>
                <span id="courrier">INTERCUT:</span>
              </li>
            </ul>
          </div>
          The first two listed are self explanatory, so I won't dive into so
          much of an explanation. "<span id="courrier">INTERCUT</span>" is a bit
          more tricky and will have its own subsection below:
          <div className="pictureContainer">
            <img
              className="picture"
              src={dissolveToExample}
              alt="dissolve to example"
            />
            <div className="pictureLabel">
              <span id="courrier">VS.</span>
            </div>
            <img
              className="picture"
              src={quickCutToExample}
              alt="quick cut to example"
            />
          </div>
          The notable difference between the two, as I used them, is time:
          <br></br>
          <br></br>"<span id="courrier">DISSOLVE TO</span>" here is implying a
          longer break between the two scenes, than "
          <span id="courrier">QUICK CUT TO</span>" is. The reason being, "
          <span id="courrier">QUICK CUT TO</span>" is used to add a comedic
          element, in how fast "<span id="courrier">Character</span>" fell
          asleep -- notice "<span id="courrier">LATER</span>" vs. "
          <span id="courrier">MOMENTS LATER</span>" in the sluglines.
          <br></br>
          <br></br>
          This being said, it's up to you as the screenwriter to decide how you
          want to use these transitions.
          <br></br>
          <br></br>"<span id="courrier">DISSOLVE TO</span>" has been used
          comedically just as "<span id="courrier">QUICK CUT TO</span>" has been
          used dramatically. The important thing too remember is, like wrylys,
          to many transitions is a rookie mistake.
          <br></br>
          <br></br>
          <span id="bold">Note:</span> I've also seen "
          <span id="courrier">QUICK CUT TO</span>" be "
          <span id="courrier">JUMP CUT TO</span>". Either is fine, just pick one
          and stick to it:
          <br></br>
          <br></br>
          <div id="border"></div>
          <div className="blogSubHeader">INTERCUT</div>
          An "<span id="courrier">INTERCUT</span>" is used when jumping between
          multiple scenes continuously. Instead of writing a regular slugline,
          we write an intercut slugline<sup>1</sup>.<br></br>
          <br></br>
          The reason for doing this is purely aesthetic, as too many sluglines
          can distract from the scene itself:
          <div className="pictureContainer">
            <div className="pictureLabel">REGULAR SLUGS</div>
            <img className="picture" src={regularSlugs} alt="regular slugs" />
          </div>
          <div className="pictureContainer">
            <div className="pictureLabel">INTERCUT SLUGS</div>
            <img className="picture" src={intercutSlugs} alt="intercut slugs" />
          </div>
          The rule of thumb for intercut slugs, is once both locations have been
          established, one after the other with their own slug, you can then use
          intercut slugs to switch between them.
          <br></br>
          <br></br>
          <span id="bold">Note:</span> only use intercut slugs when the scene is
          continuous. If time has passed, it's a totally new scene and will
          require a new slug.
          <br></br>
          <br></br>
          <div className="screentour-footer">
            <Link
              to="/screentour/dialogue"
              style={{ color: "inherit", textDecoration: "inherit" }}
            >
              <span className="screentour-footer-link">BACK</span>
            </Link>
            <Link
              to="/screentour/fadeout"
              style={{ color: "inherit", textDecoration: "inherit" }}
            >
              <span className="screentour-footer-link">NEXT PAGE</span>
            </Link>
          </div>
        </div>
      </div>
      {/* </div> */}
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
                src={screengradeIntercutSlugs}
                alt="screengrade version of intercut slugs"
              />
            </div>
            Some simple corrections will do the trick. I think you can handle
            it.
            <br></br>
            <br></br>
          </div>
        </div>
      )}
      <div className="localGlossary">
        <div className="localGlossaryHeader">LOCAL GLOSS'</div>
        <ol className="localGlossaryList">
          <li>
            <span id="bold">Intercut Slugline</span>
            <div className="definition">
              A shortened slugline used to establish cuts between two continuous
              scenes.
            </div>
          </li>
        </ol>
        <div className="localGlossaryFooter">
          <span>**full definitions found in glossary above**</span>
        </div>
      </div>
    </div>
  );
}

export default Transitions;
