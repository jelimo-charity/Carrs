import React, { useState } from 'react';
import './landing.css'; // Import the CSS file

const LandingPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = (event) => {
    event.preventDefault();
    // Handle sign-in logic here
    console.log('Sign in with:', email, password);
  };

  return (
    <div className="landing-container">
      <div>
        <h1 className="landing-heading">Welcome to Car Rentals</h1>
        <p className="landing-text">Explore our wide range of rental cars and book your next adventure!</p>
      </div>
      <div>
        <form className="landing-form" onSubmit={handleSignIn}>
          <label>
            Email:
            <input
              className="landing-input"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
          <label>
            Password:
            <input
              className="landing-input"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>
          <button className="landing-button" type="submit">Sign In</button>
        </form>
        <p className="landing-link">Do not have an account? <a href="/signup">Signup</a></p>
      </div>
    </div>
  );
};

export default LandingPage;
