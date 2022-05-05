import React from 'react';
import withAge from '../../../images/withAge.png'
import withoutAge from '../../../images/withoutAge.png'
import EE from '../../../images/EE.png'
import hh from '../../../images/hh.png'
import clean from '../../../images/clean.png'


function Intros(props) {
    return (
        <div className='container'>
            <div className='blogHeader'>INTROS</div>
            <div className='blogText'>
                There are two acceptable ways to introduce a <span id='courrier'>CHARACTER</span> according to the screenplay rules, 
                none of which were demonstrated in our current scene. The first is with age, if needed. The second without:
            <br></br>
                <img className='picture' src={withAge}  alt='with age' width={'250px'}/>
                <img className='picture' src={withoutAge}  alt='with age' width={'250px'}/>
            <br></br>
                Since by us, <span id='courrier'>Brady</span> is our main character, we'll include his age. Remember that when you introduce your character for the first time, it needs to be in <span id='courrier'>ALL CAPS</span>. Although, this only applies to the name your character will be referred to as throughout your script -- from the script's perspective. That is, when our character has dialouge he'll be <span id='courrier'>BRADY</span> (characters' names over dialouge are always capitilzed too) and in descriptions he'll be plain old <span id='courrier'>Brady</span>. This doesn't mean that other characters can't call <span id='courrier'>Brady</span> some kind of nickname, just that when we write about him outside of dialogue, his name must stay consistent for the sake of the reader. I'll get to a possible exception to this in the next section -- 
            <br></br>
                Uh oh. 
            <br></br>
                <img className='picture' src={EE}  alt='with age' width={'250px'}/>
            <br></br>
                Quick adjustment --
            <br></br>
                <img className='picture' src={hh}  alt='with age' width={'250px'}/>
            <br></br>
                Here we go --
            <br></br>
                <img className='picture' src={clean}  alt='with age' width={'250px'}/>
            <br></br>
                See? Not so difficult. Screengrading on the go will become second nature to you in no time.
            </div>
            <div className='blogFooter'>
                <a href="action" id='courrier'>BACK</a>
                <a href="dialogue" id='courrier'>NEXT</a>
            </div> 
        </div>
    );
}

export default Intros;