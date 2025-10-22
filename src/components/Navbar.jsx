"use client"
import Image from 'next/image'
import { usePathname } from 'next/navigation';
import React from 'react'

function Navbar() {
  const pathName = usePathname()

  return (
    <div className='bg-white shadow w-full h-full text-black py-6 px-12 gap-12 flex justify-center items-center z-30'>
        <div className='w-[48px] h-[48px]'>
          <Image className='w-full h-full scale-150' src={'/assets/logo.png'} alt={'Company Logo'} width={100} height={100} />
        </div>
        <div className='flex-1'>
          <h3><span className='font-semibold text-3xl'>Overview</span>{pathName}</h3>
        </div>
        <div>
          <div className='flex items-center gap-3'>
            <div className='text-right'>
              <h3 className='text-[20px] font-bold'>Steve john</h3>
              <p className='text-[#736E6E]'>example@gmail.com</p>
            </div>
            <div className='w-[48px] h-[48px]'>
              <Image className='w-full h-full rounded-full' src={'/assets/profilePlaceholder.png'} alt={'Profile Image'} width={80} height={80}/>
            </div>

          </div>
        </div>
    </div>
  )
}

export default Navbar