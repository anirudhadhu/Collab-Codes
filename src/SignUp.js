import React, { useState } from "react";
import ReactDOM from "react-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoginForm from "./Login";

const SignupPage = () => {
  const [Username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setLoading] = useState(false);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    fetch("https://taxcalc.onrender.com/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: Username,
        email: email,
        password: password,
      }),
    })
      .then((response) => {
        if (response.ok) {
          console.log("Sign up successful");
          // redirect the user to the home page
          ReactDOM.render(<LoginForm />, document.body);
        } else {
          setLoading(false);
          response.json().then((data) => {
            toast.error(data.message, {
              position: toast.POSITION.TOP_LEFT,
            });
            console.log(data.message);
          });
        }
      })
      .catch((error) => console.error(error));
  };

  const handleLoginClick = () => {
    ReactDOM.render(<LoginForm />, document.body);
  };
  return isLoading ? (
    // Loading screen
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
        <h3> Sign Up</h3>
        <h4> Hello there! Signin and start calculating your taxes</h4>
        <div
          style={{
            border: "5px solid black",
            borderRadius: 10,
            padding: "30px 50px",
            marginBottom: "20px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <p>Loading...</p>
        </div>
      </div>
    </div>
  ) : (
    <div>
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
          <h3> Sign Up</h3>
          <h4> Hello there! Signin and start calculating your taxes</h4>
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
                  name="Username"
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
                  placeholder="Enter username"
                  value={Username}
                  onChange={handleUsernameChange}
                />
              </div>
              <div
                style={{
                  position: "fixed",
                  width: "100px",
                  height: "100px",
                  left: "100px",
                  top: "0px",
                }}
              ></div>

              <div style={{ marginBottom: "20px" }}>
                <input
                  type="email"
                  name="email"
                  style={{
                    border: "2px solid #black",
                    padding: 15,
                    borderRadius: 10,
                    backgroundColor: "white",
                    fontSize: "small",
                    fontWeight: "bold",
                    textAlign: "center",
                    color: "black",
                  }}
                  className="input"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={handleEmailChange}
                />
              </div>
              <div style={{ marginBottom: "20px" }}>
                <input
                  type="password"
                  name="password"
                  style={{
                    border: "2px solid #black",
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
                onClick={handleSubmit}
                style={{
                  display: "block",
                  margin: "0 auto",
                  border: "black",
                  backgroundColor: "none",
                  color: "white",
                  textAlign: "center",
                  fontSize: "17px",
                  padding: "16px",
                  width: "130px",
                  borderRadius: "4px",
                  cursor: "pointer",
                }}
              >
                Signup
              </button>
              <br></br>
              <div className="Login ">
                Already Have an account?
                <button
                  className="submit"
                  type="submit"
                  onClick={handleLoginClick}
                  style={{
                    display: "block",
                    margin: "0 auto",
                    border: "black",
                    backgroundColor: "black",
                    color: "white",
                    textAlign: "center",
                    fontSize: "15px",
                    padding: "10px",
                    width: "50px",
                    borderRadius: "4px",
                    cursor: "pointer",
                  }}
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
