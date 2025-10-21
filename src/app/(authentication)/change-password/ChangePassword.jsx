'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { RxCross2 } from "react-icons/rx";
import { RiLock2Fill } from "react-icons/ri";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

export default function ChangePassword() {
    const [viewPass, setViewPass] = useState(false)
    return (
        <div className='h-screen flex justify-center items-center text-black'>

            <div className='bg-[#FFFFFF] w-[600px] py-8 z-10 border border-[#CED2E5] shadow relative rounded-[16px]'>

                <Link href={'/login'}>
                    <div className='bg-[#F2F4FF] p-3 inline-flex rounded-[8px] absolute top-5 right-5'>
                        <RxCross2 className='text-2xl font-black text-[#F46B6A]' />
                    </div>
                </Link>

                <div className='w-full h-full flex flex-col justify-center items-center px-24 py-10'>
                    <p className='text-center text-7xl text-[#5069E5] w-full flex  justify-center'><RiLock2Fill /></p>
                    <div className='w-[411px] text-center mt-9'>
                        <h2 className='text-3xl font-semibold pb-4'>Change Password</h2>
                        <p className='text-xl text-[#3D3D40]'>Keep your account secure by updating your password.</p>
                    </div>


                    <form className='w-full mt-8'>

                        <fieldset className="fieldset text-black relative">
                            <legend className="fieldset-legend text-black">Password</legend>
                            <input type={`${viewPass ? "text" : "password"}`} className="input py-4 border-[#CED2E5] bg-white w-full -mt-1  focus:outline-none pr-8" placeholder="Enter your password" />
                            <p className='absolute z-20 top-1/2 right-2 -translate-y-1/2 text-xl text-[#6D6E73]' onClick={() => setViewPass(!viewPass)}>{viewPass ? <AiFillEye /> : <AiFillEyeInvisible />}</p>
                        </fieldset>

                        <fieldset className="fieldset text-black relative">
                            <legend className="fieldset-legend text-black">Confarm Password</legend>
                            <input type={`${viewPass ? "text" : "password"}`} className="input py-4 border-[#CED2E5] bg-white w-full -mt-1  focus:outline-none pr-8" placeholder="Enter your password" />
                            <p className='absolute z-20 top-1/2 right-2 -translate-y-1/2 text-xl text-[#6D6E73]' onClick={() => setViewPass(!viewPass)}>{viewPass ? <AiFillEye /> : <AiFillEyeInvisible />}</p>
                        </fieldset>


                        <Link href={'/send-otp'}><input type="submit" value={'Change Password'} className='bg-[#5069E5] mt-9 text-white w-full py-4 rounded-[4px] font-semibold text-xl' /></Link>

                    </form>
                </div>

            </div>
        </div>
    )
}
