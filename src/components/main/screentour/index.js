import React from 'react';
import { Link } from 'react-router-dom';
import './style.index.css'


function Screentour(props) {

    return (
        <div>
                {/* COMPONENT NEEDS TO BE FIXED href switched to Links with correct path */}
                Screentour intro page
                <br></br>
                <br></br>
                <div><Link to='fadeIn' style={{color: 'inherit', textDecoration: 'inherit'}}><span className='mainLink'>START HERE</span></Link></div>
            
        </div>
    );
}

export default Screentour;