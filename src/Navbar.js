import React from 'react';
import SignupPage from './SignupPage';
import ReactDOM from 'react-dom';
import LoginForm from './LoginPage';

const Navbar = () => {
  const handleLoginClick = () => {
    const loginWindow = window.open('', '_blank');           
    loginWindow.document.write('<html><head><title>Login</title></head><body></body></html>');
    ReactDOM.render(<LoginForm />, loginWindow.document.body);
  };

  const handleSignupClick = () => {
    const SignupWindow = window.open('', '_blank');
    SignupWindow.document.write('<html><head><title>Signup</title></head><body></body></html>');
    ReactDOM.render(<SignupPage />, SignupWindow.document.body);
  };

  return (
    <nav className="navbar">
      <div className="navbar__left">
        <img src={require('./images/1logo.png')} alt="Logo" style={{ width: "100px", height: "50px" }} />
      </div>
      <div className="navbar__right">
        <ul className="navbar__links">
          <li><a href="/">Home</a></li>
          <li><a href="/about">About Us</a></li>
          <li><a href="/instructions">Instructions</a></li>
          
          <li><button onClick={handleLoginClick}>Login</button></li>
          <li><button onClick={handleSignupClick}>Signup</button></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
