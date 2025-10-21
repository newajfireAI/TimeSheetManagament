import Link from 'next/link'
import React from 'react'
import { RxCross2 } from "react-icons/rx";

export default function SendOTP() {
    return (
        <div className='h-screen flex justify-center items-center text-black'>

            <div className='bg-[#FFFFFF] w-[600px] h-[600px] z-10 border border-[#CED2E5] shadow rounded-[16px] relative'>

                <Link href={'/login'}>
                    <div className='bg-[#F2F4FF] p-3 inline-flex rounded-[8px] absolute top-5 right-5'>
                        <RxCross2 className='text-2xl font-black text-[#F46B6A]' />
                    </div>
                </Link>

                <div className='w-full h-full flex flex-col justify-center items-center px-24 py-10'>
                    <div className='w-[411px] text-center '>
                        <h2 className='text-3xl font-semibold pb-4'>OTP Verification</h2>
                        <p className='text-xl text-[#3D3D40]'>We have sent a One-Time Password (OTP) to your email: <span className='text-[#5069E5]'>example@gmail.com</span>. Please enter it below to verify.</p>
                    </div>


                    <form className='w-full mt-8 mb-3'>

                        <fieldset className="fieldset text-black w-full flex items-center justify-between mb-8">
                            <input
                                type="text"
                                inputMode="numeric"
                                pattern="[0-9]*"
                                maxLength={1}
                                className=" w-[75px] text-center text-xl pb-2 border-[#CED2E5] border-b-2 bg-white text-[#5069E5] font-bold focus:outline-none"
                                placeholder="0"
                            />
                            <input
                                type="text"
                                inputMode="numeric"
                                pattern="[0-9]*"
                                maxLength={1}
                                className=" w-[75px] text-center text-xl pb-2 border-[#CED2E5] border-b-2 bg-white text-[#5069E5] font-bold focus:outline-none"
                                placeholder="0"
                            />
                            <input
                                type="text"
                                inputMode="numeric"
                                pattern="[0-9]*"
                                maxLength={1}
                                className=" w-[75px] text-center text-xl pb-2 border-[#CED2E5] border-b-2 bg-white text-[#5069E5] font-bold focus:outline-none"
                                placeholder="0"
                            />
                            <input
                                type="text"
                                inputMode="numeric"
                                pattern="[0-9]*"
                                maxLength={1}
                                className=" w-[75px] text-center text-xl pb-2 border-[#CED2E5] border-b-2 bg-white text-[#5069E5] font-bold focus:outline-none"
                                placeholder="0"
                            />
                            <input
                                type="text"
                                inputMode="numeric"
                                pattern="[0-9]*"
                                maxLength={1}
                                className=" w-[75px] text-center text-xl pb-2 border-[#CED2E5] border-b-2 bg-white text-[#5069E5] font-bold focus:outline-none"
                                placeholder="0"
                            />
                        </fieldset>


                        <Link href={'/change-password'}><input type="submit" value={'Verify OTP'} className='bg-[#5069E5] text-white w-full py-4 rounded-[4px] font-semibold text-xl' /></Link>

                    </form>

                    <p>Didn’t receive your code? <span className='text-[#5069E5] font-semibold hover:cursor-pointer'>Resend OTP</span></p>
                </div>

            </div>
        </div>
    )
}
