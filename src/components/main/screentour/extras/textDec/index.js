import React, { useEffect } from "react";
import "./style.index.scss";
import italicExample from "../../../../../images/extras/textDec/italicExample.png";
import underlineExample from "../../../../../images/extras/textDec/underlineExample.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function TextDec(props) {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    document.title = "How To Write A Screenplay - Text Decoration";
  }, []);
  return (
    <div className="container">
      <div className="extrasContainerHeader">
        <Link
          to="/screentour/extras"
          style={{ color: "inherit", textDecoration: "inherit" }}
        >
          <span className="startLink">
            <FontAwesomeIcon icon={faArrowLeft} />
          </span>
        </Link>
        <span>TEXT DEC'</span>
        <Link
          to="/screentour/slang"
          style={{ color: "inherit", textDecoration: "inherit" }}
        >
          <span className="startLink">
            <FontAwesomeIcon icon={faArrowRight} />
          </span>
        </Link>
      </div>
      <div className="blog">
        <div className="blogText">
          It's a known rule that every script needs to be written in some type
          of <span id="courrier">COURRIER</span>
          <sup>*</sup> font. Having your sceenplay be in any other, is a
          guaranteed way to have it end up in the trash.
          <br></br>
          <br></br>
          Similarly, if you have a <span id="bold">sentence</span> in{" "}
          <span id="italic">your</span> script that's{" "}
          <span id="underline">decorated</span> like{" "}
          <span id="allTextDecs">this</span>, it'll probably end up in the trash
          as well.
          <br></br>
          <br></br>
          This is because the generally accepted rule is that text decoration
          should be kept to a minimum, if used at all. It distracts from the
          story, it messes with the flow, and at times it can be downright ugly.
          <br></br>
          <br></br>
          That being said, there are ways you can decorate your script which
          we'll get to shortly.
          <br></br>
          <br></br>
          But, before we do, it's important to know that you should only use
          text decoration (other than the usual) in a dialogue block, and the
          occasional superimposition. It's abhorrent to see decorated
          descriptions in any way, so don't do it.
          <br></br>
          <br></br>
          <div id="border"></div>
          <div className="boldSubHeader" id="bold">
            BOLD
          </div>
          Other than sluglines, the only time you should be using bold is with
          superimposition, which will be covered in a further section.
          <br></br>
          <br></br>
          Any other bold making it into your script is going to bring your
          screengrade down, and turn your readers off. Like overusing any text
          dec' it reeks of amateur writing.
          <br></br>
          <br></br>
          <div id="border"></div>
          <div className="italicsSubHeader" id="italic">
            ITALICS
          </div>
          In standard bookwriting, using italics is a way of adding emphasis to
          a word. However, in screenwriting, I've seen the job done by
          underlining instead of italicizing.
          <br></br>
          <br></br>
          Personally, I use italics, but using an underline isn't awful:{" "}
          <div className="pictureContainer">
            <img className="picture" src={italicExample} alt="italic example" />
            <div className="pictureLabel">
              <span id="courrier">VS.</span>
            </div>
            <img
              className="picture"
              src={underlineExample}
              alt="underline example"
            />
          </div>
          You can decide which one you like better, but just remember to stick
          to the <span id="italic">same</span> style choices within the{" "}
          <span id="underline">same</span> script, unlike what I'm doing now.
          <br></br>
          <br></br>
          <div id="border"></div>
          <div className="underlineSubHeader" id="underline">
            UNDERLINE
          </div>
          The only thing not covered in the previous subsection regarding what
          to underline is with superimposition. And the thing is, it's needed.
          Somewhat.
          <br></br>
          <br></br>
          Both underline and bold should be present with whatever is being
          superimposed. A later section will get into how and when you should
          superimpose, but here's a quick visual:
          <div className="superimposeExamplePart">
            <div className="superimposeExample">SUPERIMPOSE: "EXAMPLE"</div>
          </div>
          <span id="bold">Note:</span> I've seen superimposition that wasn't
          bold, so, again, you can decide which you prefer. Personally, I go
          with bold. But, you do you.
          <br></br>
          <br></br>
          <div id="border"></div>
          <div className="underlineSubHeader">CAPS</div>
          Shortly put, if it isn't a slugline, prop, or character, you shouldn't
          be putting anything in <span id="courrier">ALL CAPS</span>.<br></br>
          <br></br>
          The worst you could do is use caps to emphasize a word in dialogue,
          instead of italicizing or underlining.
          <br></br>
          <br></br>
        </div>
      </div>
      <div className="localGlossary">
        <div className="localGlossaryHeader">LOCAL GLOSS'</div>
        <ol className="localGlossaryList">
          <span className="localGlossaryFooter">
            * I'm not sure the actual differences between the types of Courrier
            font (i.e., New, Prime, or just plain Courrier) but I believe either
            is fine. The important aspect of Courrier is that it is monospaced,
            meaning all letters are spaced equally.
          </span>
        </ol>
        <div className="localGlossaryFooter">
          <span>
            <br></br>
          </span>
        </div>
      </div>
    </div>
  );
}

export default TextDec;
