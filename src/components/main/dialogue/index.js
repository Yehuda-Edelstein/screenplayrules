import React, { useState } from 'react';
import continuedSamePage from '../../../images/dialogue/continuedSamePage.png'
import continuedNewPage from '../../../images/dialogue/continuedNewPage.png'
import prelapExample from '../../../images/dialogue/prelapExample.png'
import offscreenExample from '../../../images/dialogue/offscreenExample.png'
// import beforeWrylys from '../../../images/dialogue/beforeWrylys.png'
import voiceoverContinued from '../../../images/dialogue/voiceoverContinued.png'
import withDialogueAndHighlights from '../../../images/dialogue/withDialogueAndHighlights.png'
import screegradeWithDialogueAndHighlights from '../../../images/dialogue/screengradeWithDialogueAndHighlights.png'


function Dialogue(props) {
    const [handleShow, setHandleShow] = useState(false)
    const [handleShowSecond, setHandleShowSecond] = useState(false)

    
    function show() {
        setHandleShow(true)
    }

    function showSecond() {
        setHandleShowSecond(true)
    }

    function close() {
        setHandleShow(false)
    }

    function closeSecond() {
        setHandleShowSecond(false)
    }

    return (
        <div className='container'>
            <div className='blogHeader'>DIALOGUE</div>
            <div className='blogText'>
                So, you've got your where, when, what, and who. But, what's your who saying? Now, eventhough there aren't any screenplay rules specific to <span id='italic'>actual</span> dialogue (since any dialogue written should follow the rules I described earlier in the action section) there <span id='italic'>are</span> screenplay rules regarding dialogue as a screenwriting block in general.
            <br></br>
            <br></br>
                <div className='blogSubHeader'>CHARYS</div>
                We'll start with character parenthetisis or <a href='glossary/charys'>charys</a> (pronounced 'carries'). These are the parenthetisis that go beside the <span id='courrier'>CHARACTER</span> name, right above the dialogue. The most common chary is <span id='courrier'>(CONT'D)</span> and implies that a character's dialogue continues, either to the next page, or through a description:
            <br></br>
                1. <img className='picture' src={continuedSamePage}  alt='with age' width={'250px'}/>
            <br></br>
                2. <img className='picture' src={continuedNewPage}  alt='with age' width={'250px'}/>
            <br></br>
                As far as other charys go, here's a list of acceptable ones to use:
                <ul>
                    <li><span id='courrier'>(V.O.)</span> = Voice Over</li> 
                    <li><span id='courrier'>(O.S.)</span> = Off Screen</li>
                    <li><span id='courrier'>(PRE-LAP)</span> = Dialogue that starts before we cut to that scene</li> {/* maybe reword this definition */}
                </ul>
                <div className='blogSubHeader' id='smaller'>(O.S.) vs (PRE-LAP)</div>

                    The difference between <span id='courrier'>(O.S.)</span> and <span id='courrier'>(PRE-LAP)</span> is their <a href='glossary/scripttime'>script time</a>. When someone speaks off screen, it's still happening in <a href='glossary/scripttime'>script present time</a>, whereas <span id='courrier'>(PRE-LAP)</span> refers to dialogue in <a href='glossary/scripttime'>script future time</a> that <span id='italic'>looks</span> as if it starts in script presnt time. Here's an example of that:
                <br></br>
                    <img className='picture' src={prelapExample}  alt='with age' width={'250px'}/>
                <br></br>
                    If you're confused, let me break it down: The first line of dialogue happens for the audience during the first scene, but for the character happens in the second. Right? <span id='courrier'>CHARACTER</span> isn't saying "<span id='courrier'>Man, it's eerie here</span>" during the daytime scene. It only seems like that to the viewer, but he (or she, relax it's an amorphous, genderless entity) is actually saying this during the nighttime scene, and will be filmed as such. A reason you would use <span id='courrier'>(PRE-LAP)</span> in a script is to let the reader know we'll be jumping forward in time. Note: If you're new to screenwriting stick to the basics. Trying to fit a <span id='courrier'>(PRE-LAP)</span> where it doesn't belong looks bad, and is an amatuar move. And amatuars don't get <a href='glossary/options'>optioned</a>. So don't do it. Trust me, there's nothing I want more than for you to option the heck out of your spec.
                <br></br>
                    On the other side of the spectrum, <span id='courrier'>(O.S.)</span> has a continuous script time: 
                <br></br>
                    <img className='picture' src={offscreenExample}  alt='with age' width={'250px'}/>
                <br></br>
                    Starting to get it? Notice, both cases require <span id='courrier'>(CONT'D)</span> on the second block of dialogue because both blocks will be filmed together. Also, as I alluded to previously, these cases, along with <span id='courrier'>(V.O.)</span>, are the only acceptable times to have an unintroduced character give dialogue -- when they are not in the shot, in any capacity, but will be, either momentarily, or at some point in the script. The exception to <span id='italic'>this</span> exception is with a <span id=''>NARRATOR</span> who remains off screen the entire film. Although, you'd need to use <span id='courrier'>(V.O.)</span> in that case. Always. The reason for which you'll understand shortly. Hopefully. Anyways. Moving right along...
                <br></br>
                <br></br>
                    You may be asking yourself: <span id='italic'>"What's the difference between (v.o.) and (o.s.)?"</span> First off, charys are always in <span id='courrier'>ALL CAPS</span>. Second, I'm getting to that, hotshot.
                <br></br>
                <br></br>
                <div className='blogSubHeader' id='smaller'>(O.S.) vs (V.O.)</div>
                    The difference between these two charys is simple: If the character's voice is recorded from a scene taken by the camera (presumably with some type of boom mic) then it's <span id='courrier'>(O.S.)</span>. Any dialogue recorded in a studio, then added in, is <span id='courrier'>(V.O.)</span>. Think of a narrator in a movie. Tyler-Durden-slash-Edward-Norton didn't sit in a chair on set and record all his narration on camera for a scene that would never be in the movie. He obviosuly recorded it in an air-conditioned studio. As for movies like Forrest Gump, where part of the narration is on camera but then switches to a voiceover, I'm not sure how it was written, but you can see for yourself if they have the script on <a href='https://www.scriptslug.com'>Scriptslug</a>. Either way, it doesn't matter. The screenplay rule over here is simple: If the dialogue is recorded after or before filming, it's <span id='courrier'>(V.O.)</span>. Otherwise, it's <span id='courrier'>(O.S.)</span>, baby.
                <br></br>
                <br></br>
                    Here's an example of <span id='courrier'>(V.O.) with a twist</span>:
                <br></br>
                    <img className='picture' src={voiceoverContinued}  alt='with age' width={'250px'}/>
                <br></br>
                    The twist here is in the shape of a rule, and the rule is that <span id='courrier'>(CONT'D)</span> needs to be present no matter if another chary preceeds it. Whether it's <span id='courrier'>(V.O.)</span> or <span id='courrier'>(O.S.)</span>, if it's continuous dialogue (recorded or filmed in one take) it needs a <span id='courrier'>(CONT'D)</span> after it.
                <br></br>
                <br></br>
                    Note: I'm not sure how a <span id='courrier'>(PRE-LAP)</span> could ever be continuous dialogue from a previous block, but if you figure out a way that it can, you'll need to slap a <span id='courrier'>(CONT'D)</span> after it as well. 
                <br></br>
                <br></br>
                    Note #2: I've seen one other chary used for dialogue spoken off camera rightly dubbed <span id='courrier'>(O.C.)</span>, but don't ever use it. It's the same as <span id='courrier'>(O.S.)</span> which is more common, so just stick with that. Don't be that guy, you know? Or girl. Or amorphous, genderless entity. Anyways...
                <br></br>
                <br></br>
                    Back to our guy, <span id='courrier'>Brady</span>. He's doing okay. But, he seems lonely. Let's give him a love interest and get the ball rolling:
                <br></br>    
                <br></br>
                    <img className='picture' src={withDialogueAndHighlights}  alt='with age' width={'250px'}/>
                <br></br>
                <br></br>
                        1. The <span id='courrier'><span id='yellow'>(O.S.)</span></span> is highlighted because even if the props are off screen, they still need to be written as such. Notice to how <span id='courrier'>DOOR</span> is written in <span id='courrier'>ALL CAPS</span> even though it's introduction is off screen as well.
                <br></br>
                        2. <span id='courrier'><span id='yellow'>"JULES"</span></span> is a nickname for the character, but it's also her script name. And only a script name needs to be in <span id='courrier'>ALL CAPS</span>. Think of <span id='courrier'>Randall "PINK" Floyd</span> from <a href='https://en.wikipedia.org/wiki/Dazed_and_Confused_(film)'>Dazed and Confused</a>. The only difference with a nickname is that you should put <span id='courrier'>""</span> around it as we did with our lovely <span id='courrier'>"JULES"</span>.
                <br></br>
                    <div className='screengradeHeader' onClick={show}>CLICK HERE FOR SCREENGRADE VERSION</div>
                    {handleShow &&
                        <div className='screengradeBlogText'>
                            <div id='blogTextFirstLine'> 
                                <div className='closeButton' id='courrier' onClick={close}>CLOSE</div>
                            </div>
                        <br></br>
                            <img className='picture' src={screegradeWithDialogueAndHighlights}  alt='with age' width={'250px'}  />
                        <br></br>
                            3. Everytime you see a <span id='courrier'><span id='yellow'>--</span></span> in a script it's implying a <a href='glossary/cutoff'>cutoff</a> and could be found in both description and dialogue. It could be used for a jumpscare or to break a silence with intention (more on this in <a href='suprise'>suprise</a> section -- literally, not like the section is a suprise). Here I would include it because <span id='courrier'>Jules</span> is going to be the love interest and the reader should know that her introduction will likely be an important shot.
                        <br></br>
                            4. *ADD 4.*
                        <br></br>
                            5. Using a <span id='courrier'><span id='yellow'>:</span></span> (i.e., a colon) is a way to show the dialogue that proceeds a description is directly relevant to the action before it. In our case, Jules throws open the back door then instantly calls Brady a loser. Using a colon is like including the action in the dialogue itself (we will see exactly this in a moment).
                        </div>
                    }
                    <br></br>
                    <div className='blogSubHeader'>WRYLYS</div>
                        *WRYLYS SECTION*
            </div>
            <div className='blogFooter'>
                <a href="action" id='courrier'>BACK</a>
                <a href="transitions" id='courrier'>NEXT</a>
            </div> 
        </div>
    );
}

export default Dialogue;