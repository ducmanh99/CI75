import React from 'react'
import { useState } from 'react'
import "./index.css"

const arr = [1, 2, 3, 4, 5, 6]

const Button = () => {
  const [shape, setShape] = useState(arr)
  
  const handleClick = () =>{
    setShape(shape.filter(num => num % 2 == 0))
  }
  console.log(shape);
  return (
   <>
    {arr.map((item, index) =>(
      <div key = {index} className={`container ${index === shape ? 'square' : 'circle'}` }></div>
    ))}
   <button onClick={handleClick}>Click</button>
   </>
  )
}

export default Button