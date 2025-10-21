import Link from 'next/link'
import React from 'react'
import { RxCross2 } from "react-icons/rx";

export default function ForgotPassword() {
    return (
        <div className='h-screen flex justify-center items-center text-black'>

            <div className='bg-[#FFFFFF] w-[600px] h-[600px] z-10 border border-[#CED2E5] shadow relative rounded-[16px]'>

                 <Link href={'/login'}>
                    <div className='bg-[#F2F4FF] p-3 inline-flex rounded-[8px] absolute top-5 right-5'>
                        <RxCross2 className='text-2xl font-black text-[#F46B6A]' />
                    </div>
                </Link>

                <div className='w-full h-full flex flex-col justify-center items-center px-24 py-10'>
                    <div className='w-[411px] text-center '>
                        <h2 className='text-3xl font-semibold pb-4'>Give us your email</h2>
                        <p className='text-xl text-[#3D3D40]'>Enter your email to receive a One-Time Password (OTP)</p>
                    </div>


                    <form className='w-full mt-8'>

                        <fieldset className="fieldset text-black mb-8">
                            <legend className="fieldset-legend text-black">Email</legend>
                            <input type="text" className="input py-4 border-[#CED2E5] bg-white w-full -mt-1 text-black focus:outline-none" placeholder="example@gmail.com" />
                        </fieldset>

                        
                        <Link href={'/send-otp'}><input type="submit" value={'Send OTP'} className='bg-[#5069E5] text-white w-full py-4 rounded-[4px] font-semibold text-xl' /></Link>

                    </form>
                </div>

            </div>
        </div>
    )
}
