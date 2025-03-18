import { useState } from "react";
import hidePassword from "../assets/images/icon-hide-password.svg";
import errorIcon from "../assets/images/formerror.svg";
import styles from  "../styles/commonform.module.css";
import { useDebouncedCallback } from "use-debounce";

const SignUp = ({ toggleSignUp }) => {
  const [showPassword, setShowPass] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isErrorEmail, setIsErrorEmail] = useState(false);
  const [isErrorPassword, setIsErrorPassword] = useState(false);
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex =
    /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;

  const passwordRequirements = [
    { message: "At least 6 characters", valid: password.length >= 6 },
    { message: "At least one uppercase letter", valid: /[A-Z]/.test(password) },
    { message: "At least one number", valid: /\d/.test(password) },
    {
      message: "At least one special character",
      valid: /[@$!%*?&]/.test(password),
    },
  ];

  passwordRequirements.forEach((req) => {
    console.log(
      `Password requirement "${req.message}": ${req.valid ? "✓" : "✗"}`
    );
  });

  function togglePasswordView() {
    setShowPass(!showPassword);
  }

  const handleEmailChange = (e) => {
    const emailValue = e.target.value;
    setEmail(emailValue);
    validateEmail(emailValue);
  };

  const validateEmail = useDebouncedCallback((inputEmail) => {
    if (!inputEmail || !emailRegex.test(inputEmail)) {
      setIsErrorEmail(true);
    } else {
      setIsErrorEmail(false);
    }
  }, 500);

  const handlePasswordChange = (e) => {
    const passwordValue = e.target.value;
    setPassword(passwordValue);
    validatePassword(passwordValue);
  };

  const validatePassword = useDebouncedCallback((inputPassword) => {
    if (!inputPassword || !passwordRegex.test(inputPassword)) {
      setIsErrorPassword(true);
    } else {
      setIsErrorPassword(false);
    }
  });

  
  function togglePasswordView() {
    setShowPass(!showPassword);
  }

  const createUser = (e) => {
    e.preventDefault()
  }

  return (
    <form className={styles.form}>
      <h2 className={styles.form__header}>Sign Up</h2>
      <div>
        <label htmlFor="username">Username</label>
        <div className={styles["form__input-container"]}>
          <input className={styles.form__input} type="text" name="username" id="username" />
        </div>
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <div className={styles["form__input-container"]}>
          <input className={styles.form__input} type="text" name="email" id="email" value={email} onChange={handleEmailChange} />
        </div>
        {isErrorEmail ? (
          <div className="error__email">
            <p>Enter a valid Email</p>
            <img className="error__icon" src={errorIcon} alt="error icon" />
          </div>
        ) : (
          ""
        )}
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <div className={styles["form__input-container"]}>
          <input
            className={styles.form__input}
            type={showPassword ? "text" : "password"}
            name="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
          <img
            onClick={togglePasswordView}
            src={hidePassword}
            alt="hide password"
            className={styles.hide__icon}
          />
        </div>
        {isErrorPassword ? (
          <ul className="password__requirements">
            {passwordRequirements.map((req, index) => (
              <li key={index} style={{ color: req.valid ? "green" : "red" }}>
                {req.message} - {req.valid ? "✓" : "✗"}
              </li>
            ))}
          </ul>
        ) : (
          ""
        )}
      </div>

      <button className={styles.submit__btn} onClick={createUser}>Sign Up</button>

      <div className={styles["form__view-toggle"]}>
        <p className={styles.toggle__text}>
          Already have an account?
          <a className={styles.link} onClick={toggleSignUp}>
            Login 
          </a>
        </p>
      </div>
    </form>
  );
};

export default SignUp;
