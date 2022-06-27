import React from 'react'

const Input = ({valueInput, onChangeInput}) => {
  return (
    <form>
        <input type="text"
         value={valueInput} 
         onChange={onChangeInput}/>
    </form> 
  )
}

export default Input