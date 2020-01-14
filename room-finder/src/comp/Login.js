import React from 'react'

import './login.css'

const Login = () => {
  return (
    <div className='login'>
      <section className='logins'>
      <a className='tag' href='http://localhost:3000/home'>
        Login
      </a>
      </section>
      <section className='signups'>
      <a className='tag' href='http://localhost:3000/home'> 
      Sign up 
      </a>
      </section>
    </div>
  )
}
export default Login;