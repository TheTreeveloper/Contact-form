import { useState } from "react";

function ContactForm() {
  const [errorMessage, setErrorMessage] = useState("");
  const [errorMessagePassword, setErrorMessagePassword] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleInputChange(e) {
    setUsername(e.target.value);
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  function handleSubmit(e) {
    e.preventDefault();
    if (username === "" || password === "") {
      setErrorMessage("Please enter a username");
      setErrorMessagePassword("Password is required");
    } else {
      setErrorMessage("");
      setErrorMessagePassword("");
    }
    console.log(username, password);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter username"
          value={username}
          onChange={handleInputChange}
        />

        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={handlePasswordChange}
        />
        <p>{errorMessage}</p>
        <p>{errorMessagePassword}</p>
        <button onChange={handleSubmit}>Submit</button>
      </form>
    </div>
  );
}

export default ContactForm;
