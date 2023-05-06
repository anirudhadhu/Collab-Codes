import React, { useState } from "react";
import Homepage from "./homepage";
import ReactDOM from "react-dom";
import SignupPage from "./SignUp";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(
      `Submitting login form with email: ${username} and password: ${password}`
    );
  };

  const handleHomeClick = () => {
    ReactDOM.render(<Homepage />, document.body);
  };

  const handleSignUpClick = () => {
    ReactDOM.render(<SignupPage />, document.body);
  };

  return (
    <div>
      <h2>Tax Calculation system</h2>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "80vh",
        }}
      >
        <h3>LogIn</h3>
        <div
          style={{
            border: "5px solid black",
            borderRadius: 10,
            padding: "30px 50px",
            marginBottom: "20px",
          }}
        >
          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: "20px" }}>
              <input
                type="text"
                name="username"
                style={{
                  border: "2px solid black",
                  padding: 15,
                  borderRadius: 10,
                  backgroundColor: "white",
                  fontSize: "small",
                  fontWeight: "bold",
                  textAlign: "center",
                  color: "black",
                }}
                className="input"
                placeholder="Enter your username"
                value={username}
                onChange={handleUsernameChange}
              />
            </div>
            <div style={{ marginBottom: "20px" }}>
              <input
                type="password"
                name="password"
                style={{
                  border: "2px solid black",
                  padding: 15,
                  borderRadius: 10,
                  backgroundColor: "white",
                  fontSize: "small",
                  fontWeight: "bold",
                  textAlign: "center",
                  color: "black",
                }}
                className="input"
                placeholder="Enter your password"
                value={password}
                onChange={handlePasswordChange}
              />
            </div>
            <button
              className="submit"
              type="submit"
              onClick={handleHomeClick}
              style={{
                display: "block",
                margin: "0 auto",
                border: "black",
                backgroundColor: "black",
                color: "white",
                textAlign: "center",
                fontSize: "17px",
                padding: "16px",
                width: "130px",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              Login
            </button>
            <br></br>

            <div class="signup ">
              Don't Have an account?
              <button2
                className="submit"
                type="submit"
                onClick={handleSignUpClick}
                style={{
                  position: "center",
                  display: "block",
                  margin: "0 auto",
                  border: "black",
                  backgroundColor: "black",
                  color: "white",
                  textAlign: "center",
                  fontSize: "14px",
                  padding: "10px",
                  width: "50px",
                  borderRadius: "4px",
                  cursor: "pointer",
                }}
              >
                Sign Up
              </button2>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
