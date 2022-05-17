import React from "react";
import { Link } from "react-router-dom";
import './style.index.scss'


function Home(props) {
    return (
        <div className="homeContainer" id="first"> 
                Home component
            <div className="homeContainer" id="second">
                <br></br>
                <br></br>
                <div>New to screenwriting? Take the <Link to='screentour' style={{color: 'inherit', textDecoration: 'inherit'}}><span className="mainLink">SCREENTOUR</span></Link> for everything you need to know!</div>    
            </div>
        </div>
    );
}

export default Home;