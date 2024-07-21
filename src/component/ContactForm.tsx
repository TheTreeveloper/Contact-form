import { useState } from "react";
import styles from "./ContactForm.module.css";

function ContactForm() {
  const [errorMessageFirst, setErrorMessageFirst] = useState<string>("");
  const [errorMessageLast, setErrorMessageLast] = useState<string>("");
  const [errorMessagePassword, setErrorMessagePassword] = useState<string>("");
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");

  function handleFirstNameChange(e: React.ChangeEvent<HTMLInputElement>) {
    setFirstName(e.target.value);
  }

  function handleLastNameChange(e: React.ChangeEvent<HTMLInputElement>) {
    setLastName(e.target.value);
  }

  function handleEmailValidation(e: React.ChangeEvent<HTMLInputElement>) {
    setEmail(e.target.value);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(e.target.value)) {
      setEmailError("Looks like this is not an email");
    } else {
      setEmailError("");
    }
  }

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (firstName === "") {
      setErrorMessageFirst("First name cannot be empty");
    } else {
      setErrorMessageFirst("");
    }

    if (lastName === "") {
      setErrorMessageLast("Last name cannot be empty");
    } else {
      setErrorMessageLast("");
    }

    if (password === "") {
      setErrorMessagePassword("Password cannot be empty");
    } else {
      setErrorMessagePassword("");
    }

    if (email === "") {
      setEmailError("Looks like this is not an email");
    }

    if (firstName && lastName && email && password) {
      console.log(firstName, lastName, email, password);
    }
  }

  return (
    <div className={styles.container}>
      <button className={styles.trial}>
        <span>Try it for free 7 days</span> then $20/mo. thereafter
      </button>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={handleFirstNameChange}
        />

        {errorMessageFirst && (
          <img
            src="images/icon-error.svg"
            alt="error"
            className={styles.errorIcon}
          />
        )}

        <p className={styles.error}>{errorMessageFirst}</p>

        {/* ----LAST NAME INPUT ------ */}
        <input
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={handleLastNameChange}
        />
        {errorMessageLast && (
          <img
            src="images/icon-error.svg"
            alt="error"
            className={styles.errorIcon2}
          />
        )}
        <p className={styles.error}>{errorMessageLast}</p>

        {/* -----EMAIL ADDRESS FIELD----- */}
        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={handleEmailValidation}
        />
        {emailError && (
          <img
            src="images/icon-error.svg"
            alt="error"
            className={styles.errorIcon3}
          />
        )}
        <p className={styles.error}>{emailError}</p>

        {/* -----PASSWORD FIELD----- */}
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
        />

        {errorMessagePassword && (
          <img
            src="images/icon-error.svg"
            alt="error"
            className={styles.errorIcon4}
          />
        )}

        <p className={styles.error}>{errorMessagePassword}</p>
        <button type="submit">CLAIM YOUR FREE TRIAL</button>
        <p className={styles.terms}>
          By clicking the button, you are agreeing to our{" "}
          <span>Terms and Services</span>
        </p>
      </form>
    </div>
  );
}

export default ContactForm;
