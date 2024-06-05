import { useState } from "react"
import SignIn from "../../components/SignUpIn/SignIn"
import SignUp from "../../components/SignUpIn/SignUp"
import "./style.scss"
const SignUpIn = () => {
    const [signIn,setSignIn]=useState<boolean>(true)
  return (
    <div className="s-wrapper">
        <div className="window">
            <div className="s-sec-1">
                <div className="s-welcome">WELCOME TO</div>
                <div className="s-logo"><img src="/src/assets/logo.png" alt="logo"/></div>
                <div className="s-discription"><p>We help you track your organisations metrics as per the ESG Guidelines</p></div>
                <div className="s-intresting">Sounds Interesting? <a href="">Get in touch!</a></div>
            </div>
            <div className="s-sec-2">
                <div className="s-img"><img src="/src/assets/sign.png" alt="earth"/></div>
                <div className="sign">
                    {signIn && <SignIn setSignIn={setSignIn}/>}
                    {!signIn && <SignUp setSignIn={setSignIn}/>}
                </div>
            </div>
        </div>
    </div>
  )
}

export default SignUpIn