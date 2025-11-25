// Importing React so JSX can work in this file
import React from "react";

// Importing useContext hook so we can access global context values
import { useContext } from "react";

// Importing our custom UserContext (global state)
import UserContext from "./UserContext";

// Importing Link component to navigate between pages without refresh
import { Link } from "react-router-dom";

function Home() {

  // Extracting values `a` and function `setA` from UserContext
  // `a` = current value stored in context
  // `setA` = function to update that value
  const { a, setA } = useContext(UserContext);

  return (
    <>
      {/* Header text */}
      <div>This Is Home</div>

      {/* Showing the current value of 'a' from context */}
      <h3>{a}</h3>

      {/* Button to increase the context value 'a' by 1 */}
      <button
        onClick={() => {
          // Updating the global value 'a' using context
          setA(a + 1);
        }}
      >
        Increase Count
      </button>

      <br />

      {/* Link to navigate to About page */}
      <Link to={"/about"}>
        <h4>About</h4>
      </Link>

      {/* Link to navigate to Contact page */}
      <Link to={"/contact"}>
        <h4>Contact</h4>
      </Link>
    </>
  );
}

// Exporting Home component so it can be used in other files
export default Home;
