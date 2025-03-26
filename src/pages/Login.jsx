import { useState } from "react"
import largeLogo from "../assets/images/logo-large.svg"
import authPageIllustration from "../assets/images/illustration-authentication.svg"
import LoginForm from "./LoginForm";
import SignUp from "./Signup";



const Login = () => {
    const [showSignUp, setShowSignUp] = useState(false)
    const [showPassword, setShowPass] = useState(false)

    function togglePasswordView(){
        setShowPass(!showPassword)
    }

    const toggleSignUp = (e) => {
        e.preventDefault()
        setShowSignUp(!showSignUp)
    }

    const auth = () => {
        alert("User has been fetched")
    }

    return(
        <div className="auth__page">
            <header className="mobile__header">
                <img src={largeLogo} alt="Welcome to the best budgeting app" />
            </header>
            <div className="illustration__container">
                <img className="auth__illustration" src={authPageIllustration} alt="" />
            </div>
            <div className="form__container">
                {showSignUp ? <SignUp togglePasswordView={togglePasswordView} toggleSignUp={toggleSignUp}/> : <LoginForm toggleSignUp={toggleSignUp} togglePasswordView={togglePasswordView} auth={auth}/>}
            </div>
        </div>
    )
}

export default Login