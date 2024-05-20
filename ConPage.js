import React, { useState } from 'react';
import axios from 'axios';
import {  Link } from 'react-router-dom';
const SignupForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:4000/user', { name, email, password })
      .then(result => {
        console.log(result);
        window.location.href = '/homee';
        // Redirect to home.js after successful form submission
        
      })
      .catch(err => console.log(err));
  };

  return (
    <div className='con' >
    <form onSubmit={handleSubmit}>
      <h1>Sign-Up</h1>
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          id="name"
          required
          onChange={(e)=>setName(e.target.value)}
          
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          id="email"
          required
          onChange={(e)=>setEmail(e.target.value)}
          
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          name="password"
          id="password"
          required
          onChange={(e)=>setPassword(e.target.value)}
         

        />
      </div>
      <Link to="/homee">
                    <button type='Submit' className="primary-button" 
                    onClick={handleSubmit}
                    required>log in</button> </Link>
      <Link to="/login"><p>Already have a account..?</p></Link>
    </form>
    </div>
  );
};

export default SignupForm;