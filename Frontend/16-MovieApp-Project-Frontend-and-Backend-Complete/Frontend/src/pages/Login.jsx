import React from "react";
import { useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import UserContext from "../Context/UserContext";
import { useContext } from "react";
import Header from "../components/Header";

function Login() {
  const { setId } = useContext(UserContext);

  const navigate = useNavigate();

  const email = useRef();
  const password = useRef();

  const login = () => {
    if (email.current.value == "" || password.current.value == "") {
      alert("Please fill all the fields");
    } else {
      axios
        .get(
          `http://localhost:9000/login?email=${email.current.value}&password=${password.current.value}`
        )
        .then((res) => {
          if (res.data.login == false) {
            alert(res.data.alert);
          }else{
            setId(res.data.id);
            navigate("/");
          }
        });
    }
  };

  return (
    <>
    <Header/>
      <div className="container">
        <div className="form">
          <input type="email" ref={email} placeholder="e-mail" />
          <input type="password" ref={password} placeholder="password" />
          <input type="submit" onClick={login} value="Log In" />
        </div>
      </div>
    </>
  );
}

export default Login;
