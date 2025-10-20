"use client";
import React, { useState } from 'react'

const Container = ({children,className}) => {
  const [fullview, setFullView] = useState(true)
  
  return (
    <div className={`max-w-[1264px] mx-auto ${className} `}>
        {children}
      
    </div>
  )
}

export default Container
