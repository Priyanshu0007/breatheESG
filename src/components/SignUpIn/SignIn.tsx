/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { FcGoogle } from "react-icons/fc";
import { FaTwitterSquare } from "react-icons/fa";
import "./styles.scss"
import { useFirebase } from '../../context/firebase';
import { useNavigate } from 'react-router-dom';
interface myProps {
    setSignIn: Dispatch<SetStateAction<boolean>>
 }
 
const SignIn = ({setSignIn}:myProps) => {
    const [email,setEmail]=useState<string>("")
    const [password,setPassword]=useState<string>("")
    const firebase:any = useFirebase()
    const nagivate=useNavigate()
    useEffect(()=>{
        if(!firebase.user?.email){nagivate('/sign')}
        else{nagivate('/')}
      },[firebase.user,nagivate])
  return (
    <div className='s-box'>
        <div className='s-title'>Login</div>
        <div className='s-text'>Enter your registered Email ID to continue</div>
        <div className='s-input'>
            <label>Email</label>
            <input value={email} onInput={e=>setEmail(e.currentTarget.value)} placeholder='Your Email ID' autoComplete="email" id="email" name="email" type="email" required />
        </div>
        <div className='s-input'>
            <label>Password</label>
            <input id="password"  value={password} autoComplete="current-password" placeholder='Password'  onInput={e => setPassword(e.currentTarget.value)} name="password" type="password" required />
        </div>
        <div className='s-social' onClick={()=>firebase.signinWithGoogle()}><p><FcGoogle/></p><p>Sign up with Google</p></div>
        <div className='s-social disable'><p><FaTwitterSquare color='#1DA1F2'/></p><p>Sign up with Twitter</p></div>
        <div className='s-contact'>Having trouble logging in? <a onClick={()=>setSignIn(false)}>SignUp</a></div>
        <div className='s-continue' onClick={()=>firebase.signinUserWithEmailAndPassword(email,password)}>Continue</div>
    </div>
  )
}

export default SignIn