import React from 'react';
import withoutBold from '../../../images/withoutBold.png'
import withBold from '../../../images/withBold.png'
import scroll from '../../../images/scroll.png'


function Slugs(props) {
    return (
        <div className='container'>
            <div className='blogHeader'>SLUGS</div>
            <div className='blogText'>
                Okay. Here's where your screenplay actually starts. The where and when. Sluglines (or scene headings) will precede every scene in your script, so it's important to have them be as short and precise as possible. Seeing a slugline that's longer than the description beneath it is alarming -- <span id='courrier'>DUMPSTER BEHIND BURGER JOINT</span> should just be <span id='courrier'>BURGER JOINT</span>.
                Leave the details in the description.
            <br></br> 
                Also, don't make your <span id='courrier'>- TIME</span> too nuanced. Here's a list of acceptable times found in scripts with a good screengrade: 
                <ul>
                    <li><span id='courrier'>MORNING</span></li>
                    <li><span id='courrier'>DAY</span></li>
                    <li><span id='courrier'>AFTERNOON</span></li>
                    <li><span id='courrier'>EVENING</span></li>
                    <li><span id='courrier'>NIGHT</span></li>
                </ul>
                For relative times: 
                <ul>
                    <li><span id='courrier'>LATER</span></li>
                    <li><span id='courrier'>MOMENTS LATER</span></li>
                    <li><span id='courrier'>MOMENTS EARLIER</span></li>
                    <li><span id='courrier'>CONTINUOUS</span></li>
                </ul>
                Any more of a specific time will need to come from <a href='superimpose'>superimposition</a>.
            <br></br>
                Next you'll want to <span id='bold'>bold</span> your <span id='bold'><span id='courrier'>SLUGLINES</span></span>. 
                This helps eleviate the natural, page-to-page monotony screenplays tend to attract. I mean, at the end of the day it's just a bunch of letters, right? Break those scenes up with a bit of <span id='bold'>bold</span>:
                
            <br></br>
                <img className='picture' src={withoutBold} alt='without bold' width={'250px'}/>
                <img className='picture' src={withBold} alt='with bold' width={'250px'}/>
            <br></br>
                Many professionals are already moving away from bare <span id='courrier'>SLUGS</span>, and you don't want to get left behind in the days of old. It's time to accept the days of...
            <br></br>
                Also, I mentioned previously that I like when a slugline sits at the top of the page. This is best case scenario, but, obviously, not always possible. However,
                don't ever have a slugline without at least one line of description under it on the <span id='italic'>same</span> page. It's insensative to tease a reader with a juicy slug and then make them scroll or turn to the next page to see what's going on.
                There's a page-turner and then there's this:
                </div>
            <br></br>
                <img className='picture' src={scroll} alt='with bold' width={'250px'}/>
            <br></br>
                Disgusting.
            <div className='blogFooter'>
                <a href="fadein" id='courrier'>BACK</a>
                <a href="action" id='courrier'>NEXT</a>
            </div> 
        </div>
    );
}

export default Slugs;