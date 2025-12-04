import React from 'react'
import { Link } from 'react-router-dom'
import "./header.css"

function Header() {
  return (
    <div className='Header'>
        <nav className='nav'>
            <Link to="/">Home</Link>
            <Link to="/liked">Liked Movies</Link>
            <Link to="/signup">Signup</Link>
            <Link to="/login">Login</Link>
        </nav>
    </div>
  )
}

export default Header