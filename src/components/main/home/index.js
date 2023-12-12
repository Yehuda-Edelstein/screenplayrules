import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./style.index.scss";

function Home(props) {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    document.title = "Screenplay Rules - Get Good, Get Optioned, Get Rich";
  }, []);
  return (
    <div className="home-container">
      {/* ADD A TV PLAYING DIFFERENT GIFS FROM THE SCREENTOUR OR JUST OTHER GOOD MOVIES. TO FILL SPACE */}
      <h1>How To Write A Screenplay</h1>
      <p>
        <span>
          <Link to="/" style={{ color: "inherit", textDecoration: "inherit" }}>
            New to screenwriting? Click here to take the screentour for
            everything you need to know!
          </Link>{" "}
        </span>
      </p>
      <p>
        [p.s.: I'm not done with the site yet, so there are times in the
        screentour that I tell you to check the glossary for a better
        explanation. But, as you can probably see for yourself, there is no
        glossary. Still haven't gotten around to writing all the terms down with
        examples and pictures and gifs and whatever...]
      </p>
      <h1>About the project</h1>
      <p>
        I created this site as a way for aspiring screenwriters to learn the
        basics and for amateur screenwriters to hone their craft a bit more.
        Obviously, screenwriting is an art form, so it's less about following
        rules and more about telling a good story. That being said, however,
        most films follow some sort of structure and most structures have rules.{" "}
        <br></br>
        <br></br>
        As for why you should listen to me when I haven't yet sold a script? You
        shouldn't. Also, how did you know I haven't sold a script yet -- who
        told you!? Don't blindly listen to everything I say, or any of it even.
        Just use this as a reference point. Keep the things you like and ditch
        the things you don't. It's pretty simple.
        <br></br>
        <br></br>
        Screenwriting is really fun, but most people think it's impossible to
        write a screenplay. But, these days it's actually easier than it's ever
        been. We've all come up with movie ideas in the past that we thought
        were good. Now you can finally sit down and write them.
        <br></br>
        <br></br>
        [also, I think I mention it somewhere in the screentour, but as I,
        myself, mature as a writer, the rules in said screentour will probably
        change to reflect that. As in, I'll come back and change them 1984
        style. Because it's my site. I'm Big Brother.]
        <br></br>
        <br></br>~ Y.E.
      </p>
    </div>
  );
}

export default Home;
