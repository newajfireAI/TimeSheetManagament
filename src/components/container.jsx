import React from 'react'

const Container = ({children,className}) => {
  return (
    <div className={`max-w-[1264px] mx-auto ${className} `}>
        {children}
      
    </div>
  )
}

export default Container
