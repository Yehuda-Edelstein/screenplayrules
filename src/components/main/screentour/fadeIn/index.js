import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import withFadeIn from "../../../../images/fadeIn/withFadeIn.png";
import withoutFadeIn from "../../../../images/fadeIn/withoutFadeIn.png";

function FadeIn(props) {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    document.title = "How To Write A Screenplay - Fade In?";
  }, []);

  return (
    <div>
      {/* Screentour Header maybe have outline/extras along it */}
      <div className="container">
        <div className="containerHeader">
          <Link to="/" style={{ color: "inherit", textDecoration: "inherit" }}>
            <span className="startLink">
              <FontAwesomeIcon icon={faArrowLeft} />
            </span>
          </Link>
          <span>FADE IN?</span>
          <Link
            to="/slugs"
            style={{ color: "inherit", textDecoration: "inherit" }}
          >
            <span className="startLink">
              <FontAwesomeIcon icon={faArrowRight} />
            </span>
          </Link>
        </div>
        <div className="blog">
          <div className="blogText">
            When used, the words "<span id="courrier">FADE IN</span>" are the
            first words found in a screenplay, written as such:
            <br></br>
            <br></br>
            <span className="dividerCourrier">FADE IN:</span>
            <br></br>
            <br></br>
            Their point is to introduce the shift from black screen (before the
            movie starts) to the first scene we, the audience, get to see.
            {/* <div className="gifContainer">
              <img
                className="gif"
                src="https://media.giphy.com/media/rHlfYmdLr6SK7thB9n/giphy.gif"
                alt="The Wolf of Wall Street opening scene"
              />
            </div> */}
            <br></br>
            <br></br>
            Simply put, every line of script that goes beneath them will be
            acted, spoken, filmed, and produced, up until the last words "
            <span id="courrier">FADE OUT</span>" which we will get to later.
            <br></br>
            <br></br>
            <div id="border"></div>
            Now, how do I personally feel about starting my scripts this way?
            <br></br>
            <br></br>
            The question mark in the title sort of gives it way, but for any
            Gumps out there, let me spell it out for you:
            <br></br>
            <br></br>
            <span className="divider">
              It's unnecessary and totally antiquated.
            </span>
            <br></br>
            <br></br>
            It's a staple of the craft, so keeping it won't bring down your
            screengrade<sup>1</sup> too much, but it's ridiculous.
            <br></br>
            <br></br>
            It didn't even make sense when cameras could{" "}
            <span id="italic">only</span> fade in. Obviously the first line on
            page 1 is where the script starts, and the last line on 110
            <sup>2</sup> is where it ends.
            <br></br>
            <br></br>
            Plus, I think slugs<sup>3</sup> look best as the first words on a
            page regardless, but more on that in the next section.
            <br></br>
            <br></br>
            <div id="border"></div>
            Either way, I think it's time we let the fades become a thing of the
            past. Here's a comparison:
            <div className="pictureContainer">
              <img className="picture" src={withFadeIn} alt="with fade in" />
              <div className="pictureLabel">
                <span id="courrier">VS.</span>
              </div>
              <img
                className="picture"
                src={withoutFadeIn}
                alt="without fade in"
              />
            </div>
            It doesn't seem like much, but I think it helps give the script a
            cleaner start. Trim the fat, you know?
            <br></br>
            <br></br>
            <span id="bold">Note:</span> the second line will be explained in
            the next section, don't worry.
            <br></br>
            <br></br>
          </div>
          <div className="screentour-footer">
            <Link
              to="/"
              style={{ color: "inherit", textDecoration: "inherit" }}
            >
              <span className="screentour-footer-link">BACK</span>
            </Link>
            <Link
              to="/slugs"
              style={{ color: "inherit", textDecoration: "inherit" }}
            >
              <span className="screentour-footer-link">NEXT PAGE</span>
            </Link>
          </div>
        </div>
        <div className="localGlossary">
          <div className="localGlossaryHeader">LOCAL GLOSS'</div>
          <ol className="localGlossaryList">
            <li>
              <span id="bold">Screengrade</span>
            </li>
            <div className="definition">
              A non plot-related and completely arbitrary metric for grading a
              screenplay, based purely on its visual aesthetic. See: about
              section in footer for further explanation.
            </div>
            <li>
              <span id="bold">110</span>
            </li>
            <div className="definition">
              Represents either the last page of a screenplay, or a completed
              screenplay that's ready to go.{" "}
              <span id="italic">
                Ex: "I just wanna' get this spec to 110 and sell it, bro"
              </span>
            </div>
            <li>
              <span id="bold">Slugs</span>
            </li>
            <div className="definition">
              Or sluglines. An industry nickname for scene headings.
            </div>
          </ol>
          <div className="localGlossaryFooter">
            <span>**full definitions found in glossary above**</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FadeIn;
