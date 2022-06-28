import React from 'react'
import { useState } from 'react'
import Input from '../../components/Input'

const Ex1 = () => {
    const [name, setName] = useState("")
    const [text, setText] = useState([])
    const handleSubmit = (e) =>{
        e.preventDefault()
        text.push(name)
        setName("")
    }
    const handleDelete = (e) =>{
      setText(text.filter((value, index) => index != e.target.value))
    }
  return (
    <>
    <form onSubmit={handleSubmit}>
        <Input valueInput={name}
        onChangeInput = {(e) => setName(e.target.value)}
        />
        <button type='submit'>Enter</button>
    </form>
    {text.map((value, index) =>(

        <div key={index}>
        <input type="checkbox" />
        {value}
          <button onClick={handleDelete} value= {index}>X</button></div>
    ))}

    </>
  )
}

export default Ex1