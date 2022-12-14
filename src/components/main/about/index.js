import React, { useEffect } from "react";

function About(props) {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    document.title = "Screenplay Rules - About";
  }, []);

  return (
    <div className="homeContainer">
      <h1>About the project</h1>
      <p>
        I created this site as a way for aspiring screenwriters to learn the
        basics and for amateur screenwriters to hone their craft a bit more. My
        name isn't important, although if you got here from my resume, please
        give me the job, thanks.
        <br></br>
        <br></br>
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

export default About;
