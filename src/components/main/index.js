import React from 'react';
import { Routes, Route } from 'react-router';
import './style.index.css'
import Screentour from './screentour';
import ScreentourNavBar from './screentour/navbar';
import Home from './home';
import FadeIn from './screentour/components/fadeIn';
import Slugs from './screentour/components/slugs';
import Action from './screentour/components/action';
import Transitions from './screentour/components/transitions';
import FadeOut from './screentour/components/fadeIn';
import TextDec from './screentour/components/textDec';
import Montages from './screentour/components/montages';
import Flashbacks from './screentour/components/flashbacks';
import MusicCues from './screentour/components/musicCues';
import Beats from './screentour/components/beats';
import Dialogue from './screentour/components/dialogue';

function Main(props) {
    return (
        <div> 
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='screentour' element={<Screentour />} />
                {/* <Route path='screentour/:id' element={<ScreentourNavBar />} /> */}
                    {/* SCREENTOUR ROUTES */}
                    <Route path='screentour/fadein' element={<FadeIn />} />
                    <Route path='screentour/slugs' element={<Slugs />} />
                    <Route path='screentour/action' element={<Action />} />
                    <Route path='screentour/transitions' element={<Transitions />} />
                    <Route path='screentour/fadeout' element={<FadeOut />} />
                        {/* SCREENTOUR EXTRA ROUTES */}
                        <Route path='screentour/textdecoration' element={<TextDec />} />
                        <Route path='screentour/montages' element={<Montages />} />
                        <Route path='screentour/flashbacks' element={<Flashbacks />} />
                        <Route path='screentour/musiccues' element={<MusicCues />} />
                        <Route path='screentour/beats' element={<Beats />} />
                        <Route path='screentour/dialogue' element={<Dialogue />} />
                        {/* <Route path='screentour/slang' element={<Slang />} />*/}
                        {/* <Route path='screentour/superimpose' element={<Superimpose />} />*/}
                        {/* <Route path='screentour/overblack' element={<Overblack />} />*/}
                <Route
                path="*"
                element={
                <div>
                    404 component here
                </div>
                }/>
            </Routes>
                
        </div>
    );
}

export default Main;