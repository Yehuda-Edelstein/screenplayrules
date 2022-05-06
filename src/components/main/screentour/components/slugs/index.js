import React, {useState} from 'react';
import withoutBold from '../../../../../images/slugs/withoutBold.png'
import withBold from '../../../../../images/slugs/withBold.png'
import scroll from '../../../../../images/slugs/scroll.png'
import './style.index.css'

function Slugs(props) {
    const [handleShow, setHandleShow] = useState(false)
    
    function show() {
        setHandleShow(true)
    }

    function close() {
        setHandleShow(false)
    }

    return (
        <div className='container'>
            <div className='blogHeader'>SLUGS</div>
            <div className='blogText'>
                Okay. Here's where your screenplay actually starts. The where and when. 
            <br></br>
            <br></br>
                Scene headings or sluglines (I'll be referring to them as slugs or sluglines from now on) will precede every scene in your script, so it's important to have them be as short and precise as possible. 
            <br></br>
            <br></br>
                A slugline is made up of three parts:
                <div className='sluglineExample'><span id='yellow'>INT.</span> EXAMPLE - DAY</div> 
            <br></br>
            <br></br>
                This abreviation tells us whether the scene will be happening inside or outside, or both. Interior (<span id='courrier'>INT.</span>) for inside, exterior (<span id='courrier'>EXT.</span>) for outside, and a combination (<span id='courrier'>INT.</span>/<span id='courrier'>EXT.</span>) for scenes that switch between the two.
            <br></br>
            <br></br>
                Note: if you're new to screenwriting, which you probably are, refrain from using "<span id='courrier'>INT.</span>/<span id='courrier'>EXT.</span>" Instead, use description to establish a location change, or just cut to a new scene. 
            <br></br>
            <br></br>
                <div className='sluglineExample'>INT. <span id='yellow'>EXAMPLE</span> - DAY</div> 
            <br></br>
            <br></br>
                **CONTINUE HERE**   
            <br></br>
            <br></br>


                Seeing a slugline that's longer than the description beneath it is alarming -- "<span id='courrier'>DUMPSTER BEHIND BURGER JOINT</span>" should just be "<span id='courrier'>BURGER JOINT</span>". Leave details to the description.
            <br></br> 
            <br></br> 
                Also, don't make your <span id='courrier'>TIME</span>s too nuanced. Here's a list of times you should stick to:
                <div className='timeListContainer'>
                    <ul className='timeList'>
                        <label>Actual<sup>1</sup></label>
                        <div className='listItems'>
                            <li><span id='courrier'>MORNING</span></li>
                            <li><span id='courrier'>DAY</span></li>
                            <li><span id='courrier'>AFTERNOON</span></li>
                            <li><span id='courrier'>EVENING</span></li>
                            <li><span id='courrier'>NIGHT</span></li>
                        </div>
                    </ul>
                    <ul className='timeList'>
                        <label>Relative<sup>2</sup></label>
                        <div className='listItems'>
                            <li><span id='courrier'>LATER</span></li>
                            <li><span id='courrier'>MOMENTS LATER</span></li>
                            <li><span id='courrier'>MOMENTS EARLIER</span></li>
                            <li><span id='courrier'>CONTINUOUS</span></li>
                        </div>
                    </ul>
                </div>
                If you want a more specific time, you'll need to <a href='superimpose'>superimpose</a> it.
                    {/* add a link back to slugs from superimpose page */}
            <br></br>
                Next you should <span id='bold'>bold</span> your <span id='bold'><span id='courrier'>SLUGLINES</span></span>. 
                This helps alleviate the natural, page-to-page monotony screenplays tend to attract. I mean, at the end of the day it's just a bunch of letters, right? Break those scenes up with a bit of <span id='bold'>bold</span>:
            <br></br>
                <img className='picture' src={withoutBold} alt='without bold' width={'250px'}/>
                <img className='picture' src={withBold} alt='with bold' width={'250px'}/>
            <br></br>
                Many professionals are already moving away from bare slugs {/* maybe add a href to bare sluglines */} so you don't want to get left behind in the days of old. It's time to accept the days of...
            </div>
            <br></br>
            <div className='screengradeHeader' onClick={show}>CLICK HERE TO IMPROVE YOUR SCREENGRADE KNOWLEDGE</div>
                {/* Figure out better name for screengradeHeader */}
            {handleShow && 
            <div className='screengradeBlogText'>
                <div id='blogTextFirstLine'>
                    <div className='closeButton' id='courrier' onClick={close}>CLOSE</div>
                </div>
                As I hinted at earlier, it's a definite plus to land slugs at the tops of you pages, although, it's usually a best case scenario and not always possible. So, don't worry too much about it. That being said, don't ever have a slugline without at least one line of description under it on the <span id='italic'>same</span> page. It's insensitive to tease a reader with a juicy slug and then make them scroll or turn to the next page to see what's going on.
                There's a page-turner and then there's this:
            <br></br>
                <img className='picture' src={scroll} alt='with bold' width={'250px'}/>
            <br></br>
                Disgusting.
            </div> 
            }
            <div className='blogFooter'>
                <a href="action" id='courrier'>NEXT</a>
                <a href="fadein" id='courrier'>BACK</a>
            </div> 
        </div>
    );
}

export default Slugs;