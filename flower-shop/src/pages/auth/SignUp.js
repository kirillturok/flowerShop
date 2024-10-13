import React, { useState } from 'react';
import './styles.css';

const SignUp = () => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = (e) => {
    e.preventDefault();
      console.log("User registered:", { name, username, password });
  };

  return (
    <div className="auth-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSignUp} className="auth-form">
        <div className="form-group">
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder='Name'
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder='Username'
            required
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Password'
            required
          />
        </div>
        <button type="submit" className="auth-button">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
