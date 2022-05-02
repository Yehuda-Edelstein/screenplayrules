import React from 'react';
import './style.index.css'
import withFadeIn from '../../../images/withFadeIn.png'
import withoutBold from '../../../images/withoutBold.png'

function FadeIn(props) {
    return (
        <div className='container'>
            <div className='blogText'>
                The question mark in the dropdown sort of gives it way, but for
                any Gumps out there let me spell it out for you: FADE IN is unnecessary.
                Keeping it won't bring down your screengrade too much though, as it is still rather
                common practice to see those words atop the first page, but I think it's time we let the FADEs become a thing of the past -- more on FADE OUT
                later.
            <br></br>
                Here's a comparison:
            <br></br>
                <img className='picture' src={withFadeIn} alt='with fade in' width={'250px'}/>
                <img className='picture' src={withoutBold} alt='without fade in' width={'250px'}/>
            <br></br>
                It doesn't seem like much, but I think it helps give the script
                a cleaner start. Trim the fat, you know?
            <br></br>
            </div>
            <div className='blogFooter'>
                <a href="slugs" id='courrier'>NEXT</a>
            </div> 
        </div>
    );
}

export default FadeIn;