import React from 'react'
import './SignupScreen.css'

function SignupScreen() {
  const register = (e) => {
    e.preventDefault();
    // Firebase register
  };

  const signIn = (e) => {
    e.preventDefault();
    // Firebase sign in
  };



  return (
    <div className='signupScreen'>
      <form>
        <h1>Sign In</h1>
        <input placeholder='Email' type="email" />
        <input placeholder='Password' type="password" />
        <button type='submit' onClick={signIn}>
          Sign In
          </button>

        <h4>
          <span className='signupScreen_gray'>New to Netflix? </span>
          <span className='signupScreen_link' onClick={register}>
            Sign up now.
            </span>
        </h4>
      </form>
    </div>
  )
}

export default SignupScreen;
