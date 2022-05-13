import React from 'react';
import { Link } from 'react-router-dom';
import './style.index.css'


function Screentour(props) {

    return (
        <div className='container'>
            {/* COMPONENT NEEDS TO BE FIXED href switched to Links with correct path */}
                <div className='screentourHeader'>HOW TO WRITE A SCREENPLAY -- THE SCREETOUR</div>
                <div className='blogText'>
            <br></br>    
                    <div className='blogSubHeader'>WHAT TO EXPECT</div>
                
                </div>
            <br></br>
            <br></br>
            <div className='screentourFooter'><Link to='fadeIn' style={{color: 'inherit', textDecoration: 'inherit'}}>START HERE</Link></div>
            
        </div>
    );
}

export default Screentour;