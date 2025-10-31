// Importing React hook (optional) and CSS for styling
import { useState } from 'react';
import './App.css';

// Importing event handler functions from Functions.js
import { click, dbl_Click, mouseEnter, mouseLeave } from "./Functions";

// Main functional component
function App() {
  return (
    <>
      {/* Button triggers click() when clicked once */}
      <button onClick={click}>Click Me!</button>

      {/* Button triggers dbl_Click() when double-clicked */}
      <button onDoubleClick={dbl_Click}>Double Click Me!</button>

      {/* Button triggers mouseEnter() when mouse enters */}
      <button onMouseEnter={mouseEnter}>Enter Mouse Here</button>

      {/* Button triggers mouseLeave() when mouse leaves */}
      <button onMouseLeave={mouseLeave}>Leave Mouse From Here</button>
    </>
  );
}

// Exporting App component as default
export default App;
