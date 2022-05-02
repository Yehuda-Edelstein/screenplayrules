import React from 'react';
import longDescription from '../../../images/longDescription.png'
import longDescriptionWithEdits from '../../../images/longDescriptionWithEdits.png'
import descriptionFixed from '../../../images/descriptionFixed.png'

function Action(props) {
    return (
        <div className='container'>
            <div className='blogTexts'>
                    Alright, you got your slugline. It's nice and bold, secured at the top of page one. Your where and when. Now the what -- it's time for some action. Let's take our previous example of the <span id='courrier'>BURGER JOINT</span> (for simplicity, we'll change it to <span id='courrier'>RESTAURANT</span> -- basic locations help your screengrade).
                <br></br>
                    See, sluglines are your sets. Everything that goes between two of them is a scene. And every scene should start with some description. It looks ugly to go straight from slug to dialogue without adding a little action. So, what's happening?
                <br></br>
                    <img className='picture' src={longDescription}  alt='long description' width={'250px'}/>
                <br></br>
                    There are a lot of issues with this description. Let's break them down: 
                <br></br>
                    <img className='picture' src={longDescriptionWithEdits} alt='long description with extra stuff crossed out' width={'250px'}/>
                <br></br>
                    1. For starters, it's too long -- like I said before, trim the fat. Any lines I crossed out were unnecesasary. Limit your parapgraphs to 3-4 lines at most. Break them up into two (like I did here) if you have to. Remember, always keeps things simple if you can. Obviously if you're writing a sci-fi piece set in 3022, some of your scenes will need extensive explanations. However, if this is not the case, and your description starts running a bit long, as this one is, end the paragraph (or line) and start a new one. Using one-word sentences is fine too. It adds a subtle intensity to your description and keeps your reader wanting more. Hopefully.
                <br></br>
                    2. The words highlighted in <span id='yellow'>yellow</span> are PROPS and should be in ALL CAPS. This lets the reader know these items need to be in the script, and are integral to the scene. Similar to character <a className='inBlogLink' href='intros'>intros</a>, once introduced, they need not remain CAPPED. I know what you're thinking. You'll see why we need a DUMPSTER in this scene soon enough.
                <br></br>
                    3. As for the <span id='red'>S</span> and <span id='red'>W</span>, this is where you'll start to see the nitpickyness of these screenplay rules. Now, even though only the <span id='red'>W</span> is actually problomatic, I highlighted both letters to shed more light on the issue: It looks janky to have two capitilized letters on top of each other -- whether they're at the start of the line, or the end of it. You may think I'm nuts but I've done my research and people do respond better to scripts that minamize stacked capital letters. Worse than that, is doing it with the same capitalized letter. Worse even than that (see!) is with full words. Personally, I wouldn't even start succeeding paragrapghs with the same word or letter either. But, hey, that's just me.
                <br></br>
                    4. <span id='red'>Marlboro Red</span> is red because it's product placement. You're the screenwriter, not the producer. Your job to say what he's smoking, not what brand. Marlboro Red is just CIGARETTE -- remember props are in caps the first time mentioned. Note: This doesn't apply for scripts whose plots must include certain products (i.e., car movies or era pieces).
                <br></br>
                    5. Finally, similar to 3, refrain from using the same pronoun/name twice in a row. Try and alternate between the two as seen in the corrected version below:
                <br></br>
                    <img className='picture' src={descriptionFixed} alt='description 
                    fixed' width={'250px'}/>
                <br></br>
            </div>
            <div className='blogFooter'>
                <a href="slugs" id='courrier'>BACK</a>
                <a href="intros" id='courrier'>NEXT</a>
            </div> 
        </div>
    );
}

export default Action;