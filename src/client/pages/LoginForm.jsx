import styles from  "../styles/commonform.module.css";
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
  };

  return (
    <form className={styles.form}>
      <h2 className={styles.form__header}>Login</h2>
      <div>
        <label htmlFor="email">Email</label>
        <div className={styles['form__input-container']}>
          <input
            className={styles.form__input}
            type="text"
            name="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
       
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <div className={styles['form__input-container']}>
          <input
            className={styles.form__input}
            type={showPassword ? "text" : "password"}
            value={password}
            name="password"
            id="password"
            onChange={handlePasswordChange}
          />
          <img
            onClick={togglePasswordView}
            src={hidePassword}
            alt="hide password"
            className={styles.hide__icon}
          />
        </div>
      </div>

      <button className={styles.submit__btn} onClick={submitForm}>Login</button>

      <div className={styles["form__view-toggle"]}>
        <p className={styles.toggle__text}>
          Need to create an account?{" "}
          <a className={styles.link} onClick={toggleSignUp}>
            Sign Up
          </a>
        </p>
      </div>
    </form>
  );
};

export default LoginForm;
