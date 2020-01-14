import React from 'react'

import './navbar.css'
import Login from './Login'

const NavBar = () => {

  return(
    <div className='shader'>
      <a className='tag' href ='http://localhost:3000/home'>home</a>
      <a className='tag' href='http://localhost:3000/add'>post</a>
      <Login />
    </div>
  )
}

export default NavBar;