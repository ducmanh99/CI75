import React from 'react'
import "./Style.css"
const Section = ({title, text, img}) => {
  return (
    <div className='container'>
        <div className='block'>
        <h3>{title}</h3>
        <p>{text}</p>
        </div>
        <div>
        <img className='img' src={img} />
        </div>
    </div>
  )
}

export default Section