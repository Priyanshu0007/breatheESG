/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { useFirebase } from '../../context/firebase'
import { useNavigate } from 'react-router-dom'
import { toast } from "sonner";
interface myProps {
  setSignIn: Dispatch<SetStateAction<boolean>>

}

const SignUp = ({setSignIn}:myProps) => {
  const [email,setEmail]=useState<string>("")
  const [password,setPassword]=useState<string>("")
  const [cPassword,setCPassword]=useState<string>("");
  const firebase:any = useFirebase()
  const nagivate=useNavigate()
  useEffect(()=>{
      if(!firebase.user?.email){nagivate('/sign')}
      else{nagivate('/')}
    },[firebase.user,nagivate])
  const SignUpHandler=()=>{
    if(password===cPassword){firebase.signupUserWithEmailAndPassword(email,password)}
    else{toast.error("Password dosen't matched",{duration:3000})}
  }
return (
  <div className='s-box'>
      <div className='s-title'>Sign Up</div>
      <div className='s-input'>
          <label>Email</label>
          <input value={email} onInput={e=>setEmail(e.currentTarget.value)} placeholder='Your Email ID' autoComplete="email" id="email" name="email" type="email" required />
      </div>
      <div className='s-input'>
          <label>Password</label>
          <input id="password"  value={password} autoComplete="current-password" placeholder='Password'  onInput={e => setPassword(e.currentTarget.value)} name="password" type="password" required />
      </div>
      <div className='s-input'>
          <label>Confirm Password</label>
          <input id="password"  value={cPassword} autoComplete="current-password" placeholder='Password'  onInput={e => setCPassword(e.currentTarget.value)} name="password" type="password" required />
      </div>
      <div className='s-contact'>Already have account? <a onClick={()=>setSignIn(true)}>SignUp</a></div>
      <div className='s-continue' onClick={SignUpHandler}>Continue</div>
  </div>
)
}

export default SignUp