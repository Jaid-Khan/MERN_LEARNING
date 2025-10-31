import React from 'react'

function Card({name, age, gender}) {  //You Can also pass props as props and use them using props.name or use children.
  return (
    <>
    {/* Passing props as children */}
    {/* <div>{children}</div> */}

    {/* Props Destructuring  */}
    <div>{name}</div>
    <div>{age}</div>
    <div>{gender}</div>
    
    </>
  )
}

export default Card