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
          <Link
            to="screentour/intro"
            style={{ color: "inherit", textDecoration: "inherit" }}
          >
            New to screenwriting? Click here to take the screentour for
            everything you need to know!
          </Link>{" "}
        </span>
      </p>
      <br></br>
      <div>
        [p.s.: I'm not done with the site yet, so there are times in the
        screentour that I tell you to check the glossary for a better
        explanation. But, as you can probably see for yourself, there is no
        glossary. Still haven't gotten around to writing all the terms down with
        examples and pictures and gifs and whatever...]
      </div>
    </div>
  );
}

export default Home;
