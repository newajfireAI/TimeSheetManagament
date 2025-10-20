import React from 'react'

const container = ({children,className}) => {
  return (
    <div className={`max-w-[1264px] `}>
        {children}
      
    </div>
  )
}

export default container
