import React, {useState, useRef} from 'react';
import { Link } from 'react-router-dom';
import withFadeIn from '../../../../../images/fadeIn/withFadeIn.png'
import withoutFadeIn from '../../../../../images/fadeIn/withoutFadeIn.png'

function FadeIn(props) {
    
    return (
        <div>
            {/* Screentour Header maybe have outline/extras along it */}
        <div className='container'>
            <div className='blogHeader'>FADE IN?</div>
            <div className='blogText'>
                The words "<span id='courrier'>FADE IN</span>" are used to introduce the shift from black screen (before the movie starts) to the first scene we, the audience, will see. Simply put, every line of script that goes beneath them will be acted, spoken, filmed, and produced, up until the last words "<span id='courrier'>FADE OUT</span>" which we'll get to later.
            <br></br>
            <br></br>
                Now, how do I personally feel about starting my scripts this way? The question mark in the title sort of gives it way, but for
                any Gumps out there, let me spell it out for you: 
            <br></br>
            <br></br>
                "<span id='courrier'>FADE IN</span>" is unnecessary and totally antiquated. 
            <br></br>
            <br></br>
                It's a staple of the craft, so keeping it won't bring down your screengrade<sup>1</sup> too much, but it's ridiculous. It didn't even make sense when cameras could <span id='italic'>only</span> fade in -- obviously the first line on page 1 is where the script starts, and the last line on 110<sup>2</sup> is where it ends. 
            <br></br>
            <br></br>
                Plus, I think slugs<sup>3</sup> look best as the first words on a page regardless, but more on that in the next section. Either way, I think it's time we let the "<span id='courrier'>FADEs</span>" become a thing of the past.
            <br></br>
            <br></br>
                Here's a comparison:
            <br></br>
            <br></br>
                <div className='pictureContainer'>
                    <img className='picture' src={withFadeIn} alt='with fade in' />
                    <img className='picture' src={withoutFadeIn} alt='without fade in' />
                </div>
            <br></br>
                It doesn't seem like much, but I think it helps give the script
                a cleaner start. Trim the fat, you know?
            <br></br>
            </div>
            <div className='blogFooter'>
                <a href="slugs" id='courrier'>NEXT</a>
            </div> 
            <div className='localGlossary'>
                <div className='localGlossaryHeader'>LOCAL GLOSS'</div>
                <ol className='localGlossaryList'>
                    <li><span id='bold'>Screengrade</span></li>
                    <div className='definition'>A non plot-related and completely arbitrary metric for grading a screenplay, based purely on its visual aesthetic. <span id='italic'>See: about section for further explanation.</span></div>
                    <li><span id='bold'>110</span></li>
                    <div className='definition'>Represents either the last page of a screenplay, or a  completed screenplay that's ready to go. <span id='italic'>Ex: "I just wanna' get this spec to 110 and sell it, bro"</span></div>
                    <li><span id='bold'>Slugs</span></li>
                    <div className='definition'>Or sluglines. An industry nickname for scene headings.</div>
                </ol>
                <div className='localGlossaryFooter'><span>**full definitions found in glossary above**</span></div>
            </div>
        </div>
    </div>
    );
}

export default FadeIn;