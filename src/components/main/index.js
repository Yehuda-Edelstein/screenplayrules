import React from "react";
import { Routes, Route } from "react-router";
import "./style.index.scss";
import Screentour from "./screentour";
import Home from "./home";
import FadeIn from "./screentour/components/fadeIn";
import Slugs from "./screentour/components/slugs";
import Action from "./screentour/components/action";
import Transitions from "./screentour/components/transitions";
import FadeOut from "./screentour/components/fadeout";
import TextDec from "./screentour/components/extras/textDec";
import Montages from "./screentour/components/extras/montages";
import Flashbacks from "./screentour/components/extras/flashbacks";
import MusicCues from "./screentour/components/extras/musicCues";
import Beats from "./screentour/components/extras/beats";
import Dialogue from "./screentour/components/dialogue";
import Slang from "./screentour/components/extras/slang";
import CameraShots from "./screentour/components/extras/camerashots";
import Superimpose from "./screentour/components/extras/superimpose";
import OverBlack from "./screentour/components/extras/overBlack";
import Rulebook from "./rulebook";
import Glossary from "./glossary";
import Contact from "./contact";
import Extras from "./screentour/components/extras";
import LogIn from "./logIn";
import BlogList from "./blog/blogList";
import BlogDetail from "./blog/blogDetail";
import NewBlog from "./blog/newBlog";
import EditBlog from "./blog/editBlog";
import SignUp from "./signUp";
import Language from "./screentour/components/extras/language";
import PageNotFound from "./404";

function Main(props) {
  return (
    <div className="main">
      <Routes>
        <Route path="/" element={<Home />} />
        {/* USER ROUTES */}
        {/* <Route path='login' element={<LogIn />} />
                <Route path='signup' element={<SignUp />} /> */}
        {/* NAV ROUTES */}
        {/* <Route path="rulebook" element={<Rulebook />} /> */}
        <Route path="glossary" element={<Glossary />} />
        <Route path="contact" element={<Contact />} />
        {/* BLOG ROUTES */}
        {/* <Route path='blog' element={<BlogList />} /> 
                <Route path='blog/:id' element={<BlogDetail />} />
                <Route path='blog/:id/edit' element={<EditBlog />} />
                <Route path='blog/new' element={<NewBlog />} />     */}
        <Route path="screentour" element={<Screentour />} />
        {/* SCREENTOUR ROUTES */}
        <Route path="screentour/fadein" element={<FadeIn />} />
        <Route path="screentour/slugs" element={<Slugs />} />
        {/* add an establishing bonus here, or in extras section */}
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
        {/* reading */}
        <Route path="screentour/montages" element={<Montages />} />
        <Route path="screentour/flashbacks" element={<Flashbacks />} />
        <Route path="screentour/musiccues" element={<MusicCues />} />
        <Route path="screentour/beats" element={<Beats />} />
        <Route path="screentour/superimpose" element={<Superimpose />} />
        <Route path="screentour/overblack" element={<OverBlack />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default Main;
