import './Header.css'
import React from 'react';
import { Link } from 'react-router-dom';

function Header(props) {
    return (
        <div>
            <Link to='/'><div className='title'>Screenstyle | logo maybe</div></Link> 
            <div className='navBar'>
                <div className='categories' id='dropDown'>Categories
                    <div className='' id='dropDownBox'>
                        <a href="fadein">FADE IN?</a>
                        <a href="slugs">SLUGS</a>
                        <a href="action">ACTION</a>
                        <a href="transitions">TRANSITIONS</a>
                        <a href="fadeout">FADE OUT?</a>
                    </div>
                </div>
                <div className='style' id='dropDown'>Style
                    <div className='' id='dropDownBox'>
                        <a href="textdecoration">TEXT DEC'</a>
                        <a href="montages">MONTAGES</a>
                        <a href="flashbacks">FLASHBACKS</a>
                        <a href="musiccues">MUSIC CUES</a>
                        <a href="voiceovers">(V.O.) , (O.S.)</a>
                        <a href="beats">BEATS</a>
                        <a href="intros">INTROS</a>
                    </div>
                </div>
                <div className='contact'>Contact</div>
                <div className='about'>About</div>
            </div>
        </div>
    );
}

export default Header;