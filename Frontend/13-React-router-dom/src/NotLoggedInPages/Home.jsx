// Importing React so we can use JSX
import React from 'react'

// Importing Link from react-router-dom
// Link is used for navigation WITHOUT reloading the page
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
      {/* Main heading or message of the Home page */}
      <div>This Is Home</div>

      {/* Navigation Link that takes user to the About page */}
      <Link to={"/about"}>
        <h4>About</h4>
      </Link>

      {/* Navigation Link that takes user to the Contact page */}
      <Link to={"/contact"}>
        <h4>Contact</h4>
      </Link>
    </>
  )
}

export default Home;
