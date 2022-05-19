import React from 'react';
import './style.index.scss'

function LogIn(props) {
    return (
        <div className='logInContainer'>
            <form>
                <input type='text' name='username' placeholder='Username' />
                <input type='password' name='password' placeholder='Password' />
                <div className='submitButton'>LOG IN</div>
            </form>
        </div>
    );
}

export default LogIn;