import React from 'react'
import {Link} from 'react-router-dom'


function Contact()  {
  return (
    <>
    <div>This Is Contact Logged In</div>
     <Link to={"/"}><h4>Home</h4></Link>
    <Link to={"/about"}><h4>About</h4></Link>
    </>
  )
}

export default Contact;
