import React from 'react'
import {Link} from 'react-router-dom'

function About()  {
  return (
    <>
    <div>This Is About</div>
     <Link to={"/"}><h4>Home</h4></Link>
    <Link to={"/contact"}><h4>Contact</h4></Link>
    </>
  )
}

export default About;
