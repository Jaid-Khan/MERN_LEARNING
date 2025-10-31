// Importing useState hook from React
import { useState } from "react";
// Importing external CSS file for styling
import "./App.css";
// Importing Component class (not used here, but available for class components)
import { Component } from "react";

// Main App component
function App() {
  // State to track login status (true/false)
  const [isloggedIn, setIsLoggedIn] = useState(false); // For login conditional rendering

  // State to show/hide box (for demonstration, toggles after 3 seconds)
  const [box, setBox] = useState(true); // For box visibility

  // Changes 'box' state after 3 seconds
  setTimeout(() => {
    console.log("rendered"); // Logs every 3 seconds due to re-render
    setBox(false); // Hides box after 3 seconds
  }, 3000);

  // JSX returned to render UI
  return (
    <>
      {/* Displays message based on login status */}
      <h1>{isloggedIn ? "Welcome User !" : "You are Not logged In Please Log In "}</h1>

      {/* Button toggles login state */}
      <button onClick={() => setIsLoggedIn(!isloggedIn)}>
        {isloggedIn ? "Log Out" : "Log In"}
      </button>
    </>
  );
}

// Exporting component as default
export default App;
