import Container from '@/components/container'
import React from 'react'
import { MdModeEdit } from "react-icons/md";
import { FaCaretDown } from "react-icons/fa";


const page = () => {
  return (
    <div>
        <Container>
            <form className='py-8'>
                <div className='flex flex-col gap-2 '>
                <label className='font-roboto text-[16px]'>Name <span className='text-[#F46B6A]'>*</span></label>
            <input className='w-full bg-amber-50 outline-none py-[18px] px-4 text-[#6D6E73] font-roboto text-[16px] placeholder-[#6D6E73] border border-[#CED2E5] rounded ' placeholder='Name'/>
            </div>

            <div className='flex flex-col gap-2 mt-4 '>
                <label className='font-roboto text-[16px]'>Email <span className='text-[#F46B6A]'>*</span></label>
            <input className='w-full bg-amber-50 outline-none py-[18px] px-4 text-[#6D6E73] font-roboto text-[16px] placeholder-[#6D6E73] border border-[#CED2E5] rounded ' placeholder='example@gmail.com'/>
            </div>

            <div className='flex justify-between gap-2 mt-4 '>

                <div className='flex flex-col gap-2 mt-4  w-[616px]'>
                <label className='font-roboto text-[16px]'>Phone <span className='text-[#F46B6A]'>*</span></label>
            <div className='relative'>
                <input className='w-full bg-amber-50 outline-none py-[18px] pl-14 text-[#6D6E73] font-roboto text-[16px] placeholder-[#6D6E73] border border-[#CED2E5] rounded ' placeholder='Phone Number'/>
                <div className='w-6 h-6 bg-[#F2F4FF] flex items-center justify-center absolute top-1/2 -translate-y-1/2 left-4 text-[#6D6E73]'>
                    <MdModeEdit/>
                </div>

            </div>
            </div>
           
           
                <div className='flex flex-col gap-2 mt-4  w-[616px]'>
                <label className='font-roboto text-[16px]'>Gender<span className='text-[#F46B6A]'>*</span></label>
            <div className='relative'>
                <input className='w-full bg-amber-50 outline-none py-[18px] px-4 text-[#6D6E73] font-roboto text-[16px] placeholder-[#6D6E73] border border-[#CED2E5] rounded ' placeholder='Phone Number'/>
                <div className='w-6 h-6 bg-[#F2F4FF] flex items-center justify-center absolute top-1/2 -translate-y-1/2 right-4 text-[#6D6E73]'>
                    <FaCaretDown />
                </div>

            </div>
            </div>
            </div>

             <div className='flex flex-col gap-2 mt-4'>
                <label className='font-roboto text-[16px]'>Role<span className='text-[#F46B6A]'>*</span></label>
            <div className='relative'>
                <input className='w-full bg-amber-50 outline-none py-[18px] px-4 text-[#6D6E73] font-roboto text-[16px] placeholder-[#6D6E73] border border-[#CED2E5] rounded ' placeholder='Phone Number'/>
                <div className='w-6 h-6 bg-[#F2F4FF] flex items-center justify-center absolute top-1/2 -translate-y-1/2 right-4 text-[#6D6E73]'>
                    <FaCaretDown />
                </div>

            </div>
            </div>

            <div className='flex justify-between gap-2 mt-4 '>

                <div className='flex flex-col gap-2 mt-4  w-[616px]'>
                <label className='font-roboto text-[16px]'>Password <span className='text-[#F46B6A]'>*</span></label>
            <div className='relative'>
                <input className='w-full bg-amber-50 outline-none py-[13px] px-4 text-[#6D6E73] font-roboto text-[16px] placeholder-[#6D6E73] border border-[#CED2E5] rounded ' placeholder='Phone Number'/>
                <div className='w-6 h-6 bg-[#F2F4FF] flex items-center justify-center absolute top-1/2 -translate-y-1/2 right-4 text-[#6D6E73]'>
                    <FaCaretDown />
                </div>

            </div>
            </div>
           
           
                <div className='flex flex-col gap-2 mt-4  w-[616px]'>
                <label className='font-roboto text-[16px]'>Confirm Password<span className='text-[#F46B6A]'>*</span></label>
            <div className='relative'>
                <input className='w-full bg-amber-50 outline-none py-[13px] px-4 text-[#6D6E73] font-roboto text-[16px] placeholder-[#6D6E73] border border-[#CED2E5] rounded ' placeholder='Phone Number'/>
                <div className='w-6 h-6 bg-[#F2F4FF] flex items-center justify-center absolute top-1/2 -translate-y-1/2 right-4 text-[#6D6E73]'>
                    <FaCaretDown />
                </div>

            </div>
            </div>
            </div>
            </form>

            <div className='mt-8 w-[258px] flex justify-between'>

            <button className='bg-[#5069E5] py-[14px] px-8 text-white font-roboto rounded font-semibold'>
                Add user

            </button>

            <button className='bg-[#FFF7F7] py-[14px] px-8 text-[#F46B6A] font-roboto rounded font-semibold'>
                Cancel

            </button>
            </div>

             



        </Container>
      
    </div>
  )
}

export default page
