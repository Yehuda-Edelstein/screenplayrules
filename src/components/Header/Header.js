import './Header.css'
import React from 'react';

function Header(props) {
    return (
        <div>
            <div>Screenstyle</div>
            <div className='navBar'>
                <div className='categories' id='dropDown'>Categories
                    <div className='' id='dropDownBox'>
                        <a href="#">FADE IN?</a>
                        <a href="#">SLUGS</a>
                        <a href="#">ACTION</a>
                        <a href="#">TRANSITIONS</a>
                        <a href="#">FADE OUT?</a>
                    </div>
                </div>
                
            </div>
        </div>
    );
}

export default Header;