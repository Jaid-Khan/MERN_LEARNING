// Import React and required hooks
import React, { useState, useRef } from "react";
import "./TaskManager.css";

// Main component
function TaskManager() {

  // Tasks state to store all tasks
  const [Tasks, setTasks] = useState([
    // Example tasks removed for clean UI
  ]);

  // Ref to access input field value
  const Ta = useRef();

  // Function to add a new task
  function addTask() {
    const newText = Ta.current.value.trim(); // Get text & remove extra spaces
    if (newText === "") return;              // Stop if input is empty

    const newTask = {
      text: newText,        // Task text
      completed: false,     // Default not completed
    };

    setTasks([...Tasks, newTask]); // Add new task to array
    Ta.current.value = "";         // Clear input box
  }

  return (
    <>
      <h1>Task Manager</h1>

      <div className="all_tasks">
        {Tasks.map((item, index) => {
          return (
            <div
              key={index} // Unique key for React
              className={
                item.completed ? "individual_task_completed" : "individual_task"
              } // Apply CSS based on completed
            >
              {item.text}  {/* Show task text */}

              {/* Button to complete/un-complete task */}
              <div
                className={item.completed ? "un_done" : "done"}
                onClick={() => {
                  let all_tasks = Tasks; // Copy array reference

                  // Toggle completed value
                  if (all_tasks[index].completed == true) {
                    all_tasks[index].completed = false;
                  } else {
                    all_tasks[index].completed = true;
                  }

                  setTasks([...all_tasks]); // Update state to re-render
                }}
              >
                <svg
                  fill="#000000"
                  height={18}
                  width={18}
                  viewBox="0 0 1024 1024"
                >
                  {/* Checkmark icon */}
                  <path d="M760 380.4l-61.6-61.6-263.2 263.1-109.6-109.5L264 534l171.2 171.2L760 380.4z"></path>
                </svg>
              </div>

              {/* Delete button */}
              <div
                className="delete"
                onClick={() => {
                  let all_tasks = Tasks;  // Reference array
                  all_tasks.splice(index, 1); // Remove task at index
                  setTasks([...all_tasks]);   // Update state
                }}
              >
                <svg
                  viewBox="0 0 24 24"
                  height={18}
                  width={18}
                  fill="none"
                >
                  {/* Delete (trash) icon */}
                  <path d="M10 11V17" stroke="#ffffff" strokeWidth="2"></path>
                  <path d="M14 11V17" stroke="#ffffff" strokeWidth="2"></path>
                  <path d="M4 7H20" stroke="#ffffff" strokeWidth="2"></path>
                  <path
                    d="M6 7H18V18C18 19.6569 16.6569 21 15 21H9C7.34315 21 6 19.6569 6 18V7Z"
                    stroke="#ffffff"
                    strokeWidth="2"
                  ></path>
                  <path
                    d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z"
                    stroke="#ffffff"
                    strokeWidth="2"
                  ></path>
                </svg>
              </div>
            </div>
          );
        })}
      </div>

      {/* Input and button section */}
      <div className="bottom-section">
        <input type="text" placeholder="Type Here.." ref={Ta} /> 
        {/* Input connected to useRef */}

        <button onClick={addTask}>Add Task</button>
        {/* Button to add new task */}
      </div>
    </>
  );
}

export default TaskManager;  // Export component
