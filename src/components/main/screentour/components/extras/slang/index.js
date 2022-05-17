import React from 'react';

function Slang(props) {
    return (
        <div className='container'>
            <div className='blogHeader'>SLANG</div>
            <div className='blogText'>
                When I use the word slang, I'm referring to the changing, shortening, or combining of ordinary words in order to garner more natural dialogue. I am <span id='italic'>not</span> talking about actual slang, in the way it's normally used:
            <br></br>
            <br></br>
                "<span id='courrier'>Chopper</span>" isn't slang unless it's "<span id='courrier'>Choppa</span>"<sup>*</sup>. You understand?
            <br></br>
            <br></br>
                See, writing good dialogue is crucial in developing a good screenplay. And a key to writing good dialogue is humanizing it. People sound like people, not like aliens trying to blend in. "<span id='courrier'>What is up?</span>" should be "<span id='courrier'>What's up?</span>" or "<span id='courrier'>Wazzup?</span>" depending on the character.
            <br></br>
            <br></br>
                Note: obviously sometimes dialogue is supposed to sound like it was written by bots for comedic effect or whatever, so use your discretion. Pretty much, don't be a bot.                
            </div>
            <div className='blogFooter'>
                <a href="flashbacks" id='courrier'>NEXT</a>
                <a href="textdecoration" id='courrier'>BACK</a>
            </div>
            <div className='localGlossary'>
                <div className='localGlossaryHeader'>LOCAL GLOSS'</div>
            <br></br>
                <span className='localGlossaryFooter'>* Personally, I always use an apostrophe after words I'm shortening. I just think it looks cleaner to write Choppa' than Choppa, but that's just me. As long as it sounds mammalian, I'm okay with it.</span>
            </div>
        </div>
    );
}

export default Slang;