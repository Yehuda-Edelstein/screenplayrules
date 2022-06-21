import React from "react";
import { Routes, Route } from "react-router";
import "./style.index.scss";
import Intro from "./screentour//intro";
import Home from "./home";
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
import Rulebook from "./rulebook";
import Glossary from "./glossary";
import Contact from "./contact";
import Extras from "./screentour//extras";
import LogIn from "./logIn";
import BlogList from "./blog/blogList";
import BlogDetail from "./blog/blogDetail";
import NewBlog from "./blog/newBlog";
import EditBlog from "./blog/editBlog";
import SignUp from "./signUp";
import Language from "./screentour//extras/language";
import PageNotFound from "./404";
import Reading from "./screentour//extras/reading";

function Main(props) {
  return (
    <div className="main">
      <Routes>
        <Route path="/" element={<Home />} />
        {/* USER ROUTES */}
        {/* <Route path='login' element={<LogIn />} /> */}
        {/* <Route path='signup' element={<SignUp />} />  */}
        {/* NAV ROUTES */}
        {/* <Route path="rulebook" element={<Rulebook />} /> */}
        <Route path="glossary" element={<Glossary />} />
        <Route path="contact" element={<Contact />} />
        {/* BLOG ROUTES */}
        {/* <Route path='blog' element={<BlogList />} /> 
                <Route path='blog/:id' element={<BlogDetail />} />
                <Route path='blog/:id/edit' element={<EditBlog />} />
                <Route path='blog/new' element={<NewBlog />} />     */}
        <Route path="screentour/intro" element={<Intro />} />
        {/* SCREENTOUR ROUTES */}
        <Route path="screentour/fadein" element={<FadeIn />} />
        <Route path="screentour/slugs" element={<Slugs />} />
        <Route path="screentour/action" element={<Action />} />
        <Route path="screentour/dialogue" element={<Dialogue />} />
        <Route path="screentour/transitions" element={<Transitions />} />
        <Route path="screentour/fadeout" element={<FadeOut />} />
        {/* SCREENTOUR EXTRA ROUTES */}
        <Route path="screentour/extras" element={<Extras />} />
        <Route path="screentour/textdecoration" element={<TextDec />} />
        <Route path="screentour/slang" element={<Slang />} />
        <Route path="screentour/camerashots" element={<CameraShots />} />
        <Route path="screentour/language" element={<Language />} />
        <Route path="screentour/reading" element={<Reading />} />
        <Route path="screentour/montages" element={<Montages />} />
        <Route path="screentour/flashbacks" element={<Flashbacks />} />
        <Route path="screentour/musiccues" element={<MusicCues />} />
        <Route path="screentour/beats" element={<Beats />} />
        <Route path="screentour/superimpose" element={<Superimpose />} />
        <Route path="screentour/overblack" element={<OverBlack />} />
        <Route path="screentour/outro" element={<Outro />} />
        {/* OTHER */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default Main;
