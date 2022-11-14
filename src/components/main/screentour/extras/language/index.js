import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import wolfSample from "../../../../../images/extras/language/wolfSample.png";
import mandarinSample from "../../../../../images/extras/language/mandarinExample.png";
import secondMandarinSample from "../../../../../images/extras/language/secondMandarinExample.png";

function Language(props) {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    document.title = "How To Write A Screenplay - F**king language, bro!";
  }, []);
  return (
    <div className="container">
      <div className="extrasContainerHeader">
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
          dead fucking wrong, you fat piece of shit. I don't give a fuck how
          vulgar you make your dumb little bitch scipt. It's not like you're
          selling the shit?
          <br></br>
          <br></br>
          That being said, it looks bad if you keep using profanity as a crutch.
          A lot of amatuar writers think all intense scenes require a barrage of
          explatives, but they don't. So, use them wisely.
          <br></br>
          <br></br>
          <span className="divider">Fucker</span>
          <div className="gifContainer">
            <img
              src="https://media.giphy.com/media/t0005w3YYbuIU/giphy.gif"
              alt="Jeo Belcaprio"
              className="gif"
            />
          </div>
          Anyways, this section is actually talking about foriegn languages and
          subtitles. It's pretty simple, conceptially:
          <br></br>
          <br></br>
          You have a character that's from a foriegn country or different
          galaxy, and you want them to speak in a specific language.
          <br></br>
          <br></br>
          This is totally fine, just make sure to not spell out the foriegn
          language. Instead write the sentence how you normally would (in
          whatever language you're writing in) and include a wryly:
          <div className="pictureContainer">
            <img
              className="picture"
              src={mandarinSample}
              alt="langauge explained in wryly"
            />
          </div>
          Exactly what you put in the wryly doesn't matter as long as it's
          clear. "<span id="courrier">(Mandarin)</span>", "
          <span id="courrier">(MANDARIN)</span>" or "
          <span id="courrier">(in Mandarin)</span>" all work fine. You can
          create your own variation if you want as long as you keep it simple.
          <br></br>
          <br></br>A few things to note:
          <br></br>
          <br></br>
          <span id="bold">1.</span> if a foriegn langauge will be spoken for an
          extended period of time (I'd say for more than half a scene) introduce
          the langauge shift in the preceding description and screw the wrylys:
          <div className="pictureContainer">
            <img
              className="picture"
              src={secondMandarinSample}
              alt="langauge explained in preceding description"
            />
          </div>
          <span id="bold">2.</span> on the other hand, if your character is
          speaking the language badly for comedic effect, you{" "}
          <span id="italic">can</span> write out the foriegn words in English or
          whatever langugae you write in. Just make sure to use a wryly here as
          well for clarification.
          <br></br>
          <br></br>
          <span id="bold">3.</span> if the language is made up (like our alien
          one from earlier) you'll still need either a preceding description or
          wryly for explanation.
          <br></br>
          <br></br>
          <span id="bold">3.a.</span> the difference here is that if we, the
          audience, are supposed to know what the aliens are saying, the
          dialogue written will be subtitled when it appears on screen. So, it's
          probably best to let the reader know this with wrylys as well.
          <br></br>
          <br></br>
          <span id="bold">p.s.:</span> the words for bathroom and bathrobe
          happen to be similar in Mandarin as they are in english, so it works
          out.
          <br></br>
          <br></br>
        </div>
      </div>
    </div>
  );
}

export default Language;
