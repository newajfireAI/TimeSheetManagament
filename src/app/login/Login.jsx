'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

export default function Login() {
    const [viewPass, setViewPass] = useState(false)
    return (
        <div className='h-screen flex justify-center items-center'>
            <div
                className="fixed top-0 left-0 w-full h-1/2 bg-[url('/assets/loginbanner.png')] bg-no-repeat bg-cover bg-center z-0"
            >
            </div>
            <div className='bg-[#FFFFFF] w-[600px] h-[600px] z-10 border border-[#CED2E5] shadow rounded-[16px]'>

                <div className='w-full h-full flex flex-col justify-center items-center px-24 py-10'>
                    <div className='w-[295px] text-center mb-16'>
                        <h2 className='text-3xl font-semibold pb-4 text-black'>Welcome Back to ManageTP - 3.2.6 !</h2>
                        <p className='text-xl text-[#3D3D40]'>Sign in to continue to Time Sheet</p>
                    </div>

                    <form className='w-full mb-2'>

                        <fieldset className="fieldset text-black">
                            <legend className="fieldset-legend text-black">Email</legend>
                            <input type="text" className="input border-[#CED2E5] bg-white w-full -mt-1 text-black focus:outline-none" placeholder="example@gmail.com" />
                        </fieldset>

                        <fieldset className="fieldset text-black relative">
                            <legend className="fieldset-legend text-black">Password</legend>
                            <input type={`${viewPass ? "text" : "password"}`} className="input border-[#CED2E5] bg-white w-full -mt-1  focus:outline-none pr-8" placeholder="Enter your password" />
                            <p className='absolute z-20 top-1/2 right-2 -translate-y-1/2 text-xl text-[#6D6E73]' onClick={()=> setViewPass(!viewPass)}>{viewPass? <AiFillEye /> : <AiFillEyeInvisible />}</p>
                        </fieldset>
                        <div className='flex items-center gap-x-2 mb-8'>
                            <div>
                                <input type="checkbox" defaultChecked className="checkbox checkbox-sm text-black bg-[#F0F0F2] border-none -mt-[2px]" />
                            </div>
                            <p className='text-[#6D6E73]'>Remember me</p>
                        </div>

                        <input type="submit" className='bg-[#5069E5] text-white w-full py-4 rounded-[4px] font-semibold text-xl'   />

                    </form>

                    <div className='text-center text-base text-black space-y-2'>
                        <p className='text-[#0D2080]'><Link href={'/login/forgot-password'}>Forgot password?</Link></p>
                        <p>Don't have an account ? <span className='text-[#0D2080]'><Link href={'/signup'}>Sign up</Link></span></p>
                    </div>
                </div>

            </div>
        </div>
    )
}
