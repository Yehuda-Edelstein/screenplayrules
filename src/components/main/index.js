import React from 'react';
import { Routes, Route } from 'react-router-dom';
import FadeIn from './fadeIn/';
import Slugs from './slugs/'
import Action from './action';
import Transitions from './transitions';
import FadeOut from './fadeout';
import TextDec from './textDec';
import Montages from './montages';
import Flashbacks from './flashbacks';
import MusicCues from './musicCues';
import VoiceOvers from './voiceOvers';
import Beats from './beats'
import Intros from './intros';

function Main(props) {
    return (
        <div> 
            <Routes>
                <Route path='/' element={<div>default component goes here</div>} />
                <Route path='fadein' element={<FadeIn />} />
                <Route path='slugs' element={<Slugs />} />
                <Route path='action' element={<Action />} />
                <Route path='transitions' element={<Transitions />} />
                <Route path='fadeout' element={<FadeOut />} />
                <Route path='textdecoration' element={<TextDec />} />
                <Route path='montages' element={<Montages />} />
                <Route path='flashbacks' element={<Flashbacks />} />
                <Route path='musiccues' element={<MusicCues />} />
                <Route path='voiceovers' element={<VoiceOvers />} />
                <Route path='beats' element={<Beats />} />
                <Route path='intros' element={<Intros />} /> 
                {/* <Route path='wrylys' element={<Wrylys />} />*/}
                {/* <Route path='dialogue' element={<Dialogue />} />*/}
                {/* <Route path='slang' element={<Slang />} />*/}
                {/* <Route path='superimpose' element={<Superimpose />} />*/}
                {/* <Route path='overblack' element={<Overblack />} />*/}
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