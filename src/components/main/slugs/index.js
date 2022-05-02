import React from 'react';
import withoutBold from '../../../images/withoutBold.png'
import withBold from '../../../images/withBold.png'


function Slugs(props) {
    return (
        <div className='container'>
            <div className='blogText'>
                Okay. Here's where your screenplay actually starts. The where and when. 
                Sluglines (or scene headings) will precede every scene in your script, so it's important to have them be as short and precise as possible. 
                Seeing a slugline that's longer than the description beneath it is alarming -- <span id='courrier'>DUMPSTER BEHIND BURGER JOINT</span> should just be <span className='courrier'>BURGER JOINT</span>.
                Leave the details to the description.
            <br></br> 
                Also, don't make your <span id='courrier'>TIME</span> too nuanced. Here's a list of acceptable times found in scripts with a good screengrade: <span id='courrier'>MORNING, DAY, AFTERNOON, NIGHT</span>. For relative times: <span id='courrier'>LATER, MOMENTS LATER, MOMENTS EARLIER, CONTINUOUS</span>. Any more of a specific time will need to come from <a href='superimpose'>SUPERIMPOSITION</a>
            <br></br>
                The next step is to <span id='bold'>bold</span> your <span id='bold'>sluglines</span>. 
                This helps eleviate the natural, page-to-page monotony screenplays tend to attract. I mean, at the end of the day it's just a bunch of letters, right?
            <br></br>
                <img className='picture' src={withoutBold} alt='without bold' width={'250px'}/>
                <img className='picture' src={withBold} alt='with bold' width={'250px'}/>
            <br></br>
                Many professionals are already moving away from bare slugs, and you don't want to get left behind in the days of old. It's time to accept the days of...
                </div>
            <div className='blogFooter'>
                <a href="fadein" id='courrier'>BACK</a>
                <a href="action" id='courrier'>NEXT</a>
            </div> 
        </div>
    );
}

export default Slugs;