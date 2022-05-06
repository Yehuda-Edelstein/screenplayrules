import './style.index.css'
import React from 'react';
import { Link } from 'react-router-dom';

function Header(props) {
    return (
        <div>
            {/* maybe have two different paths. Either way at the end have a side by side by side of no rules, rules, then screengrade. Have a screengrade section at the bottom */}
                <Link to='/' style={{ color: 'inherit', textDecoration: 'inherit'}}><div className='title'>SCREENPLAY RULES</div></Link>
            <div className='navBar'>
                <Link to='glossary' style={{ color: 'inherit', textDecoration: 'inherit'}}><div className='headerLink'>GLOSSARY</div></Link>
                <Link to='rulebook' style={{ color: 'inherit', textDecoration: 'inherit'}}><div className='headerLink'>RULEBOOK</div></Link>
                <Link to='faqs' style={{ color: 'inherit', textDecoration: 'inherit'}}><div className='headerLink'>FAQs</div></Link>
                <Link to='about' style={{ color: 'inherit', textDecoration: 'inherit'}}><div className='headerLink'>ABOUT</div></Link>
            </div>
        </div>
    );
}

export default Header;