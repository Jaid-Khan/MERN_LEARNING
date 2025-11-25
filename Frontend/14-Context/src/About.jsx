// Importing React and useContext hook
import { React, useContext } from 'react';

// Importing Link component for navigation without page refresh
import { Link } from 'react-router-dom';

// Importing the global UserContext to access shared state
import UserContext from './UserContext';

function About()  {

  // Accessing the global values from UserContext
  // 'a' is the global state value
  // 'setA' is the function used to update that value
  const { a, setA } = useContext(UserContext);

  return (
    <>
      {/* Page heading */}
      <div>This Is About</div>

      {/* Displaying the global value 'a' */}
      <h3>{a}</h3>

      {/* Navigation links */}
      <Link to={"/"}>
        <h4>Home</h4>
      </Link>

      <Link to={"/contact"}>
        <h4>Contact</h4>
      </Link>
    </>
  );
}

// Exporting About component so it can be used in routes
export default About;
