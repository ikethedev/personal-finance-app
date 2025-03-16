import "../styles/commonform.css";
import "../styles/login.css";
import errorIcon from "../assets/images/formerror.svg";
import hidePassword from "../assets/images/icon-hide-password.svg";
import { useState } from "react";
import { useDebouncedCallback } from "use-debounce";

const LoginForm = ({ toggleSignUp, auth }) => {
  const [showPassword, setShowPass] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isErrorEmail, setIsErrorEmail] = useState(false);
  const [isErrorPassword, setIsErrorPassword] = useState(false);

  function togglePasswordView() {
    setShowPass(!showPassword);
  }

  const handleEmailChange = (e) => {
    const emailValue = e.target.value;
    setEmail(emailValue);
  };

  const handlePasswordChange = (e) => {
    const passwordValue = e.target.value;
    setPassword(passwordValue);
  };

  const submitForm = (e) => {
    e.preventDefault();

    return;
    //auth();
  };

  return (
    <form>
      <h2>Login</h2>
      <div>
        <label htmlFor="">Email</label>
        <div className="form__input-container">
          <input
            className="form__input"
            type="text"
            name="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
       
      </div>
      <div>
        <label htmlFor="">Password</label>
        <div className="form__input-container">
          <input
            className="form__input"
            type={showPassword ? "text" : "password"}
            name="password"
            id="password"
            onChange={handlePasswordChange}
          />
          <img
            onClick={togglePasswordView}
            src={hidePassword}
            alt="hide password"
            className="hide__icon"
          />
        </div>
      </div>

      <button onClick={submitForm}>Login</button>

      <div className="form__view-toggle">
        <p className="toggle__text">
          Need to create an account?{" "}
          <a className="link" onClick={toggleSignUp}>
            Sign Up
          </a>
        </p>
      </div>
    </form>
  );
};

export default LoginForm;
