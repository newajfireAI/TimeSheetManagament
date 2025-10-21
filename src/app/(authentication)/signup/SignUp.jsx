'use client'
import Image from 'next/image'
import Link from 'next/link';
import React, { useState } from 'react'
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

export default function SignUp() {
    const [viewPass, setViewPass] = useState(false)
    const [viewConPass, setViewConPass] = useState(false)
    return (
        <div className='h-screen flex justify-center items-center text-black'>

            <div className='bg-[#FFFFFF] w-[1175px] h-[720px] z-10 border border-[#CED2E5] shadow rounded-[16px] grid grid-cols-2'>

                <div className='w-full h-full '>
                    <Image className='w-full h-full rounded-l-[15px]' src={'/assets/signupbanner.png'} alt={`Signup page banner`} height={300} width={200} />
                </div>


                <div className='px-12 flex flex-col items-center justify-center'>

                    <form className='grid grid-cols-2 gap-x-9 gap-y-4 '>

                        <fieldset className="fieldset text-black">
                            <legend className="fieldset-legend text-black">First Name <span className='text-[#F46B6A] text-lg -ml-2'>*</span></legend>
                            <input type="text" className="input py-4 border-[#CED2E5] bg-white w-full -mt-1 text-black focus:outline-none" placeholder="First Name" />
                        </fieldset>

                        <fieldset className="fieldset text-black">
                            <legend className="fieldset-legend text-black">Last Name<span className='text-[#F46B6A] text-lg -ml-2'>*</span></legend>
                            <input type="text" className="input py-4 border-[#CED2E5] bg-white w-full -mt-1 text-black focus:outline-none" placeholder="Last Name" />
                        </fieldset>

                        <fieldset className="fieldset text-black">
                            <legend className="fieldset-legend text-black">Company Name<span className='text-[#F46B6A] text-lg -ml-2'>*</span></legend>
                            <input type="text" className="input py-4 border-[#CED2E5] bg-white w-full -mt-1 text-black focus:outline-none" placeholder="Company Name" />
                        </fieldset>

                        <fieldset className="fieldset text-black">
                            <legend className="fieldset-legend text-black">Mobile<span className='text-[#F46B6A] text-lg -ml-2'>*</span></legend>
                            <input type="number" className="input py-4 border-[#CED2E5] bg-white w-full -mt-1 text-black focus:outline-none" placeholder="example@gmail.com" />
                        </fieldset>

                        <fieldset className="fieldset text-black col-span-2">
                            <legend className="fieldset-legend text-black">Email<span className='text-[#F46B6A] text-lg -ml-2'>*</span></legend>
                            <input type="email" className="input py-4 border-[#CED2E5] bg-white w-full -mt-1 text-black focus:outline-none" placeholder="example@gmail.com" />
                        </fieldset>

                        <fieldset className="fieldset text-black relative">
                            <legend className="fieldset-legend text-black">Password<span className='text-[#F46B6A] text-lg -ml-2'>*</span></legend>
                            <input type={`${viewPass ? "text" : "password"}`} className="input py-4 border-[#CED2E5] bg-white w-full -mt-1  focus:outline-none pr-8" placeholder="Enter your password" />
                            <p className='absolute z-20 top-1/2 right-2 -translate-y-1/2 text-xl text-[#6D6E73]' onClick={() => setViewPass(!viewPass)}>{viewPass ? <AiFillEye /> : <AiFillEyeInvisible />}</p>
                        </fieldset>

                        <fieldset className="fieldset text-black relative">
                            <legend className="fieldset-legend text-black">Confirm password<span className='text-[#F46B6A] text-lg -ml-2'>*</span></legend>
                            <input type={`${viewConPass ? "text" : "password"}`} className="input py-4 border-[#CED2E5] bg-white w-full -mt-1  focus:outline-none pr-8" placeholder="Enter your password" />
                            <p className='absolute z-20 top-1/2 right-2 -translate-y-1/2 text-xl text-[#6D6E73]' onClick={() => setViewConPass(!viewConPass)}>{viewConPass ? <AiFillEye /> : <AiFillEyeInvisible />}</p>
                        </fieldset>

                        <div className='flex  gap-x-2 mb-8 col-span-2 '>
                            <div>
                                <input type="checkbox" defaultChecked className="checkbox checkbox-sm text-black bg-[#F0F0F2] border-none -mt-[2px]" />
                            </div>
                            <p className='text-[#6D6E73]'>By clicking on "start free trial". You acknowledge having read our "Privacy Policy" and "Term and Condition".</p>
                        </div>
                        <input type="submit" className='bg-[#5069E5] text-white w-full py-4 rounded-[4px] font-semibold text-xl col-span-2'   />

                    </form>

                    <p className='text-center mt-4'>Already have an account ? <span className='text-[#0D2080]'><Link href={'/login'}>Sign in</Link></span></p>

                </div>



            </div>
        </div>
    )
}
