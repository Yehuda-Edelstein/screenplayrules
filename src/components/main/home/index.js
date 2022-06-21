import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./style.index.scss";

function Home(props) {
  useEffect(() => {
    document.title = "Screenplay Rules - Get Good, Get Optioned, Get Rich";
  }, []);
  return (
    <div className="homeContainer" id="first">
      Home component
      <br></br>
      <br></br>
      Have blogs, terms, and random stuff on page like reddit.
      <div className="homeContainer" id="second">
        <br></br>
        <br></br>
        <div>
          New to screenwriting? Take the{" "}
          <Link
            to="screentour"
            style={{ color: "inherit", textDecoration: "inherit" }}
          >
            <span className="mainLink">SCREENTOUR</span>
          </Link>{" "}
          for everything you need to know!
        </div>
      </div>
    </div>
  );
}

export default Home;
