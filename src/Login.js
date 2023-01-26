import React, { useState } from 'react';
import PropTypes from 'prop-types';

async function loginUser(credentials) {
  return fetch('http://localhost:8080/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
 }

export default function Login ({ setToken }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async e => {
    e.preventDefault()
    const token = await loginUser({
      email, 
      password
    });
    setToken(token);
  }
  return (
    <div className='auth-form-container'>
        <h2>Login</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <label for="email">Email</label>
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="youremailhere@gmail.com"
          id="email"
          name="email"
        />
        <label for="password">Password</label>
        <input
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="*********"
          id="password"
          name="password"
        />
        <button type='submit'>Log In</button>
      </form>
       {/*<button className='link-btn' onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here.</button>*/}
    </div>
  )
}
Login.propTypes = {
  setToken: PropTypes.func.isRequired
}