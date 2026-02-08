// Import React core library (needed to define React components)
import React from "react";

// Import CSS file for styling the Todo component
import "./todo.css";

// Import React hooks:
// useState → manage component state
// useEffect → run side effects (API calls)
// useRef → access DOM elements directly
import { useState, useEffect, useRef } from "react";

// Import axios for making HTTP requests to backend APIs
import axios from "axios";

// Todo functional component
function Todo() {

  // State to control visibility of Add/Edit Note modal
  const [addNote, setAddNote] = useState(false);

  // State to store all notes fetched from backend
  const [all_jobs, setAllJobs] = useState([]);

  // State to check whether user is editing an existing note
  const [editNote, setEditNote] = useState(false);

  // State to store the ID of the note being edited
  const [editId, setEditId] = useState("");

  // useRef to access title input field value directly
  const job_title = useRef();

  // useRef to access description textarea value directly
  const job_desc = useRef();

  // useEffect runs once when component mounts
  useEffect(() => {

    // Fetch all notes from backend
    axios.get("http://localhost:3000/jobs").then((response) => {

      // Save response data into state
      setAllJobs(response.data);
    });
  }, []); // Empty dependency array → runs only once

  // Function to fetch notes again (used after add/edit/delete)
  function getNotes() {

    // Close add/edit modal
    setAddNote(false);

    // Fetch updated notes list
    axios.get("http://localhost:3000/jobs").then((response) => {

      // Update notes state
      setAllJobs(response.data);
    });
  }

  // Function called when edit icon is clicked
  function editNoteFunc(item) {

    // Open add/edit modal
    setAddNote(true);

    // Enable edit mode
    setEditNote(true);

    // Store selected note ID
    setEditId(item._id);

    // setTimeout ensures DOM is ready before assigning values
    setTimeout(() => {

      // Fill input with existing title
      job_title.current.value = item.job;

      // Fill textarea with existing description
      job_desc.current.value = item.desc;
    }, 0);
  }

  // Function to delete a note
  function deleteNote(id) {

    // Send DELETE request with note ID
    axios
      .delete("http://localhost:3000/jobs", {

        // Axios delete requires data inside config object
        data: { id: id },
      })
      .then(() => {

        // Refresh notes after deletion
        getNotes();
      });
  }

  // Function to save note (add or update)
  function save_Note() {

    // Read title value from input using ref
    let jT = job_title.current.value;

    // Read description value from textarea using ref
    let jD = job_desc.current.value;

    // If edit mode is active → update note
    if (editNote) {

      // Send PUT request to update note
      axios
        .put("http://localhost:3000/jobs", {
          id: editId, // Note ID
          job: jT,    // Updated title
          desc: jD,   // Updated description
        })
        .then(() => {

          // Disable edit mode
          setEditNote(false);

          // Refresh notes
          getNotes();
        });
    } 
    // Else → create new note
    else {

      // Send POST request to create note
      axios
        .post("http://localhost:3000/jobs", {
          job: jT,   // New note title
          desc: jD,  // New note description
        })
        .then(() => {

          // Refresh notes
          getNotes();
        });
    }
  }

  // JSX returned by component
  return (
    <>
      {/* Show add/edit modal only when addNote is true */}
      {addNote == false ? null : (
        <div className="container">
          <div className="add_note">

            {/* Close modal button */}
            <div onClick={() => setAddNote(false)} className="close_btn">

              {/* SVG close icon (UI only, no logic) */}
              <svg
                fill="#000000"
                height={20}
                width={20}
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path d="M18.8,16l5.5-5.5c0.8-0.8,0.8-2,0-2.8l0,0C24,7.3,23.5,7,23,7c-0.5,0-1,0.2-1.4,0.6L16,13.2l-5.5-5.5 c-0.8-0.8-2.1-0.8-2.8,0C7.3,8,7,8.5,7,9.1s0.2,1,0.6,1.4l5.5,5.5l-5.5,5.5C7.3,21.9,7,22.4,7,23c0,0.5,0.2,1,0.6,1.4 C8,24.8,8.5,25,9,25c0.5,0,1-0.2,1.4-0.6l5.5-5.5l5.5,5.5c0.8,0.8,2.1,0.8,2.8,0c0.8-0.8,0.8-2.1,0-2.8L18.8,16z"></path>{" "}
                </g>
              </svg>
            </div>

            {/* Input field for note title */}
            <input type="text" ref={job_title} placeholder="Title here..." />

            {/* Textarea for note description */}
            <textarea
              ref={job_desc}
              name="textarea"
              id="textarea"
              placeholder="Content goes here..."
            ></textarea>

            {/* Save button */}
            <button onClick={save_Note}>Add Note</button>
          </div>
        </div>
      )}

      {/* Page heading */}
      <h1 className="Heading">My Notes</h1>

      {/* Notes container */}
      <div className="all_notes">

        {/* Add note button */}
        <div onClick={() => setAddNote(true)} className="add_notes_indi">
          <svg
            viewBox="0 0 24 24"
            height={20}
            width={20}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                d="M15 12L12 12M12 12L9 12M12 12L12 9M12 12L12 15"
                stroke="#1C274C"
                strokeWidth="1.5"
                strokeLinecap="round"
              ></path>{" "}
              <path
                d="M7 3.33782C8.47087 2.48697 10.1786 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 10.1786 2.48697 8.47087 3.33782 7"
                stroke="#1C274C"
                strokeWidth="1.5"
                strokeLinecap="round"
              ></path>{" "}
            </g>
          </svg>
          <h2>Add Note</h2>
        </div>

        {/* Render all notes */}
        {all_jobs.map((item, index) => {
          return (
            <div key={index} className="inid_notes">

              <div className="svg-container">

                {/* Edit icon */}
                <div
                  className="edit-icon"
                  onClick={() => {
                    editNoteFunc(item);
                  }}
                >
                  <svg
                    viewBox="0 0 20 20"
                    height={20}
                    width={20}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <path
                        fill="#000000"
                        fillRule="evenodd"
                        d="M15.747 2.97a.864.864 0 011.177 1.265l-7.904 7.37-1.516.194.653-1.785 7.59-7.044zm2.639-1.366a2.864 2.864 0 00-4-.1L6.62 8.71a1 1 0 00-.26.39l-1.3 3.556a1 1 0 001.067 1.335l3.467-.445a1 1 0 00.555-.26l8.139-7.59a2.864 2.864 0 00.098-4.093zM3.1 3.007c0-.001 0-.003.002-.005A.013.013 0 013.106 3H8a1 1 0 100-2H3.108a2.009 2.009 0 00-2 2.19C1.256 4.814 1.5 7.848 1.5 10c0 2.153-.245 5.187-.391 6.81A2.009 2.009 0 003.108 19H17c1.103 0 2-.892 2-1.999V12a1 1 0 10-2 0v5H3.106l-.003-.002a.012.012 0 01-.002-.005v-.004c.146-1.62.399-4.735.399-6.989 0-2.254-.253-5.37-.4-6.99v-.003zM17 17c-.001 0 0 0 0 0zm0 0z"
                      ></path>{" "}
                    </g>
                  </svg>
                </div>

                {/* Delete icon */}
                <div
                  className="delete-icon"
                  onClick={() => {
                    deleteNote(item._id);
                  }}
                >
                  <svg
                    height={20}
                    width={20}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <path
                        d="M10 12V17"
                        stroke="#000000"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>{" "}
                      <path
                        d="M14 12V17"
                        stroke="#000000"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>{" "}
                      <path
                        d="M4 7H20"
                        stroke="#000000"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>{" "}
                      <path
                        d="M6 10V18C6 19.6569 7.34315 21 9 21H15C16.6569 21 18 19.6569 18 18V10"
                        stroke="#000000"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>{" "}
                      <path
                        d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z"
                        stroke="#000000"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>{" "}
                    </g>
                  </svg>
                </div>
              </div>

              {/* Note title */}
              <h2>{item.job}</h2>

              {/* Divider */}
              <div className="horizontal_line"></div>

              {/* Note description */}
              <p>{item.desc}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}

// Export component for use in other files
export default Todo;
