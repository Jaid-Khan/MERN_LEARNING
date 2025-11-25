// Importing useState hook for creating and managing component state
import { useState } from "react";

// Importing global CSS for styling the entire app
import "./App.css";

// Importing our custom UserContext to share data across components
import UserContext from "./UserContext";

// Importing tools from React Router to enable page navigation
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Importing all the pages that will be displayed using routing
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";

function App() {

  // Creating state 'a' that will be shared globally using context
  // a = value
  // setA = function to update the value
  const [a, setA] = useState(10);

  return (
    <>
      {/* 
        Wrapping entire app inside UserContext.Provider 

        -> This makes 'a' and 'setA' available in ALL components inside it.
        -> Any component (Home, About, Contact) can use useContext(UserContext)
           to read and update 'a'.
      */}
      <UserContext.Provider value={{ a, setA }}>

        {/* BrowserRouter allows navigation between pages without reloading */}
        <BrowserRouter>

          {/* Routes holds all Route definitions */}
          <Routes>

            {/* Mapping each path to its component */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />

          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </>
  );
}

// Exporting App so it can be rendered in main.jsx
export default App;
