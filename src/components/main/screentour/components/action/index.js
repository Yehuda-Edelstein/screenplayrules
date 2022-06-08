import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faArrowRight,
  faClose,
} from "@fortawesome/free-solid-svg-icons";
import longDescription from "../../../../../images/action/longDescription.png";
import longDescriptionWithEdits from "../../../../../images/action/longDescriptionWithEdits.png";
import finishedLongDescription from "../../../../../images/action/finishedLongDescription.png";
import screengradeLongDescriptionWithEdits from "../../../../../images/action/screengradeLongDescriptionWithEdits.png";
import descriptionFixed from "../../../../../images/action/descriptionFixed.png";
import withAge from "../../../../../images/action/withAge.png";
import withoutAge from "../../../../../images/action/withoutAge.png";
import screengradeCleanWithAge from "../../../../../images/action/screengradeCleanWithAge.png";
import screengradeCleanWithAgeAndHighlights from "../../../../../images/action/screengradeCleanWithAgeAndHighlights.png";
import hh from "../../../../../images/action/hh.png";
import clean from "../../../../../images/action/clean.png";

function Action(props) {
  const [handleShow, setHandleShow] = useState(false);
  const [handleShowSecond, setHandleShowSecond] = useState(false);

  useEffect(() => {
    document.title = "How To Write A Screenplay - Action";
  }, []);

  function show() {
    setHandleShow(true);
  }

  function showSecond() {
    setHandleShowSecond(true);
  }

  function close() {
    setHandleShow(false);
  }

  function closeSecond() {
    setHandleShowSecond(false);
  }

  return (
    <div className="container">
      <header className="containerHeader">
        <Link
          to="/screentour/slugs"
          style={{ color: "inherit", textDecoration: "inherit" }}
        >
          <span className="startLink">
            <FontAwesomeIcon icon={faArrowLeft} />
          </span>
        </Link>
        <span>ACTION</span>
        <Link
          to="/screentour/dialogue"
          style={{ color: "inherit", textDecoration: "inherit" }}
        >
          <span className="startLink">
            <FontAwesomeIcon icon={faArrowRight} />
          </span>
        </Link>
      </header>
      <article className="blog">
        <p className="blogText">
          Alright, you got your slugline. It's nice and bold, secured at the top
          of page 1. Your where and when. Now the what -- it's time for some
          action.
          <br></br>
          <br></br>
          <h1 className="blogSubHeader">DESCRIPTION</h1>
          Let's take our previous example of a "
          <span id="courrier">BURGER JOINT</span>", but, for simplicity, we'll
          change it to "<span id="courrier">RESTAURANT</span>" (p.s.: basic
          locations help out your screengrade too).
          <br></br>
          <br></br>
          See, sluglines are your sets. Everything that goes between two of them
          is a scene. And every scene should start with some description. It
          looks ugly to go straight from slug to dialogue without a little
          something in between. So, what's happening?
          <div className="pictureContainer">
            <img
              className="picture"
              src={longDescription}
              alt="long description"
            />
          </div>
          There are a few issues with this description. Let's break them down:
          <div className="pictureContainer">
            <img
              className="picture"
              src={longDescriptionWithEdits}
              alt="long description with edits"
            />
          </div>
          1. For starters, it's too long -- like I said before, trim the fat.
          Any lines I crossed out were unnecessary. This isn't a Russian novel,
          we don't need vivid imagery. Keep it simple. Obviously, if you're
          writing a sci-fi piece set in 3022, some of your scenes will likely
          need extensive explanations, but if that's not the case, cut to the
          chase. One-word sentences are fine too. Good, even. They can add a
          subtle intensity to your description and keep the reader wanting more.
          Hopefully.
          <br></br>
          <br></br>
          2. The words highlighted in <span id="yellow">yellow</span> are "
          <span id="courrier">PROPS</span>" and should be in{" "}
          <span id="courrier">ALL CAPS</span> at first mention. This lets the
          reader know these items need to be in the script, and are integral to
          the scene.
          <br></br>
          <br></br>
          Note: any prop that you put in your script{" "}
          <span id="italic">should</span> be plot related. Props that help
          establish tone are for the{" "}
          <a
            href="https://en.m.wikipedia.org/wiki/Property_master"
            rel="noreferrer noopener"
            target="_blank"
          >
            prop master
          </a>
          <sup>*</sup> to decide on -- assuming you sell your script. Similar to
          character intros (as we'll see below) once introduced, they need not
          remain <span id="courrier">CAPPED</span>.<br></br>
          <br></br>
          3. "
          <span id="red">
            <span id="courrier">Marlboro Red</span>
          </span>
          " is <span id="red">red</span> because it's product placement. You're
          the screenwriter, not the producer. Your job is to say what he's
          smoking, not what brand. "<span id="courrier">Marlboro Red</span>" is
          just "<span id="courrier">CIGARETTE</span>" -- remember props are in
          caps the first time mentioned.
          <br></br>
          <br></br>
          Note: This doesn't apply for scripts whose plots must include certain
          products (i.e., car movies or era pieces) although writing a spec
          <sup>1</sup> that hinges on specific merchandise is a risky move
          better left to those who can make it happen. Because, let's face it,
          me and you probably can't.
          <br></br>
          <br></br>
          Here we are with a bit more tweaking:
          <div className="pictureContainer">
            <img
              className="picture"
              src={finishedLongDescription}
              alt="finished long description"
            />
          </div>
          Not to shabby, huh. Okay. Now, let's fix that intro.
        </p>
      </article>
      {!handleShow ? (
        <header className="screengradeHeader" onClick={show}>
          CLICK HERE TO IMPROVE THE SCREENGRADE
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
        <div className="screengradeContainer">
          <article>
            <p className="screengradeBlogText">
              For a cleaner look:
              <div className="screengradePictureContainer">
                <img
                  className="picture"
                  src={screengradeLongDescriptionWithEdits}
                  alt="long description with 
                                extra stuff crossed out"
                />
              </div>
              {/* fix the stacked caps for 'a' */}
              3. Long paragraphs are bad, just like long sentences are. Better
              to have three separate blocks<sup>2</sup> for a total of five
              lines (seven, including white lines<sup>3</sup>) than having one
              block for a total of five lines.
              <br></br>
              <br></br>
              4. The "
              <span id="yellow">
                <span id="courrier">S</span>
              </span>
              " and "
              <span id="yellow">
                <span id="courrier">B</span>
              </span>
              " are highlighted because stacked capitalized letters<sup>4</sup>{" "}
              (or stacked caps) are off-putting. Now, even though only the "
              <span id="yellow">
                <span id="courrier">B</span>
              </span>
              " is actually problematic, I highlighted both letters to
              illuminate on the issue.
              <br></br>
              <br></br>
              5. Similarly, the two "
              <span id="red">
                <span id="courrier">a</span>
              </span>
              "s are equally (if not more) problematic because they are the same
              letter. Whether capitalized or not, stacked letters<sup>5</sup>{" "}
              are never good for your screengrade.
              <br></br>
              <br></br>
              Note: 4. and 5. apply whether they appear at the start of the
              line, end of the line, or anywhere in between. You may think it's
              nuts, but I've done my research and readers do respond better to
              scripts that minimize stacked caps and stacked letters
              <sup>**</sup>
              <br></br>
              <br></br>
              Worse than stacking individual letters is doing it with full
              words, which is just horrifying, and something only AI should be
              able to get away with. Personally, I wouldn't even start
              succeeding paragraphs with the same word or letter either. But,
              hey, that's just me.
              <br></br>
              <br></br>
              Anyways, the fix here is easy -- we just add the word{" "}
              <span id="courrier">"large"</span> before "
              <span id="courrier">DUMPSTER</span>" as you'll see shortly.
              <br></br>
              <br></br>
              5. Finally, for the{" "}
              <span id="red">
                "<span id="courrier">Brady</span>"
              </span>
              s in <span id="red">red</span>. Similar to stacking letters, you
              should refrain from using the same pronoun or name twice in a row.
              Try and alternate between the two as seen in the corrected version
              here:
              <div className="screengradePictureContainer">
                <img
                  className="picture"
                  src={descriptionFixed}
                  alt="description 
                                    fixed"
                />
              </div>
            </p>
          </article>
        </div>
      )}
      <article className="blog">
        <p className="blogText">
          <h1 className="blogSubHeader">INTROS</h1>
          The number one rule for introducing a "
          <span id="courrier">CHARACTER</span>" is that first time they're
          mentioned, just like "<span id="courrier">PROPS</span>", it must be in{" "}
          <span id="courrier">ALL CAPS</span>.<br></br>
          <br></br>
          Keeping that in mind, there are two acceptable ways to go about
          introducing your character after that, none of which were demonstrated
          in our scene.
          <br></br>
          <br></br>
          The first is with age, if needed. The second without:
          <div className="pictureContainer">
            <div className="pictureLabel">WITH</div>
            <img className="picture" src={withAge} alt="with age" />
          </div>
          <div className="pictureContainer">
            <div className="pictureLabel">WITHOUT</div>
            <img className="picture" src={withoutAge} alt="without age" />
          </div>
          Since by us, "<span id="courrier">Brady</span>" is our main character,
          we'll include his age.
          <br></br>
          <br></br>
          You may be wondering:{" "}
          <span id="italic">
            Why do we need his age when it explicitly says he's a high school
            junior?
          </span>
          <br></br>
          <br></br>
          This is true, we don't really need it. But, there will be times when
          you have a main character who's out of school, and whose age won't be
          part of their character description. In those cases you could write{" "}
          <span id="courrier">(20s)</span>, <span id="courrier">(30s)</span>,
          etc.
          <br></br>
          <br></br>
          Personally, I always introduce characters with a parenthetical age
          because it looks cleaner than using commas galore.
          <br></br>
          <br></br>
          As for the <span id="courrier">ALL CAPS</span>, remember this only
          applies to the first time a character is introduced, and only to the
          script name<sup>6</sup> of said character (notice how "
          <span id="courrier">Wilson</span>" is written).
          <br></br>
          <br></br>
          This means that when our character is introduced, or has dialogue,
          he'll be "<span id="courrier">BRADY</span>" (character names over
          dialogue are in <span id="courrier">ALL CAPS</span> too) however, in
          every other description going forward, he'll just be plain old "
          <span id="courrier">Brady</span>".
          <br></br>
          <br></br>
          Although, this doesn't mean that other characters can't call "
          <span id="courrier">Brady</span>" some kind of nickname, just that
          when we write about him throughout the script, his name must stay
          consistent for the sake of the reader. I'll get to a possible
          exception to this rule in the next section.
          <br></br>
          <br></br>
          Where we're at right now:
          <div className="pictureContainer">
            <img className="picture" src={withAge} alt="with age" />
          </div>
        </p>
      </article>
      {!handleShowSecond ? (
        <header className="screengradeHeader" onClick={showSecond}>
          CLICK HERE FOR SCREENGRADE VERSION
        </header>
      ) : (
        <header className="closeHeader">
          <FontAwesomeIcon
            icon={faClose}
            onClick={closeSecond}
            className="closeButton"
          />
        </header>
      )}
      {handleShowSecond && (
        <div className="screengradeContainer">
          <article>
            <p className="screengradeBlogText">
              It's always better for your screengrade to include the age:
              <br></br>
              <div className="screengradePictureContainer">
                <img
                  className="picture"
                  src={screengradeCleanWithAge}
                  alt="screengrade clean with age"
                />
              </div>
              Uh oh --
              <br></br>
              <div className="screengradePictureContainer">
                <img
                  className="picture"
                  src={screengradeCleanWithAgeAndHighlights}
                  alt="screengrade with age and highlights"
                />
              </div>
              The <span id="yellow">yellow</span> letters here are a less severe
              version of stacked capitalization, as we saw earlier, where the
              stacked letters are both in <span id="courrier">CAPS</span>, but
              different.
              <br></br>
              <br></br>
              Though less severe is still severe so let's just change the line
              to "<span id="courrier">In his hand is a CIGARETTE</span>"
              <br></br>
              <div className="screengradePictureContainer">
                <img className="picture" src={hh} alt="stacked letters" />
              </div>
              Another quick adjustment --
              <br></br>
              <div className="screengradePictureContainer">
                <img className="picture" src={clean} alt="clean, no edits" />
              </div>
              There we go. Just switch out "<span id="courrier">hit</span>" with
              "<span id="courrier">drag</span>" and we're golden. See? Not so
              difficult. Screengrading on the go will become second nature to
              you in no time.
            </p>
          </article>
        </div>
      )}
      <footer className="localGlossary">
        <div className="localGlossaryHeader">LOCAL GLOSS'</div>
        <ol className="localGlossaryList">
          <li>
            <span id="bold">Spec</span>
          </li>
          <div className="definition">
            Short: speculative screenplay. A script written without promise of
            purchase.{" "}
          </div>
          <li>
            <span id="bold">Blocks</span>
          </li>
          <div className="definition">
            Parts of a script. Usually alternating in type (i.e., slugs,
            descriptions, dialogue) each separated by a white line.{" "}
          </div>
          <li>
            <span id="bold">White Lines</span>
          </li>
          <div className="definition">
            Empty lines of page that go between blocks.
          </div>
          <li>
            <span id="bold">Stacked Capitalized Letters</span>
          </li>
          <div className="definition">
            Or stacked caps. Capitalized letters found on top of each other,
            within the same block or blocks. Ex: the "C" that starts the second
            sentence of this definition and the "E" beneath it.
          </div>
          <li>
            <span id="bold">Stacked Letters</span>
          </li>
          <div className="definition">
            Identical letters, whether capitalized or not, found on top of each
            other within the same block or blocks. Ex: italized or not, found on
            top...{" "}
          </div>
          <li>
            <span id="bold">Script Name</span>
          </li>
          <div className="definition">
            The name given to a character for the sake of the script. Used above
            dialogue and in descriptions. In all caps the first time mentioned.
          </div>
          <br></br>
          <span className="localGlossaryFooter">
            * It's just easier to let Wikipedia do the work sometimes.
          </span>
          <br></br>
          <br></br>
          <span className="localGlossaryFooter">
            ** The research I did was to construct three sentences, two with
            stacked letters in different places, and one without -- all of which
            contained the exact same words (by adjusting the margins I was able
            to achieve this). I then asked some friends to read the sentences
            and choose the one they thought looked the nicest. At first my
            friends were confused, as the sentences appeared to be identical,
            but after some slight nudging, every single one of them chose the
            sentence without stacked letters as being the nicest to look at.
          </span>
        </ol>
        <div className="localGlossaryFooter">
          <span>**full definitions found in glossary above**</span>
        </div>
      </footer>
    </div>
  );
}

export default Action;
