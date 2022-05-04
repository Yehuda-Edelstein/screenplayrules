import React from 'react';
import './style.index.css'
import withFadeIn from '../../../images/withFadeIn.png'
import withoutBold from '../../../images/withoutBold.png'

function FadeIn(props) {
    return (
        <div className='container'>
            <div className='blogHeader'>FADE IN?</div>
            <div className='blogText'>
                The question mark in the dropdown sort of gives it way, but for
                any Gumps out there let me spell it out for you: <span id='courrier'>FADE IN</span> is unnecessary and totally antiquated. Yeah, it's a staple, so keeping it won't bring down your <a href='about'>screengrade</a>
                    {/* figure out how to go to about and scroll to What is a Screengrade? section */}
                too much, but it's ridiculous. It didn't even make sense when cameras could <span id='italic'>only</span> fade in. Obviously the first line on page 1 is where the script starts, and the last line on <a href='glossary/110'>110</a> is where it ends. Plus, I think <a href='glossary/slugs'>slugs</a> look best as the first words on a page regardless, but more on that in the next section. Either way, I think it's time we let the <span id='courrier'>FADE</span>s become a thing of the past.
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