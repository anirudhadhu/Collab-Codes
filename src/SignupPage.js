import React, { useState } from 'react';
import './SignupPage.css';

const SignupPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Submitting signup form with username: ${username}, email: ${email}, and password: ${password}`);
  };

  return (
    <div style={{ display : 'flex', color:'Black', flexDirection:'column', alignItems:'center', marginTop:'120px', borderRadius: '5px'}} className="signup">
    <form className="signup-form" onSubmit={handleSubmit} style={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20px'}}>
      <label style={{marginBottom: '10px'}}>
        Full Name
        <input type="text" value={username} onChange={handleUsernameChange} style={{padding: '15px', borderRadius: '15px', border: '2px solid gray', marginBottom: '20px', gap:'10px'}}/>
      </label>
      <label style={{marginBottom: '10px'}}>
        Email Address
        <input type="email" value={email} onChange={handleEmailChange} style={{padding: '15px', borderRadius: '15px', border: '2px solid gray', marginBottom: '20px'}}/>
      </label>
      <label style={{marginBottom: '20px'}}>
        Password:
        <input type="password" value={password} onChange={handlePasswordChange} style={{padding: '5px', borderRadius: '5px', border: '1px solid gray', marginBottom: '20px'}}/>
      </label>
      <button type="submit" style={{backgroundColor: 'black', color: 'white', padding: '10px 20px', borderRadius: '5px', border: 'none', cursor: 'pointer', transition: 'background-color 0.3s ease', marginBottom: '20px'}}>Sign up</button>
    </form>
  </div>
  
  
  );
};

export default SignupPage;
