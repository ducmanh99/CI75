import React from 'react'


const Section = ({title, text, img}) => {
  return (
    <div>
        <div className='block'>
        <h3>{title}</h3>
        <p>{text}</p>
        </div>
        <div>
            
        </div>
    </div>
  )
}

export default Section