import React from "react";
import ReactDOM from "react-dom";
import LoginForm from "./Login";
import AboutUs from "./AboutUs";
import Homepage from "./homepage";
import InstructionPage from "./Instructions";

const Navbar = () => {
  const handleLoginClick = () => {
    ReactDOM.render(<LoginForm />, document.body);
  };

  const handleAboutUsClick = () => {
    ReactDOM.render(<AboutUs />, document.body);
  };

  const handleHomeClick = () => {
    ReactDOM.render(<Homepage />, document.body);
  };

  const handleInsClick = () => {
    ReactDOM.render(<InstructionPage />, document.body);
  };

  return (
    <nav className="navbar">
      <div className="navbar__left">
        <img
          src={require("./images/1logo.png")}
          alt="Logo"
          style={{ width: "100px", height: "50px" }}
        />
      </div>
      <div className="navbar__right">
        <ul className="navbar__links">
          {/* <li><a href="/">Home</a></li>
          <li><a href="/about">About Us</a></li>
          <li><a href="/instructions">Instructions</a></li> */}
          <li>
            <button onClick={handleHomeClick}>Home</button>
          </li>
          <li>
            <button onClick={handleAboutUsClick}>About Us</button>
          </li>
          <li>
            <button onClick={handleInsClick}>Instructions</button>
          </li>
          <li>
            <button onClick={handleLoginClick}>Sign Out</button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
