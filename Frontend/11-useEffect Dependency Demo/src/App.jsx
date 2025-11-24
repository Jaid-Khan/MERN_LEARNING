// App.jsx — Demonstrating how useEffect depends on a specific state (a)

import { useState, useEffect } from "react";
import "./App.css";

function App() {
  // React states
  const [a, setA] = useState(99);
  const [b, setB] = useState(100);

  // Simple variables (not state)
  let num1 = 10;
  let num2 = 20;

  // useEffect runs ONLY when "a" changes
  useEffect(() => {
    console.log(num1 + num2); // Prints 30
  }, [a]); // dependency = a

  // Update state A
  const ca = () => {
    setA(100);
  };

  // Update state B
  const cb = () => {
    setB(110);
  };

  return (
    <>
      <h1>{a}</h1>
      <h1>{b}</h1>

      {/* Buttons to update state */}
      <button onClick={ca}>Change A</button>
      <button onClick={cb}>Change B</button>
    </>
  );
}

export default App;
