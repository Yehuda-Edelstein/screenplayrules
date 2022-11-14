import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./style.index.scss";

function Home(props) {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    document.title = "Screenplay Rules - Get Good, Get Optioned, Get Rich";
  }, []);
  return (
    <div className="homeContainer">
      {/* ADD A TV PLAYING DIFFERENT GIFS FROM THE SCREENTOUR OR JUST OTHER GOOD MOVIES. TO FILL SPACE */}
      <h1>How To Write A Screenplay</h1>
      <div>
        New to screenwriting? Take the{" "}
        <Link
          to="screentour/intro"
          style={{ color: "inherit", textDecoration: "inherit" }}
        >
          <span className="mainLink">SCREENTOUR</span>
        </Link>{" "}
        for everything you need to know!
      </div>
      <br></br>
      <br></br>
      <div>something else here</div>
    </div>
  );
}

export default Home;
