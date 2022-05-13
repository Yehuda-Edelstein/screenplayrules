import React from 'react';
import { Routes, Route } from 'react-router';
import './style.index.css'
import Screentour from './screentour';
import Home from './home';
import FadeIn from './screentour/components/fadeIn';
import Slugs from './screentour/components/slugs';
import Action from './screentour/components/action';
import Transitions from './screentour/components/transitions';
import FadeOut from './screentour/components/fadeout';
import TextDec from './screentour/components/extras/textDec';
import Montages from './screentour/components/extras/montages';
import Flashbacks from './screentour/components/extras/flashbacks';
import MusicCues from './screentour/components/extras/musicCues';
import Beats from './screentour/components/extras/beats';
import Dialogue from './screentour/components/dialogue';
import Slang from './screentour/components/extras/slang'
import Superimpose from './screentour/components/extras/superimpose'
import OverBlack from './screentour/components/extras/overBlack'


function Main(props) {
    return (
        <div className='main'> 
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='screentour' element={<Screentour />} />
                    {/* SCREENTOUR ROUTES */}
                    <Route path='screentour/fadein' element={<FadeIn />} />
                    <Route path='screentour/slugs' element={<Slugs />} />
                    {/* add an establishing bonus here, or in extras section */}
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
                        <Route path='screentour/slang' element={<Slang />} />
                        <Route path='screentour/superimpose' element={<Superimpose />} />
                        <Route path='screentour/overblack' element={<OverBlack />} />
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