import React, {useState} from 'react';
import './style.index.css'
import sceneNoRules from '../../../../../images/fadeOut/sceneNoRules.png'
import sceneWithRules from '../../../../../images/fadeOut/sceneWithRules.png'
import sceneWithScreengradeRules from '../../../../../images/fadeOut/sceneWithScreengradeRules.png'

function FadeOut(props) {
    const [handleShow, setHandleShow] = useState(false)

    function show() {
        setHandleShow(true)
    }

    function close() {
        setHandleShow(false)
    }
    return (
        <div className='container'>
            <div className='blogHeader'>FADE OUT?</div>
            <div className='blogText'>
            Alright. Here's where you deserve your real congratulations, as well as a place to reap the fruits of your labor.
        <br></br>
        <br></br>
            First off, feel free to continue writing about our story -- any ideas or finished scripts about what happens to <span id='courrier'>Brady</span> and <span id='courrier'>Jules</span>, please send to <a href='mailto:screenplayrules@gmail.com'>screenplayrules@gmail.com</a>. I'd love to see them.
        <br></br>
        <br></br>
            Second, below you will find a top-on-top comparison of the same scene, one without rules and one with. You decide which one you prefer.
        <br></br>
        <br></br>
            Lastly, for anybody wondering whether or not you should end your script with <span id='courrier'>FADE OUT</span> I advise you to see the question mark and/or refer to the section on <a href='fadein'><span id='courrier'>FADE IN</span></a>.
        <br></br>
        <br></br>
            Good luck and get writing!
        <br></br>
        <br></br>
        
            <div className='finalContainer'>
                <div className='finalLabelContainer'>
                </div>
                <div className='finalPictureContainer'>
                    <div className='finalPictureLabel'>NO RULES</div>
                    <img className='finalPicture' src={sceneNoRules}  alt='without rules'/>
                    <br></br>
                    <div className='finalPictureLabel'>SCREENPLAY RULES</div>
                    <img className='finalPicture' src={sceneWithRules}  alt='with rules' />
                </div>
                
            </div>
        </div>
        <br></br>
        <br></br>
            {!handleShow
                ? <div className='screengradeHeader' onClick={show}>CLICK HERE FOR SCREENGRADE VERSION</div>
                : <div className='closeButton' onClick={close}>CLOSE</div>    
                } 
            {handleShow &&
                <div className='screengradeBlogText'>
                    <div className='screengradePictureContainer'>
                        <img className='picture' src={sceneWithScreengradeRules}  alt='with screengrade rules' width={'250px'}  />
                    </div>
                    Now, that's just darn pretty.
                </div>
            }
        <div className='blogFooter'>
                <a href="/" id='courrier'>HOME</a>
                <a href='textdecoration' className='extrasLink'>EXTRAS</a>
                <a href="dialogue" id='courrier'>BACK</a>
            </div>
        </div>
    );
}

export default FadeOut;