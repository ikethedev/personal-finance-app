import { useState, useEffect } from "react"
import largeLogo from "../assets/images/logo-large.svg"
import authPageIllustration from "../assets/images/illustration-authentication.svg"
import LoginForm from "./LoginForm";
import SignUp from "./Signup";
// this use to fetch from the backend to display on the frontend 
import axios from "axios";

import styles from  "../styles/commonform.module.css";



const Login = () => {
    const [showSignUp, setShowSignUp] = useState(false)
    const [showPassword, setShowPass] = useState(false)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    // need to use an async function here because we are fetching a promise
    const fetchAPI = async () => {
        const response = await axios.get("http://localhost:8080/api");
        console.log(response.data.fruits)
    };

    fetchAPI()

    function togglePasswordView(){
        setShowPass(!showPassword)
    }

    const toggleSignUp = (e) => {
        e.preventDefault()
        setShowSignUp(!showSignUp)
    }


    
    

    

    return(
        <div className={styles.auth__page}>
            <header className={styles.mobile__header}>
                <img src={largeLogo} alt="Welcome to the best budgeting app" />
            </header>
            <div className={styles.illustration__container}>
                <img className={styles.auth__illustration} src={authPageIllustration} alt="" />
            </div>
            <div className={styles.form__container}>
                {showSignUp ? <SignUp togglePasswordView={togglePasswordView} toggleSignUp={toggleSignUp}/> : <LoginForm toggleSignUp={toggleSignUp} togglePasswordView={togglePasswordView} />}
            </div>
        </div>
    )
}

export default Login