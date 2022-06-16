import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import musicCue from "../../../../../../images/extras/musicCues/musicCue.png";
import musicCue2 from "../../../../../../images/extras/musicCues/musicCue2.png";
import allTogether from "../../../../../../images/extras/musicCues/allTogether.png";

function MusicCues(props) {
  useEffect(() => {
    document.title = "How To Write A Screenplay - Please Don't Stop The Music";
  }, []);
  return (
    <div className="container">
      <div className="extrasContainerHeader">
        <Link
          to="/screentour/flashbacks"
          style={{ color: "inherit", textDecoration: "inherit" }}
        >
          <span className="startLink">
            <FontAwesomeIcon icon={faArrowLeft} />
          </span>
        </Link>
        <span>MUSIC CUES</span>
        <Link
          to="/screentour/beats"
          style={{ color: "inherit", textDecoration: "inherit" }}
        >
          <span className="startLink">
            <FontAwesomeIcon icon={faArrowRight} />
          </span>
        </Link>
      </div>
      <div className="blog">
        <div className="blogText">
          A classic mistake amatuar screenwriters make is thinking that you have
          the rights to all music in existence. In reality, the song you think
          is perfect for the scene is irrelevant if the studio doesn't want to
          license it, and a lot of the time, they don't. And won't.
          <br></br>
          <br></br>
          That being said, there are specs that get optioned that have music
          cues of famous songs in them, it's just rare and seen as a bit of a
          rookie move. But, then again, this site was made for rookie moves:
          <div className="pictureContainer">
            <img className="picture" src={musicCue} alt="music cue example" />
          </div>
          First off, you don't need to <span id="underline">underline</span> the
          cue. I only do it because I like to let the reader know it's just for
          them. Not for the characters in the script.
          <br></br>
          <br></br>
          If the song was happening in-scene, for the characters, I'd write it
          differently:
          <div className="pictureContainer">
            <img
              className="picture"
              src={musicCue2}
              alt="in-scene music cue example"
            />
          </div>
          Here the singing from "<span id="courrier">GRUNGE BAND</span>" is
          actually in the scene and should be written as dialogue. Since it's
          done for comedic effect the timing of the lyrics is part of what makes
          it funny.
          <br></br>
          <br></br>
          Conversely, the previous music cue is happening just for tone, so what
          part of the song will play at what part of the scene is likely
          unimportant. The fact that the song is playing during the scene is
          enough.
          <br></br>
          <br></br>
          Note: as in the previous section, music cues are often found together
          with/extending for a couple of blocks:
          <div className="pictureContainer">
            <img
              className="picture"
              src={allTogether}
              alt="music cue, flashback, montage all together example"
            />
          </div>
          Noteception: the order in which you introduce music
          cues/flashbacks/montages should be in the order in which the audience
          will interact with them. Basically, use your head.
          {/* GIF of Rex using his head from Toy Story 2 */}
        </div>
      </div>
    </div>
  );
}

export default MusicCues;
