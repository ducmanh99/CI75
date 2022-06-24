import React, { useState } from 'react'



const Button = () => {
    const [state, setState] = useState(2)
    const handleClick = () =>{
        setState(state +1)
    }
  return (
    <Button onClick = {handleClick}>next</Button>

  )
}

export default Button