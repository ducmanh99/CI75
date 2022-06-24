import React, { useState } from 'react'
import "./style.css"

const arr = ["red", "yellow", "green", "blue", "orange", "pink", "gray"]

const Ex2 = () => {
    const [state, setState] = useState(0)
    const handleClick = () =>{
        setState(state == 6 ? 0 : state +1)
    }
    console.log(state);
  return (
    <div>
        {arr.map((item, index) =>(
            <div key={index} className={`color ${index === state && item}`} ></div>
        ))}
        <button onClick={handleClick}>ấn đi</button>
    </div>
  )
}

export default Ex2