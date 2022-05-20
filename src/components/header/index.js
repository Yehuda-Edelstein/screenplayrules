import './style.index.scss'
import React from 'react';
import { Link } from 'react-router-dom';

function Header(props) {
    return (
        <div className='header'>
            <div className='bigScreenHeader'>
            {/* maybe have two different paths. Either way at the end have a side by side by side of no rules, rules, then screengrade. Have a screengrade section at the bottom */}
                    <Link to='/' style={{ color: 'inherit', textDecoration: 'inherit'}}><div className='title'><span className='screenplayTitle'>SCREENPLAY</span><span className='rules'>RULES</span></div></Link>

                    <div className='navBar'>
                        <Link to='blog' style={{ color: 'inherit', textDecoration: 'inherit'}}><div className='headerLink'>BLOG</div></Link>
                        <Link to='questions' style={{ color: 'inherit', textDecoration: 'inherit'}}><div className='headerLink'>QUESTIONS</div></Link>
                        {/* <Link to='rulebook' style={{ color: 'inherit', textDecoration: 'inherit'}}><div className='headerLink'>RULEBOOK</div></Link> */}
                        <Link to='glossary' style={{ color: 'inherit', textDecoration: 'inherit'}}><div className='headerLink'>GLOSSARY</div></Link>
                        {/* <Link to='slanglist' style={{ color: 'inherit', textDecoration: 'inherit'}}><div className='headerLink'>SLANGLIST</div></Link> */}
                        <Link to='about' style={{ color: 'inherit', textDecoration: 'inherit'}}><div className='headerLink'>ABOUT</div></Link>
                    </div>

                    <div className='userAuth'>
                        <Link to='login' style={{ color: 'inherit', textDecoration: 'inherit'}}><div className='logInLink'>LOG IN</div></Link>
                        <Link to='signup' style={{ color: 'inherit', textDecoration: 'inherit'}}><div className='signUpLink'>SIGN UP</div></Link>
                    </div>
            </div>
            <div className='midScreenHeader'>
                <Link to='/' style={{ color: 'inherit', textDecoration: 'inherit'}}><div className='title'><span className='screenplayTitle'>SCREENPLAY</span>RULES</div></Link>
                <div className='dropDownMenu'>MENU
                    <div className='dropDownBox'>
                        <a href="rulebook">RULEBOOK</a>
                        <a href="glossary">GLOSSARY</a>
                        {/* maybe make these two one section */}
                        <a href="about">ABOUT</a>
                    </div>
                </div>
            </div>
            <div className='smallScreenHeader'>
                <Link to='/' style={{ color: 'inherit', textDecoration: 'inherit'}}><div className='smallScreenplay'><span className='screenplayTitle'>SC</span>RULES</div></Link>
                <div className='dropDownMenu'>MENU
                    <div className='dropDownBox'>
                        <a href="rulebook">RULEBOOK</a>
                        <a href="glossary">GLOSSARY</a>
                        {/* maybe make these two one section */}
                        <a href="about">ABOUT</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;