import './style.index.css'
import React from 'react';
import { Link } from 'react-router-dom';

function Header(props) {
    return (
        <div>
            {/* maybe have two different paths. Either way at the end have a side by side by side of no rules, rules, then screengrade. Have a screengrade section at the bottom */}
            <Link to='/' style={{ color: 'inherit', textDecoration: 'inherit'}}><div className='title'>SCREENPLAY RULES</div></Link>
            <div className='navBar'>
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
                <Link to='contact' style={{ color: 'inherit', textDecoration: 'inherit'}}><div className='contact'>CONTACT</div></Link>
                <Link to='about' style={{ color: 'inherit', textDecoration: 'inherit'}}><div className='about'>ABOUT</div></Link>
                {/* 
                    about section: These screenplay rules are a set of aribitrary and completley objective rules for drafting 
                    the most asthetically pleasing screenplay. Following these rules will not help your screenplay's plot in any way, but it will improve your screengrade -- 
                    a meaningless metric I created it to determine the visual flow of a script. 

                    Let me explain...
                    
                    Sometimes content alone isn't good enough. How many scripts were passed on due to poor grammer? Or confusing descriptions?
                    The job of a screenwriter is to deliver the best story, but even if you can do that, if the person
                    reading the thing is lost, why in the world is he (or she -- calm down everybody) going to option it? 

                    ...add more
                    
                    ...add a glossery section with terms like screengrade, screengrading, screenblock or block, wrylys, charys or character parethisis, script time, script name vs character name, white lines, parallel/stacked caps, etc. 

                    ...add a rulebook (maybe these two add ons be where default component is)

                    ... add a types section with different types of ways to write blocks

                    ... "if you don't understand something hover over it and it may just take you to where you want to go."

                    Follow these screenplay rules so that your screenplay rules!
                 */}
                 
                 {/* 
                    default component summary:

                    coming soon -- screengrader
                    start your screengrade tour here - href to first component
                 */}
            </div>
        </div>
    );
}

export default Header;