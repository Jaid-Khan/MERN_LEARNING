// Importing the useState Hook from React
// useState is used to manage state (data) in a functional component
import { useState } from 'react'

// Importing CSS file for styling
import './App.css'

// Declaring the main functional component named App
function App() {

  // Declaring a state variable 'count' with its updater function 'setCount'
  // Initially, count = 0
  const [count, setCount] = useState(0)


  // ---------------------- AUTO INCREMENT EXAMPLE (Commented Out) ----------------------
  // This code would automatically increase count by 1 every second (1000ms)
  // It is commented out to avoid continuous re-rendering
  /*
  setTimeout(() => {
    setCount(count + 1)
  }, 1000)
  */


  // ---------------------- INCREMENT FUNCTION ----------------------
  // When called, increases the count value by 1
  const increment = () => {
    setCount(count + 1)
  }


  // ---------------------- DECREMENT FUNCTION ----------------------
  // Decreases count by 1, but prevents it from going below 0
  const decrement = () => {

    // Using ternary operator:
    // If count is greater than 0 → reduce it by 1
    // Else → keep it at 0 (don’t go negative)
    count > 0 ? setCount(count - 1) : setCount(0)
  }


  // ---------------------- JSX RETURN ----------------------
  // Everything inside return is what gets displayed on the browser
  return (
    <>
      {/* Displaying the current value of 'count' */}
      <h1>Count: {count}</h1>

      {/* Button to call increment() when clicked */}
      <button onClick={increment}>Increment</button>

      {/* Button to call decrement() when clicked */}
      <button onClick={decrement}>Decrement</button>
    </>
  )
}

// Exporting App component so it can be used in main.jsx (entry point)
export default App
