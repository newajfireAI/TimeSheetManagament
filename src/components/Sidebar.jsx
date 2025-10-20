"use client";
import React, { useState } from 'react'

function Sidebar() {
    const [fullview, setFullView] = useState(true) // TODO: we have to make it false
  return (
    <div onClick={()=> setFullView(!fullview)} className={`${fullview ? 'bg-orange-300 w-[5%]': 'bg-green-500 w-[15%]'} h-scrin px-4 py-6 fixed`}>
        sdfsdfsdf
    </div>
  )
}

export default Sidebar