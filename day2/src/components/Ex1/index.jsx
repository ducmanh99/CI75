import React from 'react'


const Ex1 = ({name}) => {
  return (
    <div>
        <h3> name :{name.name}</h3>
        <h3>useName : {name.username}</h3>
        <h3>email : {name.email}</h3>
        <h3>address: {name.address.street}</h3>
    </div>
  )
}

export default Ex1