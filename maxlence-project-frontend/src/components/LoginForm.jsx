import React from 'react'

const LoginForm = () => {
  return (
    <form className='d-flex flex-column gap-3 p-3'>
        <input type="text"  className='form-control' placeholder='Email'/>
        <input type="text"  className='form-control' placeholder='Password'/>
        <button className='btn btn-primary'>LOG IN</button>
        <p>Dont't have an account? <a href="/signup">Sign Up</a> </p>
    </form>
  )
}

export default LoginForm