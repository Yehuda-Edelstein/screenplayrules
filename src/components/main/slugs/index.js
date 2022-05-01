import React from 'react';

function Slugs(props) {
    return (
        <div className='container'>
            <div className='blogText'>
                Okay. Here's where your script actually starts. The where and when. 
                Sluglines (or scene headings) will precede every scene in your script, so it's important to have them be as short and precise as possible. 
                Seeing a slugline that's longer than the description beneath it is alarming -- <span id='courrier'>DUMPSTER BEHIND BURGER JOINT</span> should just be <span className='courrier'>BURGER JOINT</span>.
                Leave the details to the description. 
            </div>
            <br></br>
                The next step in improving your screenstyle is to <span id='bold'>bold</span> your sluglines. 
                This helps eleviate the natural, page-to-page monotony screenplays tend to attract. I mean, at the end of the day it's just a bunch of letters, right?
            <br></br>
                <img className='picture' src='' alt='without bold' width={'250px'}/>
                <img className='picture' src='' alt='with bold' width={'250px'}/>
            <br></br>
                Many professionals are already moving away from bare slugs, and you don't want to get left behind in the days of old. It's time to accept the days of...
            <div className='blogFooter'>
                <a href="fadein" id='courrier'>BACK</a>
                <a href="action" id='courrier'>NEXT</a>
            </div> 
        </div>
    );
}

export default Slugs;