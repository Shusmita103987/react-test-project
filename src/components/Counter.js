import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0)
    const btn = {
        background:"green",
        outline:"none",
        border:"none",
        margin:"10px",
        fontSize:"20px",
        color:"#fff",
        cursor:"pointer",
        padding:"10px"
    }


  return (
    <div style={{display:"flex"}}>
      <button style={btn} onClick={()=>setCount(count-1)} disabled={count <= 0 && true}>-</button>
      <p>{count}</p>
      <button style={btn} onClick={()=>setCount(count+2)}>+</button>
    </div>
  )
}

export default Counter
