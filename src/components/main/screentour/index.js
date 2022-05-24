import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './style.index.scss'


function Screentour(props) {
    useEffect(() => {
        document.title = 'How To Write A Screenplay - Introduction'
     }, []);

    return (
        <div className='container'>
            {/* COMPONENT NEEDS TO BE FIXED href switched to Links with correct path */}
                <div className='screentourHeader'>HOW TO WRITE A SCREENPLAY -- THE SCREENTOUR</div>
                <div className='blogText'>
                    <div className='blogSubHeader'>WHAT TO EXPECT</div>
                First things first, I think it's important to note that 99% of what you'll find in the screentour will not help improve your story's plot whatsoever. It will merely teach you the best way to style and present your screenplay. Not how to pen <a href='https://www.scriptslug.com/script/pulp-fiction-1994' rel="noreferrer noopener" target="_blank">Pulp Fiction</a>.
                <br></br>
                <br></br>
                Furthermore, this tour will not be coverng formatting constants such as margins or spacing. If you don't already have a screenwriting software that does those things for you, I suggest you purchase one before continuing. I use <a href='https://www.arcstudiopro.com/' rel="noreferrer noopener" target="_blank">Arc Studio Pro</a>, but I hear <a href='https://www.finaldraft.com/' rel="noreferrer noopener" target="_blank">Final Draft</a> is great as well. 
                <br></br>
                <br></br>
                There are some free softwares, as well as free versions of paid softwares you can find with a quick Google search. My point here is it's 2022. You should not be spacing your own screenplays unless you enjoy a good torture session. 
                <br></br>
                <br></br>
                Lastly, you will see many "rules" on this tour. The quotes are there because in truth art has no rules -- you can really do whatever you want and it will sometimes work. However, that being said, no professional will read your script if the margins are off or if you use the wrong type of font. That's just a fact. So, it sometimes pays to follow the "rules", you know?
                <br></br>
                <br></br>
                <div className='blogSubHeader'>WHO AM I</div>
                My name's Yehuda. I'm a spec screenwriter/software engineer and I made this website both as a project, but also as a way to give back to the screenwriting community. 
                <br></br>
                <br></br>
                I started writing screenplays a while back and found it difficult to learn the tricks of the trade by myself. How do I write music cues? <span id='italic'>Should</span> I write music cues? What are music cues? Lots of questions and not a lot of cohesive answers.
                <br></br>
                <br></br>
                Don't get me wrong, there's a plenty of good stuff out there in the ether, but it was very unorganized. My goal is that this website will help unite the screenwriting community. Connect pros with rooks. A Qs, and so on.
                <br></br>
                <br></br>
                Also, some of the terms found in the glossary, or in a section's local gloss', were invented by me. Not that the concepts didn't already exist, just that I have given names to those that were nameless. For posterity. And because it was fun. Anyways. Without further adieu...
                </div>
            <br></br>
            <br></br>
            <div className='screentourFooter'>
                <Link to='fadeIn'  style={{color: 'inherit', textDecoration: 'inherit'}}><span className='footerLink'>START THE SCREENTOUR HERE</span></Link>
            </div>
            
        </div>
    );
}

export default Screentour;