import React, { Dispatch, SetStateAction } from 'react'

interface myProps {
  setSignIn: Dispatch<SetStateAction<boolean>>

}

const SignUp = ({setSignIn}:myProps) => {
  return (
    <div>SignUp</div>
  )
}

export default SignUp