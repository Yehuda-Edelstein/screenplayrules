import React, {useState} from 'react';
import { Link } from 'react-router-dom';
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
                <div className='sluglineExamplePart'>
                    <div className='sluglineExampleNumber'>1.</div>
                    <div className='sluglineExample'><span id='yellow'>INT.</span> EXAMPLE - DAY</div> 
                </div>
            <br></br>
            <br></br>
                This abbreviation tells us whether the scene will be happening inside or outside, or both. Interior (<span id='courrier'>INT.</span>) for inside, exterior (<span id='courrier'>EXT.</span>) for outside, and a combination (<span id='courrier'>INT.</span>/<span id='courrier'>EXT.</span>) for scenes that switch between the two.
            <br></br>
            <br></br>
                Note: if you're new to screenwriting, which you probably are, refrain from using "<span id='courrier'>INT.</span>/<span id='courrier'>EXT.</span>" Instead, use description to establish a location change, or just cut to a new scene. 
                <div className='sluglineExamplePart'>
                <div className='sluglineExampleNumber'>2.</div>
                    <div className='sluglineExample'>INT. <span id='yellow'>EXAMPLE</span> - DAY</div> 
                </div>
            <br></br>
            <br></br>
                The middle part of the slugline tells us the actual location of the scene. "<span id='courrier'>EXAMPLE</span>" here could be, "<span id='courrier'>GRANDMA'S HOUSE</span>",  "<span id='courrier'>SIDE OF HIGHWAY</span>", or "<span id='courrier'>INTERNATIONAL SPACE STATION</span>". Pretty much, any explainable location is technically valid. 
            <br></br>
            <br></br>    
                That being said, it's a bit of an amateur move to have your locations be overly descriptive. Personally, seeing a slugline that's longer than the description beneath it is alarming. "<span id='courrier'>DUMPSTER BEHIND BURGER JOINT</span>" should just be "<span id='courrier'>BURGER      JOINT</span>". Leave details in the description. 
                <div className='sluglineExamplePart'>
                <div className='sluglineExampleNumber'>3.</div>
                    <div className='sluglineExample'>INT. EXAMPLE <span id='yellow'>- DAY</span> </div> 
                </div>
            <br></br>
            <br></br>
                At last we have the when of your slugline -- the time your scene is happening at. Although this seems simple enough, don't make the mistake of having your times be too nuanced. 
            <br></br>
            <br></br>
                Here's a list of acceptable times to live by:
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
                If you want a more specific time than one of these listed, you'll need to superimpose<sup>3</sup> it. As for any questions you may have regarding the reasons for the selected times, check the <Link to='/faqs' className='mainLink'><span id='courrier'>FAQs</span></Link>.
            <br></br>
            <br></br>
                Now that you understand what a slugline is, and how to write one, the next thing you'll want to do is <span id='bold'>bold</span> them. This will help alleviate the natural, page-to-page monotony screenplays tend to attract. I mean, at the end of the day, it's just a bunch of letters, right? Break those scenes up with a bit of <span id='bold'>bold</span>:
            <br></br>
            <br></br>
                <div className='pictureContainer'>
                    <img className='picture' src={withoutBold} alt='without bold' width={'250px'}/>
                    <img className='picture' src={withBold} alt='with bold' width={'250px'}/>
                </div>
            <br></br>
                Many professionals are already moving away from bare slugs, {/* maybe add a href to bare sluglines */} so don't get left behind in the days of old. It's time to accept the days of...
            </div>
            <br></br>
                {!handleShow
                        ? <div className='screengradeHeader' onClick={show}>CLICK HERE TO IMPROVE YOUR SCREENGRADE KNOWLEDGE</div>
                        : <div className='closeButton' onClick={close}>CLOSE</div>    
                        } 
                <div className='screengradeContainer'>
                        {/* Figure out better name for screengradeHeader */}
                        {/* add better animation to drop down */}
                    {handleShow && 
                    <div className='screengradeBlogText'>
                        As I hinted at earlier, it's a definite plus to land slugs at the tops of your pages, although, it's usually a best case scenario and not always possible. So, don't worry too much about it. That being said, don't ever have a slugline without at least one line of description below it on the <span id='italic'>same</span> page. It's insensitive to tease a reader with a juicy slug and then make them scroll or turn to the next page to see what's going on.
                        There's a page-turner and then there's this:
                    <br></br>
                        <div className='screengradePictureContainer'>
                            <img className='picture' src={scroll} alt='with bold' width={'250px'}/>
                        </div>
                        Disgusting.
                    <br></br>
                    </div> 
                    }
                </div>
            <div className='blogFooter'>
                <a href="action" id='courrier'>NEXT</a>
                <a href="fadein" id='courrier'>BACK</a>
            </div> 
            <div className='localGlossary'>
                <div className='localGlossaryHeader'>LOCAL GLOSS'</div>
                <ol className='localGlossaryList'>
                    <li><span id='bold'>Actual</span></li>
                    <div className='definition'>Universal time. Outside of story, not plot-contingent.</div>
                    <li><span id='bold'>Relative</span></li>
                    <div className='definition'>Time understood through story, relative to the plot. </div>
                    <li><span id='bold'>Superimpose</span></li>
                    <div className='definition'>Letters, numbers, symbols, or images, displayed on screen. Overlaid so that both original picture and superimposed addition are visible.</div>
                </ol>
                <div className='localGlossaryFooter'><span>**full definitions found in glossary above**</span></div>
            </div>
        </div>
    );
}

export default Slugs;