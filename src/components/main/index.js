import React from "react";
import { Routes, Route } from "react-router";
import "./style.index.scss";
import Intro from "./screentour//intro";
// import Home from "./home";
import FadeIn from "./screentour//fadeIn";
import Slugs from "./screentour//slugs";
import Action from "./screentour//action";
import Transitions from "./screentour//transitions";
import FadeOut from "./screentour//fadeout";
import TextDec from "./screentour//extras/textDec";
import Montages from "./screentour//extras/montages";
import Flashbacks from "./screentour//extras/flashbacks";
import MusicCues from "./screentour//extras/musicCues";
import Beats from "./screentour//extras/beats";
import Dialogue from "./screentour//dialogue";
import Slang from "./screentour//extras/slang";
import CameraShots from "./screentour//extras/camerashots";
import Superimpose from "./screentour//extras/superimpose";
import OverBlack from "./screentour//extras/overBlack";
import Outro from "./screentour//extras/outro";
import Extras from "./screentour//extras";
import Language from "./screentour//extras/language";
import PageNotFound from "./404";
import Reading from "./screentour//extras/reading";
import About from "./about";
import Resources from "./resources";
import Glossary from "./glossary";

function Main(props) {
  return (
    <div className="main">
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/" element={<Intro />} />
        {/* SCREENTOUR ROUTES */}
        <Route path="fadein" element={<FadeIn />} />
        <Route path="slugs" element={<Slugs />} />
        <Route path="action" element={<Action />} />
        <Route path="dialogue" element={<Dialogue />} />
        <Route path="transitions" element={<Transitions />} />
        <Route path="fadeout" element={<FadeOut />} />
        {/* SCREENTOUR EXTRA ROUTES */}
        <Route path="extras" element={<Extras />} />
        <Route path="textdecoration" element={<TextDec />} />
        <Route path="slang" element={<Slang />} />
        <Route path="camerashots" element={<CameraShots />} />
        <Route path="language" element={<Language />} />
        <Route path="reading" element={<Reading />} />
        <Route path="montages" element={<Montages />} />
        <Route path="flashbacks" element={<Flashbacks />} />
        <Route path="musiccues" element={<MusicCues />} />
        <Route path="beats" element={<Beats />} />
        <Route path="superimpose" element={<Superimpose />} />
        <Route path="overblack" element={<OverBlack />} />
        <Route path="outro" element={<Outro />} />
        {/* GLOSSARY */}
        <Route path="glossary" element={<Glossary />} />
        {/* OTHER */}
        <Route path="*" element={<PageNotFound />} />
        <Route path="about" element={<About />} />
        <Route path="resources" element={<Resources />} />
      </Routes>
    </div>
  );
}

export default Main;
