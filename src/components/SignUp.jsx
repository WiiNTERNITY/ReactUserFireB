import React from 'react'
import { useRef, useState } from 'react'
import './sign-up.css'
import { auth } from "../config/firebase.config"

const SignUp = () => {
  const registerEmail = useRef()
  const registerPassword = useRef()
  const [displayName, setDisplayName] = useState("")
  const handleRegister = (e) => {
    e.preventDefault()
    try {
      auth.createUserWithEmailAndPassword(
        registerEmail.current.value,
         registerPassword.current.value
         ).then(async (userAuth) => {
          await userAuth.user.updateProfile({
            displayName,
          })
          console.log(userAuth)
         })  
    } catch (error) {
      console.log(error.message)
      window.location.reload
    }

    console.log(registerEmail.current.value, registerPassword.current.value)
  }

  return (
    <div className='sign-up'>
      <h3>S'inscrire</h3>
      <form onSubmit={e => handleRegister(e)}>
        <input className='form-input' type="text" placeholder='Pseudo' required onChange={(e) => 
          setDisplayName(e.target.value)} />
        <input className='form-input' type="email" placeholder='Email' required ref={registerEmail}/>
        <input className='form-input' type="password" placeholder='Mot de passe' required ref ={registerPassword}/>
        <input type="submit" value="Inscription" />
      </form>
    </div>
  )
}

export default SignUp