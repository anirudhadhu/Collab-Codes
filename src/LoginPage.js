import React, { useState } from 'react';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Submitting login form with email: ${username} and password: ${password}`);
  };


  

  return (
    <div> 
      <h1>Tax Calculation system</h1>
      <div
      
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
        <h1>LogIn</h1>
        <div style={{ border: '5px solid black', borderRadius: 10, padding: '30px 50px', marginBottom: '20px' }}>
          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: '20px' }}>
              <input
                type="text"
                name="username"
                style={{ border: '2px solid #e8e8e8', padding: 15, borderRadius: 10, backgroundColor: '#212121', fontSize: 'small', fontWeight: 'bold', textAlign: 'center', color: 'white' }}
                className="input"
                placeholder="Enter your username"
                value={username}
                onChange={handleUsernameChange}
              />
            </div>
            <div style={{ marginBottom: '20px' }}>
              <input
                type="password"
                name="password"
                style={{ border: '2px solid #e8e8e8', padding: 15, borderRadius: 10, backgroundColor: '#212121', fontSize: 'small', fontWeight: 'bold', textAlign: 'center', color: '#e8e8e8' }}
                className="input"
                placeholder="Enter your password"
                value={password}
                onChange={handlePasswordChange}
              />
            </div>
            <button className="submit" type="submit" onClick={handleSubmit}  style={{ display: 'block', margin: '0 auto', border: 'none', backgroundColor: '#3d405b', color: '#FFFFFF', textAlign: 'center', fontSize: '17px', padding: '16px', width: '130px', borderRadius: '4px', cursor: 'pointer' }}>
              Login
            </button>
          </form>
        </div>
      </div>
      </div>
    );
    
};

export default LoginForm;
