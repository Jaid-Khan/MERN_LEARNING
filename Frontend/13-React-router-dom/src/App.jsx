// Importing useState for managing component state
import { useState } from "react";

// Importing CSS file for styling
import "./App.css";

// Importing BrowserRouter, Routes, and Route for page navigation
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Importing pages that will be shown when user is NOT logged in
import Home from "./NotLoggedInPages/Home";
import About from "./NotLoggedInPages/About";
import Contact from "./NotLoggedInPages/Contact";

// Importing pages that will be shown when user IS logged in
import HomeL from "./LoggedInPages/HomeL";
import AboutL from "./LoggedInPages/AboutL";
import ContactL from "./LoggedInPages/ContactL";

function App() {
  // Creating a state 'loggedIn' to track user login status
  // If loggedIn = true → Show logged-in pages
  // If loggedIn = false → Show normal (public) pages
  const [loggedIn, setLoggedIn] = useState(true);

  return (
    <>
      {/* BrowserRouter enables routing in React */}
      <BrowserRouter>

        {/* If loggedIn is TRUE, load logged-in routes, otherwise load public routes */}
        {loggedIn ? (
          /* Routes shown ONLY when user is logged in */
          <Routes>
            {/* Logged-in Home page */}
            <Route path="/" element={<HomeL />} />

            {/* Logged-in About page */}
            <Route path="/about" element={<AboutL />} />

            {/* Logged-in Contact page */}
            <Route path="/contact" element={<ContactL />} />
          </Routes>
        ) : (
          /* Routes shown ONLY when user is NOT logged in */
          <Routes>
            {/* Public Home page */}
            <Route path="/" element={<Home />} />

            {/* Public About page */}
            <Route path="/about" element={<About />} />

            {/* Public Contact page */}
            <Route path="/contact" element={<Contact />} />
          </Routes>
        )}
      </BrowserRouter>
    </>
  );
}

export default App;
