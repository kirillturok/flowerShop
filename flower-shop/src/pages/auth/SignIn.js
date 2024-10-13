import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';
import authStore from '../../stores/AuthStore';
import './styles.css';

const SignIn = observer(() => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = (e) => {
    e.preventDefault();
    // You can add additional validation here
    authStore.signIn(username, password);
  };

  return (
    <div className="auth-container">
      <h2>Sign In</h2>
      <form onSubmit={handleSignIn} className="auth-form">
        <div className="form-group">
          <input
            type="text"
            id="username"
            value={username}
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
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
        <button type="submit" className="auth-button">Sign In</button>
      </form>
    </div>
  );
});

export default SignIn;
