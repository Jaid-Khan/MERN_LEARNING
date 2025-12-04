import React from "react";
import "./signup.css";
import { useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import UserContext from "../Context/UserContext";
import { useContext } from "react"; 
import Header from "../components/Header";

function Signup() {

  const {setId} = useContext(UserContext);

  const navigate = useNavigate();

  const name = useRef();
  const email = useRef();
  const number = useRef();
  const password = useRef();
  const cnf_password = useRef();

  const submit = () => {
    if (
      name.current.value == "" ||
      email.current.value == "" ||
      number.current.value == "" ||
      password.current.value == "" ||
      cnf_password.current.value == ""
    ) {
      alert("Please fill all the fields");
    } else {
      if (password.current.value == cnf_password.current.value) {
        axios
          .get(
            `http://localhost:9000/signup?name=${name.current.value}&email=${email.current.value}&number=${number.current.value}&password=${password.current.value}&cnf_password=${cnf_password.current.value}`
          )
          .then((res) => {
            console.log(res.data);
            setId(res.data);
            navigate("/");
          });
        alert("Account created successfully");
        name.current.value = "";
        email.current.value = "";
        number.current.value = "";
        password.current.value = "";
        cnf_password.current.value = "";

      } else {
        alert("Password and Confirm Password doesn't match");
      }
    }
  };

  return (
    <>
    <Header/>
      <div className="container">
        <div className="form">
          <input type="text" ref={name} placeholder="name" />
          <input type="email" ref={email} placeholder="e-mail" />
          <input type="number" ref={number} placeholder="contact number" />
          <input type="password" ref={password} placeholder="password" />
          <input
            type="password"
            ref={cnf_password}
            placeholder="confirm password"
          />
          <input type="submit" onClick={submit} value="Sign Up" />
        </div>
      </div>
    </>
  );
}

export default Signup;
