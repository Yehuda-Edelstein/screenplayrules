import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faArrowRight,
  faClose,
} from "@fortawesome/free-solid-svg-icons";
import withoutBold from "../../../../images/slugs/withoutBold.png";
import withBold from "../../../../images/slugs/withBold.png";
import scroll from "../../../../images/slugs/scroll.png";
import estabExample1 from "../../../../images/slugs/estabExample1.png";
import estabExample2 from "../../../../images/slugs/estabExample2.png";
import "./style.index.scss";

function Slugs(props) {
  const [handleShow, setHandleShow] = useState(false);
  useEffect(() => {
    document.title = "How To Write A Screenplay - Slugs?";
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
          to="/screentour/fadein"
          style={{ color: "inherit", textDecoration: "inherit" }}
        >
          <span className="startLink">
            <FontAwesomeIcon icon={faArrowLeft} />
          </span>
        </Link>
        <span>SLUGS</span>
        <Link
          to="/screentour/action"
          style={{ color: "inherit", textDecoration: "inherit" }}
        >
          <span className="startLink">
            <FontAwesomeIcon icon={faArrowRight} />
          </span>
        </Link>
      </div>

      <div className="blog">
        <div className="blogText">
          Okay. Here's where your screenplay actually starts. The where and
          when.
          <br></br>
          <br></br>
          Scene headings or sluglines (I'll be referring to them as slugs or
          sluglines from now on) will precede every scene in your script, so
          it's important to have them be as short and precise as possible.
          <br></br>
          <br></br>
          <span className="divider">
            The longer the slug, the grosser it is
          </span>
          <div className="gifContainer">
            <img
              className="gif"
              src="https://media.giphy.com/media/5pUwbYWSX35GygAKTY/giphy.gif"
              alt="Eat slugs, Weasel bitch"
            />
          </div>
          <div id="border"></div>
          <div className="blogSubHeader">LAYOUT</div>A slugline is made up of
          three parts:
          <div className="sluglineExamplePart">
            <div className="sluglineExampleNumber">1.</div>
            <div className="sluglineExample">
              <span id="yellow">INT.</span> EXAMPLE - DAY
            </div>
          </div>
          This abbreviation tells us whether the scene will be happening inside
          or outside, or both.
          <br></br>
          <br></br>
          Interior "<span id="courrier">INT.</span>" for inside, exterior "
          <span id="courrier">EXT.</span>" for outside, and a combination "
          <span id="courrier">INT.</span>/<span id="courrier">EXT.</span>" for
          scenes that switch between the two.
          <br></br>
          <br></br>
          Note: if you're new to screenwriting, which you probably are, refrain
          from using "<span id="courrier">INT.</span>/
          <span id="courrier">EXT.</span>" Instead, use description to establish
          a location change, or just cut to a new scene.
          <div className="sluglineExamplePart">
            <div className="sluglineExampleNumber">2.</div>
            <div className="sluglineExample">
              INT. <span id="yellow">EXAMPLE</span> - DAY
            </div>
          </div>
          The middle part of the slugline tells us the actual location of the
          scene:
          <br></br>
          <br></br>"<span id="courrier">EXAMPLE</span>" here could be, "
          <span id="courrier">GRANDMA'S HOUSE</span>", "
          <span id="courrier">SIDE OF HIGHWAY</span>", or "
          <span id="courrier">INTERNATIONAL SPACE STATION</span>". Pretty much,
          any explainable location is technically valid.
          <br></br>
          <br></br>
          That being said, it's a bit of an amateur move to have your locations
          be overly descriptive.
          <br></br>
          <br></br>
          Personally, seeing a slugline that's longer than the description
          beneath it is alarming. "
          <span id="courrier">DUMPSTER BEHIND BURGER JOINT</span>" should just
          be "<span id="courrier">BURGER JOINT</span>".
          <br></br>
          <br></br>
          <span className="divider">Details go in the description</span>
          <div className="sluglineExamplePart">
            <div className="sluglineExampleNumber">3.</div>
            <div className="sluglineExample">
              INT. EXAMPLE <span id="yellow">- DAY</span>{" "}
            </div>
          </div>
          At last we have the when of your slugline -- the time your scene takes
          place at.
          <br></br>
          <br></br>
          This might seem simple enough, but don't make the mistake of having
          your times be too nuanced.
          <br></br>
          <br></br>
          Here's a list of acceptable times to live by:
          <div className="timeListContainer">
            <ul className="timeList">
              <label>
                Actual<sup>1</sup>
              </label>
              <div className="listItems">
                <li>MORNING</li>
                <li>DAY</li>
                <li>AFTERNOON</li>
                <li>EVENING</li>
                <li>NIGHT</li>
              </div>
            </ul>
            <ul className="timeList">
              <label>
                Relative<sup>2</sup>
              </label>
              <div className="listItems">
                <li>LATER</li>
                <li>MOMENTS LATER</li>
                <li>MOMENTS EARLIER</li>
                <li>CONTINUOUS</li>
              </div>
            </ul>
          </div>
          If you want a more specific time than one of these listed, you'll need
          to superimpose<sup>3</sup> it.
          <br></br>
          <br></br>
          <div id="border"></div>
          Now that you understand what a slugline is, and how to write one, the
          next thing you'll want to do is <span id="bold">bold</span> them.
          <br></br>
          <br></br>
          This will help alleviate the natural, page-to-page monotony
          screenplays tend to attract.
          <br></br>
          <br></br>I mean, at the end of the day, it's just a bunch of letters,
          right? Break those scenes up with a bit of <span id="bold">bold</span>
          :
          <div className="pictureContainer">
            <img className="picture" src={withoutBold} alt="without bold" />
            <div className="pictureLabel">
              <span id="courrier">VS.</span>
            </div>
            <img className="picture" src={withBold} alt="with bold" />
          </div>
          Many professionals are already moving away from bare slugs<sup>4</sup>
          , so don't get left behind in the days of old.
          <br></br>
          <br></br>
          It's time to accept the days of...
          <br></br>
          <br></br>
          <div id="border"></div>
          <div className="blogSubHeader">ESTABLISHING</div>
          An "<span id="courrier">ESTABLISHING</span>" (short: "
          <span id="courrier">ESTAB.</span>") shot is a shot that focuses on
          establishing the geography or landscape of a scene.
          <br></br>
          <br></br>
          Think of the helicopter shots from{" "}
          <a
            href="https://www.scriptslug.com/script/twilight-2008"
            rel="noreferrer noopener"
            target="_blank"
          >
            Twilight
          </a>{" "}
          -- uh, I mean, from{" "}
          <a
            href="https://www.scriptslug.com/script/the-shining-1980"
            rel="noreferrer noopener"
            target="_blank"
          >
            The Shining
          </a>
          . That's what I meant.
          <div className="gifContainer">
            <img
              className="gif"
              src="https://media.giphy.com/media/5JZoLIN3Ey5Q4/giphy.gif"
              alt="Jack Nic'"
            />
          </div>
          <span className="divider">Seriously</span>
          <br></br>
          <br></br>
          Anyways, the truth is you don't really need establishing shots in your
          screenplay, but, if you feel it helps the story, here's the two ways
          you can do it:
          <div className="pictureContainer">
            <img
              className="picture"
              src={estabExample1}
              alt="regular establishing"
            />
            <div className="pictureLabel">
              <span id="courrier">VS.</span>
            </div>
            <img className="picture" src={estabExample2} alt="estab." />
          </div>
          Yeah. For real though, Twilight sucks.
        </div>
      </div>
      {!handleShow ? (
        <div className="screengradeHeader" onClick={show}>
          CLICK HERE TO IMPROVE YOUR SCREENGRADE KNOWLEDGE
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
      <div className="screengradeContainer">
        {/* Figure out better name for screengradeHeader */}
        {/* add better animation to drop down */}
        {handleShow && (
          <div className="screengradeBlogText">
            As I hinted at earlier, it's a definite plus to land slugs at the
            tops of your pages, although, it's usually a best case scenario and
            not always possible.
            <br></br>
            <br></br>
            So, don't worry too much about it.
            <br></br>
            <br></br>
            That being said, don't ever have a slugline without at least one
            line of description below it on the <span id="italic">
              same
            </span>{" "}
            page.
            <br></br>
            <br></br>
            It's insensitive to tease a reader with a juicy slug and then make
            them scroll or turn to the next page to see what's going on. There's
            a page-turner and then there's this:
            <div className="screengradePictureContainer">
              <img className="picture" src={scroll} alt="scroll to see" />
            </div>
            <span className="divider">Disgusting</span>
            <br></br>
            <br></br>
          </div>
        )}
      </div>
      <div className="localGlossary">
        <div className="localGlossaryHeader">LOCAL GLOSS'</div>
        <ol className="localGlossaryList">
          <li>
            <span id="bold">Actual</span>
          </li>
          <div className="definition">
            Universal time. Outside of story, not plot-contingent.
          </div>
          <li>
            <span id="bold">Relative</span>
          </li>
          <div className="definition">
            Time understood through story, relative to the plot.{" "}
          </div>
          <li>
            <span id="bold">Superimpose</span>
          </li>
          <div className="definition">
            Letters, numbers, symbols, or images, displayed on screen. Overlaid
            so that both original picture and superimposed addition are visible.
          </div>
          <li>
            <span id="bold">Bare Slugs</span>
          </li>
          <div className="definition">
            Sluglines that are without any text decoration, namely, without
            bold.
          </div>
        </ol>
        <div className="localGlossaryFooter">
          <span>**full definitions found in glossary above**</span>
        </div>
      </div>
    </div>
  );
}

export default Slugs;
