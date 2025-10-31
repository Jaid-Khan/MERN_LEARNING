// Importing useState hook from React
import { useState } from 'react'

// Importing axios for API calls
import axios from "axios"

// Importing CSS file for styling
import './App.css'

// Main component
function App() {

  // State to store API response data
  const [a, setA] = useState("");

  // Fetching data from backend API
  axios.get("http://localhost:3000/students?s=ankit").then((res) => {
    console.log(res.data)   // Logs fetched data
    setA(res.data)          // Updates state with API data
  })

  // Rendering fetched data in UI
  return (
    <>
      <h3>Name: {a.name}</h3>
      <h3>Age: {a.age}</h3>
      <h3>Course: {a.course}</h3>
      <h3>Gender: {a.gender}</h3>
    </>
  )
}

// Exporting component
export default App
