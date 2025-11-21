import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [students, setStudents] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/students")
      .then((res) => setStudents(res.data))
      .catch((err) => console.error("Error fetching students:", err));
  }, []); // empty dependency array => runs only once

  return (
    <div>
      <h2>Students Data</h2>

      {students.length > 0 ? (
        <table border={2} width={500}>
          <thead>
            <tr>
              {Object.keys(students[0]).map((key, index) => (
                <th key={index}>{key}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {students.map((student, i) => (
              <tr key={i}>
                {Object.values(student).map((val, j) => (
                  <td key={j}>{val}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
}

export default App;
