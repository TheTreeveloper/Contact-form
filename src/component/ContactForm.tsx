import { useState } from "react";

function ContactForm() {
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [errorMessagePassword, setErrorMessagePassword] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setUsername(e.target.value);
  }

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (username === "") {
      setErrorMessage("Please enter a username");
    } else {
      setErrorMessage("");
    }

    if (password === "") {
      setErrorMessagePassword("Password is required");
    } else {
      setErrorMessagePassword("");
    }

    if (username && password) {
      console.log(username, password);
    }
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
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ContactForm;
