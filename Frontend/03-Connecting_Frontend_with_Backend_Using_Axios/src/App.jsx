// Importing the CSS file for styling
import './App.css'

// Importing Axios library to make HTTP requests to the backend
import axios from "axios"

// Main functional component of the React app
function App() {

  // Sending a GET request to the backend (Express server)
  // URL: http://localhost:3000/students?s=mohit
  // The backend will respond with Mohit's data (age and course)
  axios.get("http://localhost:3000/students?s=mohit").then((res) => {

    // Logging the response data (student details) in the browser console
    console.log(res.data)

  })

  // JSX that defines what gets displayed on the screen
  return (
    <>
      
      <h1>This is Frontend</h1>
    
    </>
  )
}

// Exporting the App component as default so it can be rendered in main.jsx
export default App
