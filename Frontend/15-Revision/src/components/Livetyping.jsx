import React from 'react'
import "./LiveTyping.css"
import { useState, useRef } from 'react'

function Livetyping() {

    const [text, setText] = useState("Typing Will Appear Here");
    const LiveTyping = useRef();

    function handleTyping(){
        setText(LiveTyping.current.value) === LiveTyping.current.value;
    }

  return (
    <>
    <h1>Live Typing</h1>
    <input type="text" onChange={handleTyping} ref={LiveTyping}/>
    <h1 >{text}</h1>
    </>
  )
}

export default Livetyping