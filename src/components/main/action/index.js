import React from 'react';
import longDescription from '../../../images/longDescription.png'
import longDescriptionWithEdits from '../../../images/longDescriptionWithEdits.png'

function Action(props) {
    return (
        <div className='container'>
            <div className='blogTexts'>
                    Alrigh, you got your slugline. It's nice and bold, secured at the top of page one. Your where and when. Now the what -- it's time for some action. 
                    Let's take our previous example of the <span id='courrier'>BURGER JOINT</span> (for simplicity, we'll change it to <span id='courrier'>RESTAURANT</span> -- basic locations improves your screengrade)
                <br></br>
                    See, sluglines are your sets. Everything that goes between two of them is a scene. And every scene should start with some description.
                    It looks ugly to go straight from slug to dialogue without adding a little action. So, what's happening?
                <br></br>
                    <img className='picture' src={longDescription}  alt='long description' width={'250px'}/>
                <br></br>
                    There are a lot of issues with this description. Let's break them down: 
                <br></br>
                    <img className='picture' src={longDescriptionWithEdits} alt='long description with extra stuff crossed out' width={'250px'}/>
                <br></br>
                    1. For starters, it's too long -- like I said before, trim the fat. Any lines I crossed out were unnecesasary. 
                    Always keeps things simple if you can. Obviously if you're writing a sci-fi piece set in 3022, some of your scenes will need extensive explanations. However, if this is not your case, and your description starts running a bit long, like this one, end the paragraph (or line) and start a new one.
                <br></br>
                    2. The words highlighted in yellow are PROPS and should be in ALL CAPS. This lets the reader know these items need to be in the script, and are integral to the scene. Similar to character <a href='intros'>intros</a>, once introduced, they need not remain in CAPS.
            </div>
            <div className='blogFooter'>
                <a href="slugs" id='courrier'>BACK</a>
                <a href="intros" id='courrier'>NEXT</a>
            </div> 
        </div>
    );
}

export default Action;