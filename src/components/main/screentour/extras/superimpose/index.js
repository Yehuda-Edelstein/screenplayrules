import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "./style.index.scss";
import superimposeEx from "../../../../../images/extras/superimpose/superimposeEx.png";
import differentLines from "../../../../../images/extras/superimpose/differentLines.png";

function Superimpose(props) {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    document.title = "How To Write A Screenplay - Superimpose";
  }, []);
  return (
    <div className="container">
      <div className="extrasContainerHeader">
        <Link
          to="/beats"
          style={{ color: "inherit", textDecoration: "inherit" }}
        >
          <span className="startLink">
            <FontAwesomeIcon icon={faArrowLeft} />
          </span>
        </Link>
        <span>SUPERIMPOSE</span>
        <Link
          to="/overblack"
          style={{ color: "inherit", textDecoration: "inherit" }}
        >
          <span className="startLink">
            <FontAwesomeIcon icon={faArrowRight} />
          </span>
        </Link>
      </div>
      <div className="blog">
        <div className="blogText">
          As talked about in a previous section, you can superimpose anything on
          screen if you like, although, it's uncommon to superimpose anything
          other than words.
          <br></br>
          <br></br>
          So maybe refrain from doing it with gifs if you can. Unlike me.
          <div className="gifContainer">
            <img
              src="https://media.giphy.com/media/cklPOHnHepdwBLRnQp/giphy.gif"
              alt="Carlton dancing"
              className="gif"
            />
          </div>
          Anyways, the destinction between possible superimpositions is whether
          or not they are plot-related.
          <br></br>
          <br></br>
          <div id="border"></div>
          <div className="blogSubHeader">PLOT-RELATED</div>
          These types of superimpositions will likely be for establishing
          locations, dates, and times. I call this{" "}
          <span id="italic">superexposition</span>. <br></br>
          <br></br>
          It's not uncommon to see the three aformentioned used together so the
          example will be as such:
          <div className="pictureContainer">
            <img
              src={superimposeEx}
              alt="superimpose example"
              className="picture"
            />
          </div>
          The order in which you write superimpositions is up to you as always,
          this is just how I do it. Furthermore, how much info you decide to
          give is up to you as well.
          <br></br>
          <br></br>
          You could write just location, or just date, or just time. Whatever is
          better for the story.
          <br></br>
          <br></br>
          Also, like I said earlier, you can superimpose anything you like.
          These are just things you see superimposed in lots of movies. If you
          want to superimpose texts or emails you can do that too.
          <br></br>
          <br></br>
          Be creative just as long as it's readable.
          <br></br>
          <br></br>
          <span id="bold">Note:</span> the period between the three superimposed
          descriptions is just seperation for the reader's clarity. On-screen it
          may be displayed vertically instead of horizontally.
          <br></br>
          <br></br>
          <span id="bold">Bonus:</span> if you want multiple superimpositions,
          one after the other, there's a way to do that as well:
          <div className="pictureContainer">
            <img
              src={differentLines}
              alt="superimpositions on multiple lines"
              className="picture"
            />
          </div>
          Lastly, superimpositions are also used to establish change in time for
          the audience's understanding:
          <div className="gifContainer">
            <img
              src="https://media.giphy.com/media/3ogwG36LKIkM937ZG8/giphy.gif"
              alt="three hours later"
              className="gif"
            />
          </div>
          The way to write a time change is the same as any other
          superimposition, so there's really no need for me to show it. But
          since I'm a team player:
          <div className="superimposeComponentExamplePart">
            <span className="superimposeComponentExample">
              SUPERIMPOSE: "ONE HOUR LATER"
            </span>
          </div>
          See? I mean, there was really no need, was there?
          <br></br>
          <br></br>
          <div id="border"></div>
          <div className="blogSubHeader">NOT-RELATED</div>
          Examples of not-related superimpositions are things like the name of
          the film, its titles, or its credits.
          <br></br>
          <br></br>
          Honestly, there's usually no reason to ever include these things in a
          script, but if you really want to the only thing that's different, is
          that with titles, you don't superimpose each one, rather just write it
          with an opening and closing block.
          <br></br>
          <br></br>
          <span className="dividerCourrier">BEGIN TITLES:</span>
          <br></br>
          <br></br>
          <span style={{ marginLeft: "20px" }}>**MORE SCRIPT**</span>
          <br></br>
          <br></br>
          <span className="dividerCourrier">END TITLES.</span>
          <br></br>
          <br></br>
          <div id="border"></div>
          <span id="bold">Note:</span> if you're writing a tv show with a
          continuous title sequence just use the one block:
          <br></br>
          <br></br>
          <span className="dividerCourrier">TITLE SEQUENCE:</span>
          <br></br>
          <br></br>
          Although, again these are very extra and usually never needed. So
          don't stress to much about it.
          <br></br>
          <br></br>
          <div className="screentour-footer">
            <Link
              to="/beats"
              style={{ color: "inherit", textDecoration: "inherit" }}
            >
              <span className="screentour-footer-link">BACK</span>
            </Link>
            <Link
              to="/overblack"
              style={{ color: "inherit", textDecoration: "inherit" }}
            >
              <span className="screentour-footer-link">NEXT PAGE</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Superimpose;
