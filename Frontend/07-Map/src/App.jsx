// Importing useState hook from React for managing state
import { useState } from "react";

// Importing external CSS file for styling
import "./App.css";

// Defining main App component
function App() {

  // useState hook stores an array of hero objects (each with name, age, gender)
  const [arr, newArr] = useState([
    { name: "Tony", age: 27, gender: "male" },
    { name: "Captain America", age: 27, gender: "male" },
    { name: "Hulk", age: 28, gender: "male" },
    { name: "Thor", age: 26, gender: "male" },
  ]);

  // JSX returned from the component
  return (
    <>
      {/* 
        Commented-out old example:
        Maps over a simple array of strings and displays each hero name with its index
      */}
      {/* {a.map((item, index)=>(
          <h1>{item} {index}</h1>
      ))} */}

      {/* Table to display hero data */}
      <table border={2} width={500}>
        <thead>
          <tr>
            {/* 
              Creates table headers dynamically using keys from the first object
              Object.keys(arr[0]) → ["name", "age", "gender"]
            */}
            {Object.keys(arr[0]).map((key, index) => {
              return <th key={index}>{key}</th>;  // Each header cell
            })}
          </tr>
        </thead>

        <tbody>
          {/* Loops through each object (row) in arr */}
          {arr.map((value, i) => {
            return (
              <tr key={i}>
                {/* 
                  Loops through each value of the object and creates table cells
                  Object.values(value) → e.g. ["Tony", 27, "male"]
                */}
                {Object.values(value).map((val, j) => {
                  return <td key={j}>{val}</td>; // Each data cell
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

// Exporting App component as default so it can be used in index.js
export default App;
