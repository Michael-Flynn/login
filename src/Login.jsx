import React, { useState } from 'react'

export const Login = (props) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(email)
  }
  return (
    <div className='auth-form-container'>
        <h2>Login</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <label for="email">Email</label>
        <input
          value={email}
          onChange={(e) => setEmail}
          type="email"
          placeholder="youremailhere@gmail.com"
          id="email"
          name="email"
        />
        <label for="password">Password</label>
        <input
          value={password}
          onChange={(e) => setPassword}
          type="password"
          placeholder="*********"
          id="password"
          name="password"
        />
        <button>Log In</button>
      </form>
      <button className='link-btn' onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here.</button>
    </div>
  )
}
