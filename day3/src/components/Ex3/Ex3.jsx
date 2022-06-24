import React, { useState } from 'react'
import "./style.css"

const arr = [1, 2]

const Ex3 = () => {
  const [toggle, SetToggle] = useState(1)

  const handleClick = () =>{
    SetToggle(toggle == 1 ? 0 : toggle +1)
  }
  console.log(toggle);
  return (
    <div>
     <div className={`square ${toggle % 2 == 0 && 'circle'}`}></div>
     <button onClick={handleClick}>click</button>
    </div>
  )
}

export default Ex3