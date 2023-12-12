import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Intro(props) {
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    document.title = "How To Write A Screenplay - Introduction";
  }, []);

  return (
    <div>
      <div className="container">
        <div className="containerHeader">
          <span>INTRODUCTION</span>
          <Link
            to="/fadein"
            style={{ color: "inherit", textDecoration: "inherit" }}
          >
            <span className="startLink">
              <FontAwesomeIcon icon={faArrowRight} />
            </span>
          </Link>
        </div>
        <div className="blog">
          {/* COMPONENT NEEDS TO BE FIXED href switched to Links with correct path */}
          <div className="blogText">
            <div className="blogSubHeader">WHAT TO EXPECT</div>
            First things first, I think it's important to note that 99% of what
            you'll find in the screentour will not help improve your story's
            plot whatsoever.
            <br></br>
            <br></br>
            <span className="divider">Whatsoever</span>
            <br></br>
            <br></br>
            It will merely teach you the best way to style and present your
            screenplay. Not how to pen{" "}
            <a
              href="https://www.scriptslug.com/script/pulp-fiction-1994"
              rel="noreferrer noopener"
              target="_blank"
            >
              Pulp Fiction
            </a>
            .
            <div className="gifContainer">
              <img
                className="gif"
                src="https://media.giphy.com/media/6uGhT1O4sxpi8/giphy.gif"
                alt="Gif of John Travolta"
              />
            </div>
            <div id="border"></div>
            Furthermore, this tour will not be covering formatting constants
            such as margins or spacing.
            <br></br>
            <br></br>
            If you don't already have a screenwriting software that does those
            things for you, I suggest you purchase one before continuing.
            <br></br>
            <br></br>I use{" "}
            <a
              href="https://www.arcstudiopro.com/"
              rel="noreferrer noopener"
              target="_blank"
            >
              Arc Studio Pro
            </a>
            , but tons of people use{" "}
            <a
              href="https://www.finaldraft.com/"
              rel="noreferrer noopener"
              target="_blank"
            >
              Final Draft
            </a>
            .<br></br>
            <br></br>
            Note: if you're not looking to spend any money yet, there are some
            free softwares (as well as free versions of{" "}
            <span id="italic">paid</span> softwares) you can find with a quick
            Google search.
            <br></br>
            <br></br>
            My point here is it's 2022. You should not be spacing your own
            screenplays unless you enjoy a good torture session.
            <br></br>
            <br></br>
            <div id="border"></div>
            Lastly, you will see many "rules" on this tour.
            <br></br>
            <br></br>
            The quotes are there because in truth art doesn't really have any
            rules. You can do whatever you want and it'll sometimes work.
            <br></br>
            <br></br>
            <span className="divider">The key word is sometimes</span>
            <br></br>
            <br></br>
            The reality is no professional will read your script if the margins
            are off or if you use the wrong type of font. That's just a fact.
            <br></br>
            <br></br>
            So, it sometimes pays to follow the "rules", you know?
            {/* <div className="gifContainer">
              <img
                className="gif"
                src="https://media.giphy.com/media/iB4PoTVka0Xnul7UaC/giphy.gif"
                alt="Kramer"
              />
            </div> */}
            <br></br>
            <br></br>
            <div id="border"></div>
            <div className="blogSubHeader">WHO AM I</div>
            I'm a software engineer who enjoys screenwriting. I made this
            website both as a project, but also as a way to give back to the
            screenwriting community.
            <br></br>
            <br></br>
            To give a little background, I started writing screenplays a while
            back and found it difficult to learn the tricks of the trade by
            myself.
            <br></br>
            <br></br>
            How do I write music cues? <span id="italic">Should</span> I write
            music cues? What are music cues? Lots of questions and not a lot of
            cohesive answers.
            <br></br>
            <br></br>
            Don't get me wrong, there's a plenty of good stuff out there in the
            ether, but it was very unorganized. My goal is that this website
            will help unite the screenwriting community. Connect pros with
            rooks. A Qs, and so on.
            <br></br>
            <br></br>
            <div id="border"></div>
            Also, some of the terms found in the glossary, or in a section's
            local gloss', were invented by me.
            <br></br>
            <br></br>
            Not that the concepts didn't already exist, just that I have given
            names to those that were nameless. For posterity. And because it was
            fun.
            <br></br>
            <br></br>
            Anyways. Without further adieu. Let's start the tour. See: arrow on
            the screentour header.
            <div className="gifContainer">
              <img
                className="gif"
                src="https://media.giphy.com/media/1132uJKzZQc4ow/giphy.gif"
                alt="Willy Winka Tripping Balls"
              />
            </div>
            <div id="border"></div>
            <span id="bold">p.s.:</span> the min-width for screenplay example
            pictures is about 350px (to fit content), so if the device you're
            using is smaller than that, I suggest you wait until you're by a
            larger screen for a better learning experience. 690px and above is
            preferable
            <br></br>
            <br></br>
            <span id="bold">p.p.s:</span> feel free to contact me with any
            comments or questions at{" "}
            <a href="mailto:screenplayrules@gmail.com">
              screenplayrules@gmail.com
            </a>
            .<br></br>
            <br></br>
            <span id="bold">
              p.s.³ (well not really cubed, but you get the point):
            </span>{" "}
            these rules are not set in stone. As I mature as a writer so will
            the rules. Reason will prevail!
            <br></br>
            <br></br>
            <div className="screentour-footer">
              <Link
                to="/"
                style={{ color: "inherit", textDecoration: "inherit" }}
              >
                <span className="screentour-footer-link">HOME</span>
              </Link>
              <Link
                to="/fadein"
                style={{ color: "inherit", textDecoration: "inherit" }}
              >
                <span className="screentour-footer-link">NEXT PAGE</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Intro;
