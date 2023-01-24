import React from 'react'
import { useState } from 'react'
import './connect-modal.css'
import SignUp from './SignUp';
import Login from './Login';

const ConnectModal = () => {
const [signUp, setSignUp] = useState(false);

  return (
    <div className="connect-modal">
        {signUp ? <SignUp /> : <Login />}
      <div className="connect-footer">
        <button style={{textDecoration: signUp ? "none" : "underline"}} onClick={()=> setSignUp(false)}>LOGIN</button>
        <button style={{textDecoration: signUp ? "underline" : "none"}} onClick={()=> setSignUp(true)}>SIGN UP</button>
      </div>
    </div>
  ) 
}

export default ConnectModal
