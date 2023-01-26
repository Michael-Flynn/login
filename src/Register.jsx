import React, { useState } from 'react'

export const Register = (props) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(email)
  }
  return (
    <div className='auth-form-container'>
        <h2>Register</h2>
      <form className='register-form' onSubmit={handleSubmit}>
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
        <label for='name'>Full Name</label>
        <input
            value={name}
            onChange={(e) => setName}
            type="text"
            name='name'
            id='name'
            placeholder='John Doe'
        />
        <button>Sign Up</button>
      </form>
      <button className='link-btn' onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button>
    </div>
  )
}
