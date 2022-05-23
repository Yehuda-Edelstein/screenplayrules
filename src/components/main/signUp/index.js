import React from 'react';

function SignUp(props) {
    return (
        <div className='signUpContainer'>
            <form>
                <input type='text' name='email' placeholder='Email' />
                <input type='text' name='username' placeholder='Username' />
                <input type='password' name='password' placeholder='Password' />
                <div className='submitButton'>SIGN UP</div>
            </form>
        </div>
    );
}

export default SignUp;