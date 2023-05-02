import React, { useState } from 'react';

const SignupPage = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Submitting signup form with first name: ${firstName}, last name: ${lastName}, email: ${email}, password: ${password}, confirm password: ${confirmPassword}`);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <div style={{ border: '5px solid black', borderRadius: 10, padding: '30px 50px', marginBottom: '20px' }}>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '20px' }}>
            <input
              type="text"
              name="firstName"
              style={{ border: '2px solid #e8e8e8', padding: 15, borderRadius: 10, backgroundColor: '#212121', fontSize: 'small', fontWeight: 'bold', textAlign: 'center', color: 'white' }}
              className="input"
              placeholder="Enter your first name"
              value={firstName}
              onChange={handleFirstNameChange}
            />
          </div>
          <div style={{ marginBottom: '20px' }}>
            <input
              type="text"
              name="lastName"
              style={{ border: '2px solid #e8e8e8', padding: 15, borderRadius: 10, backgroundColor: '#212121', fontSize: 'small', fontWeight: 'bold', textAlign: 'center', color: 'white' }}
              className="input"
              placeholder="Enter your last name"
              value={lastName}
              onChange={handleLastNameChange}
            />
          </div>
          <div style={{ marginBottom: '20px' }}>
            <input
              type="email"
              name="email"
              style={{ border: '2px solid #e8e8e8', padding: 15, borderRadius: 10, backgroundColor: '#212121', fontSize: 'small', fontWeight: 'bold', textAlign: 'center', color: 'white' }}
              className="input"
              placeholder="Enter your email address"
              value={email}
              onChange={handleEmailChange}
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
              <div style={{ marginBottom: '20px' }}>
          <input
               type="password"
               name="password"
               style={{ border: '2px solid #e8e8e8', padding: 15, borderRadius: 10, backgroundColor: '#212121', fontSize: 'small', fontWeight: 'bold', textAlign: 'center', color: '#e8e8e8' }}
                className="input"
                placeholder="Confirm your password "
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
/>

              </div>
              <button className="submit" type="submit" onClick={handleSubmit}  style={{ display: 'block', margin: '0 auto', border: 'none', backgroundColor: '#3d405b', color: '#FFFFFF', textAlign: 'center', fontSize: '17px', padding: '16px', width: '130px', borderRadius: '4px', cursor: 'pointer' }}>
              Signup
            </button>
              </form>

              </div>
              </div>
  
    
  );
}

export default SignupPage;
