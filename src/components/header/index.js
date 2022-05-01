import './style.index.css'
import React from 'react';
import { Link } from 'react-router-dom';

function Header(props) {
    return (
        <div>
            <Link to='/' style={{ color: 'inherit', textDecoration: 'inherit'}}><div className='title'>SCREENSTYLE</div></Link> 
            <div className='navBar'>
                <div className='categories' id='dropDown'>CATEGORIES
                {/* need better name for CATEGORIES */}
                    <div className='' id='dropDownBox'>
                        <a href="fadein">FADE IN?</a>
                        <a href="slugs">SLUGS</a>
                        <a href="action">ACTION</a>
                        <a href="transitions">TRANSITIONS</a>
                        <a href="fadeout">FADE OUT?</a>
                    </div>
                </div>
                <div className='style' id='dropDown'>STYLE
                {/* need better name for STYLE */}
                    <div className='' id='dropDownBox'>
                        <a href="textdecoration">TEXT DEC'</a>
                        <a href="montages">MONTAGES</a>
                        <a href="flashbacks">FLASHBACKS</a>
                        <a href="musiccues">MUSIC CUES</a>
                        <a href="voiceovers">(V.O.) , (O.S.)</a>
                        <a href="beats">BEATS</a>
                        <a href="intros">INTROS</a>
                        {/* add more
                        1. slang
                        2. superimpose
                        3. over black
                         */}
                    </div>
                </div>
                <Link to='contact' style={{ color: 'inherit', textDecoration: 'inherit'}}><div className='contact'>CONTACT</div></Link>
                <Link to='about' style={{ color: 'inherit', textDecoration: 'inherit'}}><div className='about'>ABOUT</div></Link>
                {/* about section: Screenstyle is a set of aribitrary and completley objective rules for drafting 
                the most asthetically pleasing screenplay. Screenstyle will not help improve your story -- although
                I may give advice on tropes I think are overdone, but the idea is along a different vien: 
                
                Sometimes content alone isn't good enough. How many scripts were passed on due to poor grammer? 
                The job of a screenwriter is to deliver the best story, but even if you can do that, if the person
                reading the thing is lost, why is he (or she -- calm down everybody) going to option it? 

                ...add more
                 */}
            </div>
        </div>
    );
}

export default Header;