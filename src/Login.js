import React, { useState } from "react";
import Homepage from "./homepage";
import ReactDOM from "react-dom";
import SignupPage from "./SignUp";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AdminPanel from "./admin";

const LoginForm = () => {
  const [email, setemailname] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setLoading] = useState(false);

  const handleEmailChange = (event) => {
    setemailname(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleHomeClick = () => {
    setLoading(true);
    fetch("https://taxcalc.onrender.com/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email, password: password }),
    })
      .then((response) => {
        if (response.ok) {
          console.log("Login successful");
          // store the access token to local storage
          response.json().then((data) => {
            localStorage.setItem("accessToken", data.access_token);
            if (data.role === "admin") {
              ReactDOM.render(<AdminPanel />, document.body);
            } else {
              ReactDOM.render(<Homepage />, document.body);
            }
          });
        } else {
          setLoading(false);

          response.json().then((data) => {
            toast.error(data.message, {
              position: toast.POSITION.TOP_RIGHT,
            });
            console.log(data.message);

            console.error("Login failed");
          });
        }
      })
      .catch((error) => console.error(error));
  };

  const handleSignUpClick = () => {
    ReactDOM.render(<SignupPage />, document.body);
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
        <h3>LogIn</h3>
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
          <form>
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
                placeholder="Enter your Email"
                value={email}
                onChange={handleEmailChange}
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

            <div className="signup ">
              Don't Have an account?
              <button
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
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
