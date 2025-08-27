import React from 'react'
import { useState } from 'react';
// import "../style.css";
const Form = () => {
    const [username, setUsername] =useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const [errorUsername, setErrorUsername] = useState('')
    const [errorEmail, setErrorEmail] = useState('')
    const [errorpassword, setErrorPassword] = useState('')
    const [errorConfirmPassword, setErrorConfirmPassword] = useState('')

    const [userColor, setUserColor] = useState('')
    const [emailColor, setEmailColor] = useState('')
    const [passwordColor, setPasswordColor] = useState('')
    const [ConfirmPasswordColor, setConfirmPasswordColor] = useState('')


    const validate = e => {
        e.preventDefault()

        if(username.length > 8)
        {
            setErrorUsername('')
            setUserColor('green')
        }
        else{
            setErrorUsername('Username must be 8 letters long.')
            setUserColor('red')
        }

        if(email.includes('@gmail'))
        {
            setErrorEmail('')
            setEmailColor('green')
        }
        else{
            setErrorEmail('Email should have @gmail')
            setEmailColor('red')
        }

        if(password.length > 8) 
        {
            setErrorPassword('')
            setPasswordColor('green')
        }
        else{
            setErrorPassword('Password should be greater than 8')
            setPasswordColor('red')
        }


        if(password != '' && password == confirmPassword)
        {
            setErrorConfirmPassword('')
            setConfirmPassword('green')
        }
        else
        {
            setErrorConfirmPassword('Passwords didnt match');
            setConfirmPasswordColor('red')
        }
    }

  return <>

    <div className="card">
        <div className="card-image"></div>
            <form action="">
                <input 
                    type="text" 
                    placeholder='Enter username' 
                    style={{borderColor: userColor}} 
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                
                />
                <p className='error'>{errorUsername}</p>

                <input 
                    type="email" 
                    placeholder='Enter Email' 
                    style={{borderColor: emailColor}} 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                
                />
                <p className='error'>{errorEmail}</p>

                <input 
                    type="password" 
                    placeholder='Enter Password' 
                    style={{borderColor: passwordColor}} 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                
                />
                <p className='error'>{errorpassword}</p>

                <input 
                    type="password" 
                    placeholder='Confirm Password' 
                    style={{borderColor: passwordColor}} 
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                
                />
                <p className='error'>{errorConfirmPassword}</p>

                <button className='submit-btn' onClick={validate}>Submit</button>


            </form>
        
    </div>
    
  </>
    
  
}

export default Form;
