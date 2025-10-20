import Container from '@/components/container'
import React from 'react'

const page = () => {
  return (
    <div>
        <Container>
            <div className='flex flex-col '>
                <label>Name</label>
            <input className='w-full bg-amber-50 outline-none py-[18px] px-4 text-[#6D6E73] font-roboto text-[16px] placeholder-[#6D6E73]' placeholder='Name'/>
            </div>


        </Container>
      
    </div>
  )
}

export default page
