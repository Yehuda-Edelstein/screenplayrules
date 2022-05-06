import React from 'react';
import './style.index.css'

function ScreentourNavBar(props) {
    return (
        <div>
            <div className='screentourNavBar'>
                <div className='categories' id='dropDown'>OUTLINE
                    <div className='' id='dropDownBox'>
                        <a href="fadein">FADE IN?</a>
                        <a href="slugs">SLUGS</a>
                        <a href="action">ACTION</a>
                        <a href="dialogue">DIALOGUE</a>
                        <a href="transitions">TRANSITIONS</a>
                        <a id='extrasLink' href="textDecoration">EXTRAS</a>
                        <a href="fadeout">FADE OUT?</a>
                    </div>
                </div>
                <div className='style' id='dropDown'>EXTRAS
                {/* need better name for EXTRAS */}
                    <div className='' id='dropDownBox'>
                        {/* <a href="slang">SLANG</a> */}
                        <a href="textdecoration">TEXT DEC'</a> 
                        {/* <a href="suprise">SUPRISE!'</a>  */}
                        <a href="montages">MONTAGES</a>
                        <a href="flashbacks">FLASHBACKS</a>
                        {/* <a href="superimpose">SUPERIMPOSE</a> */}
                        {/* <a href="camerashots">CAMERA SHOTS</a> */} {/* ANGLE ON, CLOSE ON, INTERCUTS, ZOOM  */}
                        {/* <a href="reads">READS</a> */}
                        <a href="musiccues">MUSIC CUES</a>
                        {/* <a href="overblack">OVER BLACK</a> */}
                        <a href="beats">BEATS</a>
                        {/* <a href="fourthwall">FOURTH WALL</a> */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ScreentourNavBar;