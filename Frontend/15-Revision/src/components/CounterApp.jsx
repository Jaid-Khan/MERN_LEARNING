import React from "react";
import { useState, useEffect } from "react";
import "./CounterApp.css";

function CounterApp() {
  
  // ----------------------------------------------------
  // useState:
  // Creates a state variable "count" with initial value 0.
  // setCount() is used to update the "count" value.
  // ----------------------------------------------------
  const [count, setCount] = useState(0);

  // ----------------------------------------------------
  // useEffect:
  // This effect runs ONLY ONCE because the dependency array is empty [].
  // That means: run the effect when component loads (mounts) for the first time.
  // It will NOT run again, even if count changes.
  // ----------------------------------------------------
  useEffect(() => {
    console.log("CounterApp mounted! Initial count:", count);
  }, []); // Empty array → run only once

  // ----------------------------------------------------
  // increment():
  // Increases count by 1 whenever the + button is clicked.
  // ----------------------------------------------------
  function increment() {
    setCount(count + 1);
  }

  // ----------------------------------------------------
  // decrement():
  // Decreases count by 1, but only if count > 0,
  // so the value never goes below zero.
  // ----------------------------------------------------
  function decrement() {
    if (count > 0) setCount(count - 1);
  }

  return (
    <>
      <div className="container">
        <h1>CounterApp</h1>

        {/* Counter UI section */}
        <div className="counter-container">

          {/* Decrease button */}
          <button onClick={decrement}>-</button>

          {/* Display current count */}
          <span>{count}</span>

          {/* Increase button */}
          <button onClick={increment}>+</button>

        </div>
      </div>
    </>
  );
}

export default CounterApp;
