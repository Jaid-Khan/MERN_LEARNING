import React from "react";
import "./todo.css";
import { useState, useEffect, useRef } from "react";
import axios from "axios";

function Todo() {
  const [addNote, setAddNote] = useState(false);
  const [all_jobs, setAllJobs] = useState([]);
  const job_title = useRef();
  const job_desc = useRef();

  useEffect(() => {
    axios.get("http://localhost:3000/jobs").then((response) => {
      setAllJobs(response.data);
    });
  }, []);

  function getNotes() {
    setAddNote(false);
    axios.get("http://localhost:3000/jobs").then((response) => {
      setAllJobs(response.data);
    });
  }

  function save_Note() {
    let jT = job_title.current.value;
    let jD = job_desc.current.value;
    axios
      .post("http://localhost:3000/jobs", {
        job: jT,
        desc: jD,
      })
      .then(() => {
        getNotes();
      });
  }

  function deleteNote(id) {
    // console.log(id);
    axios.delete("http://localhost:3000/jobs", {
      data:{ id: id }
    }).then(() => {
      getNotes();
    });
  }

  return (
    <>
      {addNote == false ? null : (
        <div className="container">
          <div className="add_note">
            <div onClick={() => setAddNote(false)} className="close_btn">
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
            <input type="text" ref={job_title} placeholder="Title here..." />
            <textarea
              ref={job_desc}
              name="textarea"
              id="textarea"
              placeholder="Content goes here..."
            ></textarea>
            <button onClick={save_Note}>Add Note</button>
          </div>
        </div>
      )}

      <h1 className="Heading">My Notes</h1>
      <div className="all_notes">
        {/* ADD NOTE BUTTON  */}
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

        {/* NOTES  */}

        {all_jobs.map((item, index) => {
          return (
            <div key={index} className="inid_notes">
              <div className="svg-container">
                <div className="edit-icon">
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

                <div className="delete-icon" onClick={()=>{deleteNote(item._id)}}>
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
              <h2>{item.job}</h2>
              <div className="horizontal_line"></div>
              <p>{item.desc}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Todo;
