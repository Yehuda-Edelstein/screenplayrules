import React, { useState, useEffect } from "react";
import "./style.index.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faArrowRight,
  faClose,
} from "@fortawesome/free-solid-svg-icons";
import continuedSamePage from "../../../../../images/dialogue/continuedSamePage.png";
import continuedNewPage from "../../../../../images/dialogue/continuedNewPage.png";
import prelapExample from "../../../../../images/dialogue/prelapExample.png";
import offscreenExample from "../../../../../images/dialogue/offscreenExample.png";
import voiceoverContinued from "../../../../../images/dialogue/voiceoverContinued.png";
import withDialogueAndHighlights from "../../../../../images/dialogue/withDialogueAndHighlights.png";
import screegradeWithDialogueAndHighlights from "../../../../../images/dialogue/screengradeWithDialogueAndHighlights.png";
import bareDialogue from "../../../../../images/dialogue/bareDialogue.png";
import wrylyExample from "../../../../../images/dialogue/wrylyExample.png";
import apartmentExample from "../../../../../images/dialogue/apartmentExample.png";
import wrylyExampleWithHighlights from "../../../../../images/dialogue/wrylyExampleWithHighlights.png";
import screengradeWrylyExample from "../../../../../images/dialogue/screengradeWrylyExample.png";

function Dialogue(props) {
  const [handleShow, setHandleShow] = useState(false);
  const [handleShowSecond, setHandleShowSecond] = useState(false);

  useEffect(() => {
    document.title = "How To Write A Screenplay - Dialogue?";
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
      <div className="containerHeader">
        <Link
          to="/screentour/action"
          style={{ color: "inherit", textDecoration: "inherit" }}
        >
          <span className="startLink">
            <FontAwesomeIcon icon={faArrowLeft} />
          </span>
        </Link>
        <span>DIALOGUE</span>
        <Link
          to="/screentour/transitions"
          style={{ color: "inherit", textDecoration: "inherit" }}
        >
          <span className="startLink">
            <FontAwesomeIcon icon={faArrowRight} />
          </span>
        </Link>
      </div>

      <div className="blog">
        <div className="blogText">
          So, you've got your where, when, what, and who. But, what's your who
          saying?
          <br></br>
          <br></br>
          Now, even though there aren't any screenplay rules specific to actual
          dialogue (since any dialogue written should follow the rules I
          described earlier in the action section) there are screenplay rules
          regarding dialogue as a block in general.
          <br></br>
          <br></br>
          <div className="blogSubHeader">CHARIES</div>
          Character parentheses or charies (pronounced: 'carries') are
          parentheses that go beside the "<span id="courrier">CHARACTER</span>"
          name, right above the dialogue.
          <br></br>
          <br></br>
          The most common chary is <span id="courrier">(CONT'D)</span> and
          implies that a character's dialogue continues, either to the next
          page, or through a description:
          <div className="pictureContainer">
            <div className="pictureLabel">1.</div>
            <img
              className="picture"
              src={continuedSamePage}
              alt="continued example, same page"
            />
          </div>
          <div className="pictureContainer">
            <div className="pictureLabel">2.</div>
            <img
              className="picture"
              src={continuedNewPage}
              alt="continued example, new page"
            />
          </div>
          As far as other charies go, here's a list of acceptable ones to use:
          <ul>
            <div className="chariesList">
              <li>
                <span id="courrier">(V.O.)</span> = Voice-Over
              </li>
              <li>
                <span id="courrier">(O.S.)</span> = Off Screen
              </li>
              <li>
                <span id="courrier">(PRE-LAP)</span> = Dialogue for the current
                scene that starts in the previous one
              </li>{" "}
              {/* maybe reword this definition */}
            </div>
          </ul>
          <div className="blogSubHeader" id="smaller">
            (O.S.) vs (PRE-LAP)
          </div>
          The difference between the charies <span id="courrier">(O.S.)</span>{" "}
          and <span id="courrier">(PRE-LAP)</span> is their script time
          <sup>1</sup>.<br></br>
          <br></br>
          See, when someone speaks off screen, it's still happening in script
          present time<sup>2</sup>, whereas <span id="courrier">(PRE-LAP)</span>{" "}
          refers to dialogue in script future time<sup>3</sup> that{" "}
          <span id="italic">looks</span> as if it starts in script present time.
          Here's an example of that:
          <div className="pictureContainer">
            <img
              className="picture"
              src={prelapExample}
              alt="pre lap example"
            />
          </div>
          If you're confused, let me break it down:
          <br></br>
          <br></br>
          The first line of dialogue happens for the audience during the first
          scene, but for the character, it happens in the second. Right? "
          <span id="courrier">CHARACTER</span>" isn't saying "
          <span id="courrier">Man, it's eerie here</span>" during the daytime
          scene. It only seems that way to the viewer, but he (or she -- relax,
          it's an amorphous, genderless entity) is actually saying this during
          the nighttime scene, and will be filmed as such.
          <br></br>
          <br></br>A reason you would use <span id="courrier">(PRE-LAP)</span>{" "}
          in a script is to let the reader know we'll be jumping forward in
          time.
          <br></br>
          <br></br>
          Note: If you're new to screenwriting stick to the basics. Trying to
          fit a <span id="courrier">(PRE-LAP)</span> where it doesn't belong
          looks bad, and is an amateur move. And amateurs don't get optioned
          <sup>4</sup>. So don't do it. Trust me, there's nothing I want more
          than for you to option the heck out of your spec.
          <br></br>
          <br></br>
          On the other side of the spectrum, <span id="courrier">
            (O.S.)
          </span>{" "}
          has a continuous script time:
          <div className="pictureContainer">
            <img
              className="picture"
              src={offscreenExample}
              alt="off screen example"
            />
          </div>
          Starting to get it?
          <br></br>
          <br></br>
          Notice, both cases require <span id="courrier">(CONT'D)</span> on the
          second block of dialogue because both blocks will be filmed together.
          Also, as I alluded to previously, these cases, along with{" "}
          <span id="courrier">(V.O.)</span>, are the only acceptable times to
          have an unintroduced character give dialogue -- when they are not in
          the shot, in any capacity, but will be, either momentarily, or at some
          point in the script.
          <br></br>
          <br></br>
          The exception to <span id="italic">this</span> exception is with a "
          <span id="courrier">NARRATOR</span>" who remains off screen the entire
          film. Although, you'd need to use <span id="courrier">(V.O.)</span> in
          that case. Always. The reason for which you'll understand shortly.
          Hopefully. Anyways. Moving right along...
          <br></br>
          <br></br>
          You may be asking yourself:{" "}
          <span id="italic">
            What's the difference between (v.o.) and (o.s.)?
          </span>
          <br></br>
          <br></br>
          First off, charies are always in <span id="courrier">ALL CAPS</span>.
          Second, I'm getting to that, hotshot.
          <br></br>
          <br></br>
          <div className="blogSubHeader" id="smaller">
            (O.S.) vs (V.O.)
          </div>
          The difference between these two charies is simple: If the character's
          voice is recorded from a scene taken by the camera (presumably with
          some type of boom mic) then it's <span id="courrier">(O.S.)</span>.
          Any dialogue recorded in a studio, then added in, is{" "}
          <span id="courrier">(V.O.)</span>.<br></br>
          <br></br>
          Think of a narrator in a movie. Edward Norton didn't sit in a chair on
          set and record all his narration for Fight Club on camera for a scene
          that would never be in the movie. He obviously recorded it in an
          air-conditioned studio.
          <br></br>
          <br></br>
          As for movies like Forrest Gump, where part of the narration is on
          camera, but then switches to a voice-over, I'm not sure how it was
          written, but you can see for yourself on{" "}
          <a
            href="https://www.scriptslug.com/script/forrest-gump-1994"
            rel="noreferrer noopener"
            target="_blank"
          >
            Scriptslug
          </a>
          .<br></br>
          <br></br>
          Note: they use <span id="courrier">(Over)</span> in the script for
          narration and it makes me gag. But, hey, whatever sells. Lol.{" "}
          <span id="italic">Oscar. Winner.</span>
          <br></br>
          <br></br>
          Either way, it doesn't matter. The screenplay rule over here is
          simple: If the dialogue is recorded after or before filming, it's{" "}
          <span id="courrier">(V.O.)</span>. Otherwise, it's{" "}
          <span id="courrier">(O.S.)</span>, baby.
          <br></br>
          <br></br>
          Here's an example of <span id="courrier">(V.O.) with a twist</span>:
          <div className="pictureContainer">
            <img
              className="picture"
              src={voiceoverContinued}
              alt="voice over example"
            />
          </div>
          The twist here is in the shape of a rule, and the rule is that{" "}
          <span id="courrier">(CONT'D)</span> needs to be present no matter if
          another chary precedes it. Whether it's{" "}
          <span id="courrier">(V.O.)</span> or <span id="courrier">(O.S.)</span>
          , if it's continuous dialogue (recorded or filmed in one take) it
          needs a <span id="courrier">(CONT'D)</span> after it.
          <br></br>
          <br></br>
          Note: I'm not sure how a <span id="courrier">(PRE-LAP)</span> could
          ever be continuous dialogue from a previous block, but if you figure
          out a way that it can, you'll need to go and slap a{" "}
          <span id="courrier">(CONT'D)</span> after it as well.
          <br></br>
          <br></br>
          Note #2: I've seen one other chary used for dialogue spoken off camera
          rightly dubbed <span id="courrier">(O.C.)</span>, but don't ever use
          it. It's the same as <span id="courrier">(O.S.)</span> which is more
          common, so just stick with that. Don't be that guy, you know? Or girl.
          Or amorphous, genderless entity. Anyways...
          <br></br>
          <br></br>
          Back to our guy, "<span id="courrier">Brady</span>". He's doing okay.
          But, he seems lonely. Let's give him a love interest and get that ball
          rolling:
          <div className="pictureContainer">
            <img
              className="picture"
              src={withDialogueAndHighlights}
              alt="dialogue with highlights"
            />
          </div>
          1. The{" "}
          <span id="courrier">
            <span id="yellow">(O.S.)</span>
          </span>{" "}
          is highlighted because even if the props are off screen, they still
          need to be written as such. Notice also how "
          <span id="courrier">DOOR</span>" is written in{" "}
          <span id="courrier">ALL CAPS</span> even though its introduction is
          off screen as well.
          <br></br>
          <br></br>
          2.{" "}
          <span id="courrier">
            <span id="yellow">"JULES"</span>
          </span>{" "}
          is a nickname for the character, but it's also her script name. And
          only a script name needs to be in <span id="courrier">ALL CAPS</span>.
          Think of '<span id="courrier">Randall "PINK" Floyd</span>' from{" "}
          <a
            href="https://www.scriptslug.com/script/dazed-and-confused-1993"
            rel="noreferrer noopener"
            target="_blank"
          >
            Dazed and Confused
          </a>
          .<br></br>
          <br></br>
          The only difference with a nickname is that you should put{" "}
          <span id="courrier">""</span> around it as we did with our lovely{" "}
          <span id="courrier">"JULES"</span>.<br></br>
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
                src={screegradeWithDialogueAndHighlights}
                alt="dialogie with screengrade highlights"
              />
            </div>
            3. Every time you see a{" "}
            <span id="courrier">
              <span id="yellow">--</span>
            </span>{" "}
            in a script, it's implying a cutoff<sup>5</sup> and could be found
            in both description and dialogue. It can be used for a jump scare or
            to break a silence with intention (more on this in surprise section
            -- literally, not like the section is a surprise). Here I would
            include it because <span id="courrier">Jules</span> is going to be
            the love interest and the reader should know that her introduction
            will likely be an important shot.
            <br></br>
            <br></br>
            4. Having parallel capitalized letters<sup>6</sup> or parallel caps
            is not as visually grotesque as stacked caps, but it's still not
            worth the lower screengrade. We'll just squeeze the word "
            <span id="courrier">back</span>" between{" "}
            <span id="red">
              <span id="courrier">A</span>
            </span>{" "}
            and{" "}
            <span id="red">
              <span id="courrier">D</span>
            </span>
            , and we're good to go.
            <br></br>
            <br></br>
            5. Using a{" "}
            <span id="courrier">
              <span id="yellow">:</span>
            </span>{" "}
            (i.e., a colon) is a way to show the dialogue that proceeds a
            description is directly relevant to the action before it. In our
            case, Jules throws open the back door, then instantly calls Brady a
            loser. Using a colon is like including the action in the dialogue
            itself (we will see exactly this in a moment).
          </div>
        </div>
      )}
      <div className="blog">
        <div className="blogText">
          <div className="blogSubHeader">WRYLIES</div>
          Suppose I asked you this question: How do you let your reader know the
          tone of a particular line or block of dialogue?
          <br></br>
          <br></br>
          Assuming our main "<span id="courrier">Character</span>" has already
          been introduced, here's the scene:
          <div className="pictureContainer">
            <img className="picture" src={bareDialogue} alt="bare dialogue" />
          </div>
          See the issue? Is the scene supposed to be funny? Creepy? Awkward?
          <br></br>
          <br></br>
          More than that, even if your reader is aware of what genre your script
          is and, can deduce the tone you're going for, are they going to{" "}
          <span id="italic">feel</span> it? No. They probably won't. And making
          them feel it is part of your job as the screenwriter.
          <br></br>
          <br></br>
          So, what's the fix? It's a combination of two things: description and
          the occasional wryly. First off, what's a wryly?
          <br></br>
          <br></br>
          Wrylies (plural) are parentheticals found between the "
          <span id="courrier">CHARACTER</span>" name and their dialogue to help
          imply tone:
          <div className="pictureContainer">
            <img className="picture" src={wrylyExample} alt="wryly example" />
          </div>
          The word that goes inside the parenthesis is what tone the dialogue
          should be read in. Wrylies can be useful, but be warned, you don't
          want to be the guy known for them.
          <br></br>
          <br></br>
          Using wrylys too often is seen as an amateur move. Fun fact: It's
          called a "wryly" because screenwriters would consistently use the word
          to describe wry dialogue:
          <div className="pictureContainer">
            <div className="pictureLabel">The Apartment (1960)</div>
            <img
              className="picture"
              src={apartmentExample}
              alt="dialogue from The Apartment (1960)"
            />
          </div>
          Note: regarding our example, some writers might have used the word "
          <span id="courrier">sarcastically</span>" instead of "
          <span id="courrier">sarcastic</span>", but I prefer my wrylies a bit
          more wry (i.e., without the 'ly'). It looks nicer, plus, it gets the
          same point across anyway, so might as well save the plasma, you know?
          <br></br>
          <br></br>
          Our scene with some description and a wryly:
          <div className="pictureContainer">
            <img
              className="picture"
              src={wrylyExampleWithHighlights}
              alt="wryly example with highlights"
            />
          </div>
          Now you can really feel the tension. Don't worry, we'll get back to
          our guy, "<span id="courrier">Brady</span>" in the coming sections.
        </div>
      </div>
      {!handleShowSecond ? (
        <div className="screengradeHeader" onClick={showSecond}>
          CLICK HERE FOR SCREENGRADE VERSION
        </div>
      ) : (
        <div className="closeHeader">
          <FontAwesomeIcon
            icon={faClose}
            onClick={closeSecond}
            className="closeButton"
          />
        </div>
      )}
      {handleShowSecond && (
        <div className="screengradeBlogText">
          <div className="screengradePictureContainer">
            <img
              className="picture"
              src={screengradeWrylyExample}
              alt="wryly example with screegrade rules"
            />
          </div>
          1. A cutoff has been added because Character (2)'s intro is a jump
          scare, and jump scares should be preceded by a cutoff.
          <br></br>
          <br></br>
          2. To give the scene more tension we've added a beat<sup>7</sup> in
          between two blocks of dialogue.
        </div>
      )}
      <div className="localGlossary">
        <div className="localGlossaryHeader">LOCAL GLOSS'</div>
        <ol className="localGlossaryList">
          <li>
            <span id="bold">Script Time</span>
          </li>
          <div className="definition">
            The relationship between the reading of the script and the viewing
            of it, with regards to time. Confusing at first, even for me.
          </div>
          <li>
            <span id="bold">Script Present Time</span>
          </li>
          <div className="definition">**SEE GLOSSARY**</div>
          <li>
            <span id="bold">Script Future Time</span>
          </li>
          <div className="definition">**TRUST ME LOL**</div>
          <li>
            <span id="bold">Optioned</span>
          </li>
          <div className="definition">
            A contract that gives the interested party exclusive rights to
            purchase the script. By getting a screenplay optioned, the
            screenwriter receives a cash advance that is not-contingent to the
            actual selling of the script. That is, if the interested party
            decides not to buy, you still get to keep the cash, keep your
            script, and go back to shopping that baby around. Basically, every
            screenwriter's wet dream.
          </div>
          <li>
            <span id="bold">Cutoff</span>
          </li>
          <div className="definition">
            Double dashes (--), implying a quick jump to the next scene, line of
            description, or line of dialogue.{" "}
          </div>
          <li>
            <span id="bold">Beat</span>
          </li>
          <div className="definition">
            A moment of time, used between blocks in a script (or as a wryly) to
            suggest a distinct pause in a scene. Found in all genres of film.
          </div>
        </ol>
        <div className="localGlossaryFooter">
          <span>**full definitions found in glossary above**</span>
        </div>
      </div>
    </div>
  );
}

export default Dialogue;
