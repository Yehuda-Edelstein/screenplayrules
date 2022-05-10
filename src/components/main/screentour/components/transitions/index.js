import React, {useState} from 'react';
import cutToExample from '../../../../../images/transitions/cutToExample.png'
import dissolveToExample from '../../../../../images/transitions/dissolveToExample.png'
import quickCutToExample from '../../../../../images/transitions/quickCutToExample.png'
import regularSlugs from '../../../../../images/transitions/regularSlugs.png'
import intercutSlugs from '../../../../../images/transitions/intercutSlugs.png'
import screengradeIntercutSlugs from '../../../../../images/transitions/screengradeIntercutSlugs.png'


function Transitions(props) {
    const [handleShow, setHandleShow] = useState(false)

    function show() {
        setHandleShow(true)
    }

    function close() {
        setHandleShow(false)
    }

    return (
        <div className='container'>
            <div className='blogHeader'>TRANSITIONS</div>
            <div className='blogText'>
                Wow. That was a lot to take in. Trust me, it gets easier. At least this part does. Understanding the rules of it all. Just wait. Once you know how to write a screenplay, then you'll actually have to write one. And that's the hard part.
            <br></br>
            <br></br>
                But, congrats! You've made it through your first basic scene -- every other scene you write after this will just be a variation made up from the previous sections (along with some extras that we'll be getting to shortly, if you've got the stomach for it).
            <br></br>
            <br></br>
                The only thing holding us back from jumping between scenes, getting to 110, and writing (or maybe not writing) that satisfying <span id='courrier'>FADE OUT</span> at the end are the transitions: How do we get from scene A to scene B?
            <br></br>
            <br></br>
                In days of old, we'd simply <span id='courrier'>CUT TO</span> the next scene, however, it isn't done anymore. The reason being, similar to <span id='courrier'>FADE IN</span> and <span id='courrier'>FADE OUT</span>, it's pointless:
            <br></br>
            <br></br>
                <div className='pictureContainer'>
                    <img className='picture' src={cutToExample}  alt='cut to example' width={'250px'}/>
                </div>
            <br></br>
                <span id='courrier'>CUT TO</span> is the default, so it's unnecessary -- it's accepted that when a new slugline appears, we will be cutting to that scene. I mean, how else are we supposed to get there? 
            <br></br>
            <br></br>
                And, yes, it's true that there are many different transitions, but what they all have in common is that they're generally superfluous. 
            <br></br>
            <br></br>
                Furthermore, the type of transition which ends up in the film (assuming it isn't plot-related) is usually not for the screenwriter to decide anyway. So, why write it?
            <br></br>
            <br></br>
                Now, if you really feel the scene needs some kind of a distinct transition, here's a list of acceptable ones to choose from:
                <div>
                    <ul>
                        <li><span id='courrier'>QUICK CUT TO:</span></li>
                        <li><span id='courrier'>DISSOLVE TO:</span></li>
                        <li><span id='courrier'>INTERCUT:</span></li>
                    </ul>
                </div>
                The first two listed are self explanatory, so I won't dive into so much of an explanation. "<span id='courrier'>INTERCUT</span>" is a bit more tricky and will have its own subsection below
            <br></br>
            <br></br>                
                Note: I've also seen "<span id='courrier'>QUICK CUT TO</span>" be "<span id='courrier'>JUMP CUT TO</span>" -- either is fine, just pick one and stick to it: 
            <br></br>
            <br></br>
                <div className='pictureContainer'>
                    <img className='picture' src={dissolveToExample}  alt='dissolve to example' width={'250px'}/>
                    <div className='pictureLabel'><span id='courrier'>VS.</span></div>
                    <img className='picture' src={quickCutToExample}  alt='quick cut to example' width={'250px'}/>
                </div>
            <br></br>
                The notable difference between the two, as I used them, is time:
            <br></br>
            <br></br>
                "<span id='courrier'>DISSOLVE TO</span>" here is implying a longer break between the two scenes, than "<span id='courrier'>QUICK CUT TO</span>" is. The reason being, "<span id='courrier'>QUICK CUT TO</span>" is used to add a comedic element, in how fast "<span id='courrier'>Character</span>" fell asleep -- notice "<span id='courrier'>LATER</span>" vs. "<span id='courrier'>MOMENTS LATER</span>" in the sluglines.
            <br></br>
            <br></br>
                This being said, it's up to you as the screenwriter to decide how you want to use these transitions. <span id='courrier'>DISSOLVE TO</span> has been used comedically just as <span id='courrier'>QUICK CUT TO</span> has been used dramatically. The important thing too remember is, like wrylys, to many transitions is a rookie mistake. 
            <br></br>
            <br></br>
                <div className='blogSubHeader'>INTERCUT</div>
                An <span id='courrier'>INTERCUT</span> is used when jumping between multiple scenes continuously -- instead of writing a regular slugline, we write an intercut slugline<sup>1</sup>. 
            <br></br>
            <br></br>
                The reason for doing this is purely aesthetic, as too many sluglines can distract from the scene itself:
            <br></br>
            <br></br>
                <div className='pictureContainer'>
                    <br></br>
                    <div className='pictureLabel'>REGULAR SLUGS</div>
                    <img className='picture' src={regularSlugs}  alt='regular slugs' width={'250px'}/>
                    <br></br>
                    <div className='pictureLabel'>INTERCUT SLUGS</div>
                    <img className='picture' src={intercutSlugs}  alt='intercut slugs' width={'250px'}/>
                </div>
            <br></br>
                The rule of thumb for intercut slugs, is once both locations have been established one after the other with their own slug, you can then use intercut slugs to switch between them. 
            <br></br>
            <br></br>
                Note: only use intercut slugs when the scene is continuous. If time has passed, it's a  totally new scene and will require a new slug.
            <br></br>
            <br></br>   
                {!handleShow
                        ? <div className='screengradeHeader' onClick={show}>CLICK HERE FOR SCREENGRADE VERSION</div>
                        : <div className='closeButton' onClick={close}>CLOSE</div>    
                        } 
                    {handleShow &&
                        <div className='screengradeBlogText'>
                            <div className='screengradePictureContainer'>
                                <img className='picture' src={screengradeIntercutSlugs}  alt='screengrade version of intercut slugs' width={'250px'}  />
                            </div>
                            Some simple corrections will do the trick. I think you can handle it.
                        </div>
                    }
            </div>
            <div className='blogFooter'>
                <a href="fadeout" id='courrier'>NEXT</a>
                <a href="dialogue" id='courrier'>BACK</a>
            </div>
            <div className='localGlossary'>
                <div className='localGlossaryHeader'>LOCAL GLOSS'</div>
                <ol className='localGlossaryList'>
                    <li><span id='bold'>Intercut Slugline</span></li>
                    <div className='definition'>A shortened slugline used to establish cuts between two continuous scenes.</div>
                </ol> 
            </div>
        </div>
    );
}

export default Transitions;