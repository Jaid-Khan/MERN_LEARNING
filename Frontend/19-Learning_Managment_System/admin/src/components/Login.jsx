import styles from "./Login.module.css";
import axios from "axios";
import { useRef} from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  let contactRef = useRef();
  let passwordRef = useRef();

  function tryLogin(){
    axios
      .post("http://localhost:3000/admin/auth/login",{
        contact: contactRef.current.value,
        password: passwordRef.current.value
      },{
        withCredentials: true
      })
      .then((res) => {
        // console.log(res.data);
        if(res.data.res == false){
          alert(res.data.alert);
        }else{
          console.log(res.data);
          navigate("/dashboard");
        }
      })
  }

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>Login</h1>

        <input
          className={styles.input}
          type="text"
          ref={contactRef}
          placeholder="Contact number"
        />

        <input
          className={styles.input}
          type="password"
          ref={passwordRef}
          placeholder="Password"
        />

        <button onClick={tryLogin} className={styles.button}>Login</button>
      </div>
    </div>
  );
}

export default Login;
