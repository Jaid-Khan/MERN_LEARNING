import "./App.css";
import axios from "axios";
import { useRef } from "react";

function App() {
  const fileRef = useRef(null);
  const inputRef = useRef(null);
  
  function sendData() {
    const formData = new FormData();
    formData.append("profile", fileRef.current.files[0]);
    formData.append("name", inputRef.current.value);
    axios.post("http://localhost:3000/signup", formData);
  }

  return (
    <>
      <div>
        <h1>File Upload</h1>
        <input type="text" name="name" id="" ref={inputRef} />
        <br />
        <input type="file" name="profile" id="" ref={fileRef} />
        <br />
        <button onClick={() => {sendData()}}>Upload</button>
      </div>
    </>
  );
}

export default App;
