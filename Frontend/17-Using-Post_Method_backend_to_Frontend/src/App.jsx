import { useState, useRef } from "react";
import "./App.css";
import axios from "axios";

function App() {

  const username = useRef();
  const password = useRef();

  function onSubmit(e) {
    e.preventDefault()
    axios
      .post(
        `http://localhost:3000/login`,{
          username: username.current.value,
          password: password.current.value  
        }
      )
      .then((res) => {
        console.log(res.data);
        username.current.value = ""
        password.current.value = ""
      });
  }

  return (
    <>
      <form onSubmit={onSubmit}>
        <h1>Log In</h1>
        <input
          ref={username}
          style={{ height: "24px", margin: "10px", padding: "10px" }}
          type="text"
          placeholder="Enter Name Here "
          name="username"
        />
        <br />
        <input
          ref={password}
          style={{ height: "24px", margin: "10px", padding: "10px" }}
          type="password"
          placeholder="Enter Password Here "
          name="password"
        />{" "}
        <br />
        <input type="submit" value="Login" />
      </form>
    </>
  );
}

export default App;
