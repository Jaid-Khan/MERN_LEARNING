import axios from "axios";
import "./App.css";
import { useRef, useState } from "react";

function App() {
  const [user, setUser] = useState()

  const nameRef = useRef(null);
  const contactRef = useRef(null);
  const emailRef = useRef(null);
  const profileRef = useRef(null);


  function sendData(contact) {
    let userProfile = profileRef.current.files[0];
    if (userProfile == undefined) {
      return alert("Select profile Image");
    }

    // console.log(contact)
    const formData = new FormData();
    formData.append("name", nameRef.current.value);
    formData.append("contact", contact);
    formData.append("email", emailRef.current.value);
    formData.append("profile", profileRef.current.files[0]);
    axios.post("http://localhost:3000/signup", formData).then(() => {
      getData(contact);
    });
  }

  function getData(contact) {
    // console.log(contact)

    axios.get("http://localhost:3000/user-preview", {
        params: {
          contact: contact,
        },
      })
      .then((res) => {
        // console.log(res.data);
        setUser(res.data)
      });
    }
    // console.log(user)

  return (

    <>
    {user && (
      <>
      <div>
          <img style={{
            objectFit:"cover"
          }
          } height={200} width={200} src={`http://localhost:3000/${user.profilePath}`} alt="" />
        <h2>{user.name}</h2>
        <h2>{user.email}</h2>
        <h2>{user.contact}</h2>
        <div>
        </div>
      </div>
      </>
    )} 



      <form method="post" encType="multipart/form-data">
        <input type="text" placeholder="name" name="name" ref={nameRef} />
        <br />
        <input
          type="number"
          placeholder="contact"
          name="contact"
          ref={contactRef}
        />
        <br />
        <input type="email" placeholder="email" name="email" ref={emailRef} />
        <br />
        <input
          type="file"
          placeholder="file here"
          name="profile"
          accept=".png"
          id=""
          ref={profileRef}
        />
        <br />
        <button
          type="button"
          onClick={() => {
            const contact = contactRef.current.value;
            sendData(contact);
          }}
        >
          Upload
        </button>
      </form>
    </>
  );
}

export default App;
