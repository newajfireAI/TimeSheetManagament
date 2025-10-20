"use client";
import React, { useState } from 'react'

function Sidebar() {
    const [fullview, setFullView] = useState(true) // TODO: we have to make it false
  return (
    <div onClick={()=> setFullView(!fullview)} className={`${fullview ? 'bg-orange-300 w-[80px]': 'bg-green-500 w-[160px]'} h-screen`}>
        
    </div>
  )
}

export default Sidebar