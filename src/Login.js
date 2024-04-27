import React from 'react'
import './css/Login.css'
import {signIn} from './features/userSlice'
import {auth, provider} from './firebase'
import { useDispatch } from 'react-redux'

function Login() {


    const dispatch = useDispatch();
    const login = ()=> {
        auth.signInWithPopup(provider).then(({user})=> {
            dispatch(signIn({
                displayName: user.displayName,
                photoUrl: user.photoURL,
                email: user.email
            }))
        }).catch(error=> {
            alert(error)
        })
    }
  return (
    <div className='loginWrapper'>
        <div className='login' >
            <img src='https://upload.wikimedia.org/wikipedia/commons/a/ab/Gmail2020.logo.png' />


            <button className='gmail_login' onClick={login} > Login with Gmail</button>
        </div>
    </div>
  )
}

export default Login