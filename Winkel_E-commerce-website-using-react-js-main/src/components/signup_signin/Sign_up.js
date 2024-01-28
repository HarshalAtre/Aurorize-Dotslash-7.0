import React, { useState } from 'react';

const Signup = () => {
  const [userData, setUserData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSignup = async () => {
    try {
      const response = await fetch('http://localhost:8080/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        throw new Error('Signup failed');
      }

      const data = await response.json();
      console.log('Signup successful!', data);
    } catch (error) {
      console.error('Error during signup:', error.message);
    }
  };

  return (
    <div style={{marginTop:"70px"}}>
      <h2>Signup</h2>
      <div>
        <label>
          First Name:
          <input
            type="text"
            name="firstName"
            value={userData.firstName}
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <label>
          Last Name:
          <input
            type="text"
            name="lastName"
            value={userData.lastName}
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={userData.email}
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
            value={userData.password}
            onChange={handleChange}
          />
        </label>
      </div>
      <button onClick={handleSignup}>Signup</button>
    </div>
  );
};

export default Signup;
