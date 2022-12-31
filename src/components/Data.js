import React from 'react'

const Data = ({data}) => {

    // const {title,userId} = data
    console.log(data)
  return (
    <div style={{border:"2px solid green", margin:"10px"}}>
        <p>Name: {data.name}</p>
        <p>User Name: {data.username}</p>
        <p>User Email: {data.email}</p>
        <p>User Phone Number: {data.phone}</p>
        <p>User Website: {data.website}</p>
        <p>User Address: {data.address.street}, {data.address.city}, {data.address.zipcode}</p>
        
    </div>
  )
}

export default Data
