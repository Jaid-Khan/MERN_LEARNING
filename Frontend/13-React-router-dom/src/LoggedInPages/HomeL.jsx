// Importing React (needed for JSX)
import React from 'react'

// Importing Link component for navigation without page refresh
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
      {/* Simple text showing this is the logged-in home page */}
      <div>This Is Home Logged In</div>

      {/* Link redirects to the About page when clicked */}
      <Link to={"/about"}>
        <h4>About</h4>
      </Link>

      {/* Link redirects to the Contact page when clicked */}
      <Link to={"/contact"}>
        <h4>Contact</h4>
      </Link>
    </>
  )
}

export default Home;
