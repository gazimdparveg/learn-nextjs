'use client'
import React from 'react'

function Newbutton({price}) {
  return (
    <div>
      <button onClick={()=>alert(price)}>check price </button>
    </div>
  )
}

export default Newbutton
