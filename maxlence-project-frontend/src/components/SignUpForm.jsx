import React from 'react'

const SignUpForm = () => {
  return (
    <form className='d-flex flex-column gap-3 p-3'>
        <input type="text" name="" id="" className='form-control' placeholder='Username'/>
        <input type="text" name="" id="" className='form-control' placeholder='Email'/>
        <input type="password" className='form-control' placeholder='Password'/>
        <button className='btn btn-primary'>SIGN UP</button>
        <p>Already have an account? <a href="/login">Log In</a> </p>
    </form>
  )
}

export default SignUpForm