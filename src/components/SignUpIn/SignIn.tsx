import React, { Dispatch, SetStateAction } from 'react'
import { FcGoogle } from "react-icons/fc";
import { FaTwitterSquare } from "react-icons/fa";
import "./styles.scss"
interface myProps {
    setSignIn: Dispatch<SetStateAction<boolean>>
 }
 
const SignIn = ({setSignIn}:myProps) => {
  return (
    <div className='s-box'>
        <div className='s-title'>Login</div>
        <div className='s-text'>Enter your registered Email ID to continue</div>
        <div className='s-input'>
            <label>Email address</label>
            <input value={"sd"} onInput={e=>console.log(e)} autoComplete="email" id="email" name="email" type="email" required />
        </div>
        <div className='s-input'>
            <label>Password</label>
            <input id="password"  value={"sd"} autoComplete="current-password"  onInput={e => console.log(e)} name="password" type="password" required />
        </div>
        <div className='s-social'><FcGoogle/><p>Sign up with Google</p></div>
        <div className='s-social'><FaTwitterSquare color='#1DA1F2'/><p>Sign up with Twitter</p></div>
        <div className='s-contact'>Having trouble logging in? <a>Contact Us</a></div>
        <div className='s-continue'>Continue</div>
    </div>
  )
}

export default SignIn