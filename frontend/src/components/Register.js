import React, { useState } from 'react';
import './Authpage.css';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle register logic here
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2 className="auth-title">Register now to get access</h2>
        <form onSubmit={handleSubmit} className="auth-form">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="auth-input"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="auth-input"
            required
          />
          <button type="submit" className="auth-btn">Register</button>
        </form>
      </div>
    </div>
  );
};

export default Register;

