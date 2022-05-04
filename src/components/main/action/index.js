import React, { useState }  from 'react';
import longDescription from '../../../images/longDescription.png'
import longDescriptionWithEdits from '../../../images/longDescriptionWithEdits.png'
import finishedLongDescription from '../../../images/finishedLongDescription.png'
import screengradeLongDescriptionWithEdits from  '../../../images/screengradeLongDescriptionWithEdits.png'
import descriptionFixed from '../../../images/descriptionFixed.png'
import withAge from '../../../images/withAge.png'
import withoutAge from '../../../images/withoutAge.png'
import withAgeAfterEdits from '../../../images/withAgeAfterEdits.png'
import screengradeCleanWithAge from '../../../images/screengradeCleanWithAge.png'
import screengradeCleanWithAgeAndHighlights from '../../../images/screengradeCleanWithAgeAndHighlights.png'
import hh from '../../../images/hh.png'
import clean from '../../../images/clean.png'

function Action(props) {
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
            <div className='blogHeader'>ACTION</div>
            <div className='blogText'>
                    Alright, you got your slugline. It's nice and bold, secured at the top of page 1. Your where and when. Now the what -- it's time for some action. 
                <br></br>
                <br></br>
                    <div className='blogSubHeader'>DESCRIPTION</div>
                    Let's take our previous example of the <span id='courrier'>BURGER JOINT</span>, but, for simplicity, we'll change it to <span id='courrier'>RESTAURANT</span> (p.s.: basic locations help your screengrade too).
                <br></br>
                    See, sluglines are your sets. Everything that goes between two of them is a scene. And every scene should start with some description. It looks ugly to go straight from slug to dialogue without a little bit of something in between. {/* maybe have INTERCUTS hyperlink */} So, what's happening?
                <br></br>
                    <img className='picture' src={longDescription}  alt='long description' width={'250px'}/>
                <br></br>
                    There are a few issues with this description. Let's break them down:
                <br></br>
                    <img className='picture' src={longDescriptionWithEdits} alt='long description with extra stuff crossed out' width={'250px'}/>
                <br></br>
                    1. For starters, it's too long -- like I said before, trim the fat. Any lines I crossed out were unnecesasary. This isn't a Russian novel, we don't need vivid imagery. Keep it simple. Obviously if you're writing a sci-fi piece set in 3022, some of your scenes will likely need extensive explanations, but if that's not the case, cut to the chase. One-word sentences are fine too. Good, even. They can add a subtle intensity to your description and keep the reader wanting more. Hopefully.
                <br></br>
                    2. The words highlighted in <span id='yellow'>yellow</span> are <span id='courrier'>PROPS</span> and should be in <span id='courrier'>ALL CAPS</span> at first mention. This lets the reader know these items <span id='italic'>need</span> to be in the script, and are integral to the scene. Any prop that you put in your script should be plot related. Props that help establish tone are for the <a href='https://en.m.wikipedia.org/wiki/Property_master'>prop master</a> to decide on -- assuming you sell your script. Similar to character intros (as we'll see below) once introduced, they need not remain <span id='courrier'>CAPPED</span>.
                <br></br>
                    3. <span id='red'><span id='courrier'>Marlboro Red</span></span> is <span id='red'>red</span> because it's product placement. You're the screenwriter, not the producer. Your job is to say what he's smoking, not what brand. <span id='courrier'>Marlboro Red</span> is just <span id='courrier'>CIGARETTE</span> -- remember props are in caps the first time mentioned. Note: This doesn't apply for scripts whose plots must include certain products (i.e., car movies or era pieces) although writing a <a href='glossary/spec'>spec</a> that hinges on specific merchandies is a risky move better left to those who can make it happen. Because, let's face it, me and you probably can't.
                <br></br>
                    Here we are with a bit more tweaking:
                <br></br>
                    <img className='picture' src={finishedLongDescription} alt='long description with extra stuff crossed out' width={'250px'}/>
                <br></br>
                    Not to shabby, huh. Okay. Now, let's fix that intro.
                <br></br>
                <br></br>
                    <div className='screengradeHeader' onClick={show}>CLICK HERE TO IMPROVE THE SCREENGRADE</div>
                    {handleShow &&
                            <div className='screengradeBlogText'>
                            <div id='blogTextFirstLine'>
                                <div>For a cleaner look:</div>
                                    <div className='closeButton' id='courrier' onClick={close}>X</div>
                            </div>
                    <br></br>
                            <img className='picture' src={screengradeLongDescriptionWithEdits} alt='long description with 
                            extra stuff crossed out' width={'250px'}/>
                    <br></br>
                            3. Long paragraphs are bad, just like long sentences are. Better to have three seperate <a href='glossary/blocks'>blocks</a> for a total of five lines (seven including <a href='glossary/whitelines'>white lines</a>) than one block for a total of five lines. Don't be afraid to break that bad boy up.
                    <br></br>
                            4. The <span id='yellow'><span id='courrier'>S</span></span> and <span id='yellow'><span id='courrier'>B</span></span> are highlighted because <a href='glossary/parallelcaps'>parallel capitalized letters</a> (or stacked caps) are offputting. Now, even though only the <span id='yellow'><span id='courrier'>B</span></span> is actually problomatic, I highlighted both letters to shed more light on the issue. Know that this applies whether they're at the start of the line, end of the line, or anywhere in between. You may think I'm nuts but I've done my research and readers do respond better to scripts that minamize stacked caps. Worse than that, is doing it with the same capitalized letter. Worse even than that (see!) is with full words. Personally, I wouldn't even start succeeding paragraphs with the same word or letter either. But, hey, that's just me. Anyways, the fix here is easy -- we just add the word <span id='courrier'>"back"</span> before <span id='courrier'>DUMPSTER</span>
                    <br></br>
                            5. Finally, for the <span id='red'><span id='courrier'>Brady</span></span>'s in <span id='red'>red</span>. Similar to 3., you should refrain from using the same pronoun or name twice in a row. Try and alternate between the two as seen in the corrected version here:
                    <br></br>
                            <img className='picture' src={descriptionFixed} alt='description 
                            fixed' width={'250px'}/>
                    <br></br>
                            </div>
                         } 
                    <div className='blogSubHeader'>INTROS</div>
                The number one rule for introducing a <span id='courrier'>CHARACTER</span> is that first time they're mentioned, just like <span id='courrier'>PROPS</span>, it must be in <span id='courrier'>ALL CAPS</span>. Keeping that in mind, there are two acceptable ways to go about introducing your character after that, none of which were demonstrated in our scene. The first is with age, if needed. The second without:
            <br></br>
                <img className='picture' src={withAge}  alt='with age' width={'250px'}/>
                <img className='picture' src={withoutAge}  alt='with age' width={'250px'}/>
            <br></br>
                Since by us, <span id='courrier'>Brady</span> is our main character, we'll include his age. You may be wondering:  <span id='italic'>"Why do we need his age when it explicitly says he's a</span> <span id='courrier'>high school junior</span><span id='italic'>?"</span> This is true, we don't really need it. But there will be times when you have a main character who's out of school, and whose age won't be part of their charatcer description. In those cases you could write <span id='courrier'>(20s)</span>, <span id='courrier'>(30s)</span>, <span id='courrier'>(etc)</span>. Personally, I always introduce characters with a parenthetical (age) because it looks cleaner than using commas galore.
            <br></br>
                As for the <span id='courrier'>ALL CAPS</span>, remember this only applies to the first time a character is introduced, and only to the <a href='glossary/scriptname'>script name</a> of said character (notice how <span id='courrier'>Wilson</span> is written). So when our character is introduced, or has dialouge, he'll be <span id='courrier'>BRADY</span> ( character names over dialouge are in <span id='courrier'>ALL CAPS</span> too). However in every other description going forward he'll just be plain old <span id='courrier'>Brady</span>. This doesn't mean that other characters can't call <span id='courrier'>Brady</span> some kind of nickname, just that when we write about him throughout the script, his name must stay consistent for the sake of the reader. I'll get to a possible exception to this rule in the next section. 
            <br></br>
                This is where we're at right now:
            <br></br>
                <img className='picture' src={withAge}  alt='with age' width={'250px'}/>
                </div>
            <br></br>
                <div className='screengradeHeader' onClick={showSecond}>CLICK HERE FOR SCREENGRADE VERSION</div>
                {handleShowSecond &&
                    <div className='screengradeBlogText'>
                        It's always better for your screengrade to include the age:
                        <div id='blogTextFirstLine'>   
                        <div className='closeButton' id='courrier' onClick={closeSecond}>X</div>
                        
                    <br></br>
                        <img className='picture' src={screengradeCleanWithAge}  alt='with age' width={'250px'}/>
                    </div>
                    <br></br>
                        Uh oh --
                    <br></br>
                        <img className='picture' src={screengradeCleanWithAgeAndHighlights}  alt='with age' width={'250px'}/>
                    <br></br>
                        The <span id='yellow'>yellow</span> letters are less severe than the <span id='red'>red</span> ones with regards to parallel capitalization, but both should be adjusted. Let's just change the line to "<span id='courrier'>In his hand is a CIGARETTE</span>" --
                    <br></br>
                        <img className='picture' src={hh}  alt='with age' width={'250px'}/>
                    <br></br>
                        Another quick adjustment --
                    <br></br>
                        <img className='picture' src={clean}  alt='with age' width={'250px'}/>
                    <br></br>
                        There we go. Just switch out "<span id='courrier'>hit</span>" with "<span id='courrier'>drag</span>". See? Not so difficult. Screengrading on the go will become second nature to you in no time.
                    </div>
                }   
            <div className='blogFooter'>
                <a href="slugs" id='courrier'>BACK</a>
                <a href="dialogue" id='courrier'>NEXT</a>
           </div>
        </div>
    );
}

export default Action;