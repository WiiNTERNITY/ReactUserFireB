import React from 'react'
import { useRef } from 'react'
import { auth } from '../config/firebase.config'
import './login.css'

const Login = () => {
  const loginEmail = useRef();
  const loginPassword = useRef();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
       const user = await auth.signInWithEmailAndPassword(
        loginEmail.current.value,
        loginPassword.current.value
       )
       console.log(user)
    } catch (error) {
      console.log(error.message) 
    }
  }

  return (
    <div className='login'>
      <h3>Se connecter</h3>
      <form onSubmit={(e) => handleLogin(e)}>
        <input className='form-input-login' type="email" placeholder='Email' required ref={loginEmail}/>
        <input className='form-input-login' type="password" placeholder='Mot de passe' required ref={loginPassword}/>
        <input type="submit" value="Se connecter" />
      </form>    
    </div>
  )
}

export default Login