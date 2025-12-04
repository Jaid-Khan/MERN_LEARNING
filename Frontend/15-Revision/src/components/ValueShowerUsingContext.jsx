import React from 'react'
import { useContext } from 'react'
import UserContext  from '../UserContext'

function ValueShowerUsingContext() {
    const{count, setCount} = useContext(UserContext);

  return (
    <div>
        <h1>Showing value using context</h1>
        <h3>{count}</h3>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  )
}

export default ValueShowerUsingContext;