import React from 'react';
import './style.index.css'
import pic1 from '../../../images/Screen Shot 2022-04-29 at 12.16.15 PM.png'
import pic2 from '../../../images/Screen Shot 2022-04-29 at 12.16.25 PM.png'

function FadeIn(props) {
    return (
        <div className='container'>
            <div className='blogText'>
                The question mark in the dropdown sort of gives it way, but for
                any Gumps out there let me spell it out for you: FADE IN is unnecessary.
                I wouldn't call it <span id='italics'>bad</span> screenstyle, as it is still rather
                common practice to see those words atop the first page, but I think it's time we let the FADEs become a thing of the past -- more on FADE OUT
                later.
            <br></br>
                Here's a comparison:
            <br></br>
                <img className='picture' src={pic1} alt='' width={'250px'}/>
                <img className='picture' src={pic2} alt='' width={'250px'}></img>
            <br></br>
                It doesn't seem like much, but I think it helps give the script
                a cleaner start. Trim the fat, you know?
            <br></br>
            </div>
            <div>
                <a href="slugs">SLUGS</a>
            </div> 
        </div>
    );
}

export default FadeIn;