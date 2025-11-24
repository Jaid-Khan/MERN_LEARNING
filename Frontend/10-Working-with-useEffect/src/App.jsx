import { useState } from 'react'
import './App.css'
import axios from "axios"
import { useEffect } from 'react'

function App() {
  const [images, setImages] = useState([]);
  useEffect(()=>{
    axios.get("http://localhost:3000/images").then((res) => {
    setImages(res.data);
    // console.log(res.data);
  })
  }, [])
  return (
    <>
    <div>
      {images.map((image, index) => {
        return <img key={index} src={image.img} />  
      })}
    </div>
    </>
  )
}

export default App;
