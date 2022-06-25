import React from 'react'
import { useState } from 'react'
import "./index.css"

const arr = [1, 2, 3, 4, 5, 6]

const Button = () => {
  const [hidden, setHidden] = useState(false)
  
  const handleClick = () =>{
    setHidden(!hidden)
  }
  console.log(hidden);
  return (
   <>
    <div className={`${hidden == true ? 'hidden' : 'show'}`}>
    {arr.map((item, index) =>(
      <div key = {index} className={` ${item % 2 == 0 ? 'square' : 'circle'}` }></div>
    ))}
    </div>
   <button onClick={handleClick}>Click</button>
   </>
  )
}

export default Button