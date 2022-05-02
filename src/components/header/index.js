import './style.index.css'
import React from 'react';
import { Link } from 'react-router-dom';

function Header(props) {
    return (
        <div>
            <Link to='/' style={{ color: 'inherit', textDecoration: 'inherit'}}><div className='title'>SCREENPLAY RULES</div></Link>  {/* maybe change to Screengrade */} 
            <div className='navBar'>
                <div className='categories' id='dropDown'>OUTLINE
                    <div className='' id='dropDownBox'>
                        <a href="fadein">FADE IN?</a>
                        <a href="slugs">SLUGS</a>
                        <a href="action">ACTION</a>
                        <a href="intros">INTROS</a> {/* instead of characters */}
                        {/* <a href="wrylys">WRYLYS</a> */}
                        {/* <a href="dialogue">DIALOGUE</a> */}
                        <a href="voiceovers">(V.O.) , (O.S.)</a> {/* this goes together with dialogue pretty much */}
                        <a href="transitions">TRANSITIONS</a>
                        <a id='bitsLink' href="textDecoration">BITS</a>
                        <a href="fadeout">FADE OUT?</a>
                    </div>
                </div>
                <div className='style' id='dropDown'>BITS
                {/* need better name for BITS */}
                    <div className='' id='dropDownBox'>
                        <a href="textdecoration">TEXT DEC'</a>
                        {/* <a href="slang">SLANG</a> */}
                        <a href="montages">MONTAGES</a>
                        <a href="flashbacks">FLASHBACKS</a>
                        {/* <a href="superimpose">SUPERIMPOSE</a> */}
                        {/* <a href="reads">READS</a> */}
                        <a href="musiccues">MUSIC CUES</a>
                        {/* <a href="overblack">OVER BLACK</a> */}
                        <a href="beats">BEATS</a>
                        {/* <a href="fourthwall">FOURTH WALL</a> */}
                    </div>
                </div>
                <Link to='contact' style={{ color: 'inherit', textDecoration: 'inherit'}}><div className='contact'>CONTACT</div></Link>
                <Link to='about' style={{ color: 'inherit', textDecoration: 'inherit'}}><div className='about'>ABOUT</div></Link>
                {/* about section: These screenplay rules are a set of aribitrary and completley objective rules for drafting 
                the most asthetically pleasing screenplay. Following these rules will not help your screenplay's plot in any way, but it will improve your screengrade -- 
                a meaningless metric I created it to determine the visual flow of a script. 

                Let me explain...
                
                Sometimes content alone isn't good enough. How many scripts were passed on due to poor grammer? Or confusing descriptions?
                The job of a screenwriter is to deliver the best story, but even if you can do that, if the person
                reading the thing is lost, why in the world is he (or she -- calm down everybody) going to option it? 

                ...add more

                Follow these Screenplay Rules so that your screenplay rules!
                 */}
            </div>
        </div>
    );
}

export default Header;