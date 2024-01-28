import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSignIn = async () => {
    try {
      const response = await fetch('http://localhost:8080/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
      });

      if (!response.ok) {
        throw new Error('Login failed');
      }

      const data = await response.json();
      console.log('Login successful!', data);

      // Redirect to home page upon successful login
      navigate('/');
    } catch (error) {
      console.error('Error during login:', error.message);
      setError('Incorrect email or password. Please try again.');
    }
  };

  return (
    <div style={{marginTop:"70px"}}>
      <h2>Sign In</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <div>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={loginData.email}
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={loginData.password}
            onChange={handleChange}
          />
        </label>
      </div>
      <button onClick={handleSignIn}>Sign In</button>
    </div>
  );
};

export default SignIn;
