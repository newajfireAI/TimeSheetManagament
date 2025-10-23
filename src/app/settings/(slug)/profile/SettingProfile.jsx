"use client"
import React, { useState } from 'react'
import SettingsLayout from '../../SettingsLayout'
import Image from 'next/image'

import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import { MdModeEdit } from 'react-icons/md';


export default function SettingProfile() {
  const [Gender, setGender] = useState("Male");
  const [showGender, setShowGender] = useState(false);
  const gender = ["Male", "Female", "Others"];

  const [Blood, setBlood] = useState("Blood Group");
  const [showBlood, setShowBlood] = useState(false);
  const bloodGroups = [
  "A+",
  "A−",
  "B+",
  "B−",
  "AB+",
  "AB−",
  "O+",
  "O−"
];

  return (
    <SettingsLayout>
      <div className='grid grid-cols-3 gap-12'>

        <div>
          <div className='w-full '>
            <Image className='w-full h-full' src={'/assets/SettingProfileImage.png'} alt={'Change Profile Image'} height={400} width={400} />

            <button className='bg-[#5069E5] w-full py-[18px] text-white text-xl font-medium mt-8 rounded-[8px]'>Upload Image</button>
          </div>
        </div>
        <div className='col-span-2 '>
          <div className="flex flex-col gap-2 ">
                    <label className="font-roboto text-[#000000] text-[16px]">
                      Name 
                    </label>
                    <input
                      className="w-full bg-white outline-none py-[18px] px-4 text-[#6D6E73] font-roboto text-[16px] placeholder-[#6D6E73] border border-[#CED2E5] rounded "
                      placeholder="Name"
                    />
                  </div>
          
                  <div className="flex flex-col gap-2 mt-4 ">
                    <label className="font-roboto text-[#000000] text-[16px]">
                      Email 
                    </label>
                    <input
                      className="w-full bg-white outline-none py-[18px] px-4 text-[#6D6E73] font-roboto text-[16px] placeholder-[#6D6E73] border border-[#CED2E5] rounded "
                      placeholder="example@gmail.com"
                    />
                  </div>
                  <div className="flex flex-col gap-2 mt-4 w-full  ">
                      <label className="font-roboto text-[#000000] text-[16px]">
                        Phone 
                      </label>
                      
                        <input
                          className="w-full bg-white outline-none py-[18px] px-4 text-[#6D6E73] font-roboto text-[16px] placeholder-[#6D6E73] border border-[#CED2E5] rounded "
                          placeholder="Phone Number"
                        />
                       
                      
                    </div>
          
                  <div className="flex justify-between gap-[2%] mt-4 ">
                    <div className="flex flex-col gap-2 mt-4  w-full">
                      <label className="font-roboto text-[#000000] text-[16px]">
                        Gender
                      </label>
                      <div className="relative"
                        onClick={() => setShowGender(!showGender)}
                      >
                        <input
                          readOnly
                          className="w-full bg-white outline-none py-[18px] px-4 text-[#6D6E73] font-roboto text-[16px] placeholder-[#6D6E73] border border-[#CED2E5] rounded "
                          placeholder={Gender}
                        />
                        <div className="w-6 h-6 bg-[#F2F4FF] flex items-center justify-center absolute top-1/2 -translate-y-1/2 right-4 text-[#6D6E73]">
                          {showGender ? <FaCaretUp /> : <FaCaretDown />}
                        </div>
                        <div className={`w-full text-center bg-white font-inter text-[14px] text-[#333333] z-30 absolute ${showGender ? "opacity-100 h-auto visible overflow-auto" : "opacity-0 h-0 invisible overflow-hidden"}`}>
                          {gender.map((item) => (
                            <div key={item} onClick={() => { setGender(item); setShowGender(false); }} className="py-2 hover:bg-[#5069E5] hover:text-white cursor-pointer">{item}</div>
                          ))}
                        </div>
                      </div>
                    </div>


                   
                  <div className="flex flex-col gap-2 mt-4  w-full">
                      <label className="font-roboto text-[#000000] text-[16px]">
                        Blood Group
                      </label>
                      <div className="relative"
                        onClick={() => setShowBlood(!showBlood)}
                      >
                        <input
                          readOnly
                          className="w-full bg-white outline-none py-[18px] px-4 text-[#6D6E73] font-roboto text-[16px] placeholder-[#6D6E73] border border-[#CED2E5] rounded "
                          placeholder={Blood}
                        />
                        <div className="w-6 h-6 bg-[#F2F4FF] flex items-center justify-center absolute top-1/2 -translate-y-1/2 right-4 text-[#6D6E73]">
                          {showBlood ? <FaCaretUp /> : <FaCaretDown />}
                        </div>
                        <div className={`w-full text-center  overflow-y-scroll hide-scrollbar bg-white font-inter text-[14px] text-[#333333] z-30 absolute ${showBlood ? "opacity-100 h-[150px] visible overflow-auto" : "opacity-0 h-0 invisible overflow-hidden"}`}>
                          {bloodGroups.map((item) => (
                            <div key={item} onClick={() => { setBlood(item); setShowBlood(false); }} className="py-2 hover:bg-[#5069E5] hover:text-white cursor-pointer">{item}</div>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                  </div>

                   <div className="flex flex-col gap-2 mt-4 w-full  ">
                              <label className="font-roboto text-[#000000] text-[16px]">
                                Signature 
                              </label>
                              <div className="relative">
                                <input
                                  className="w-full bg-white outline-none py-[18px] px-4 text-[#6D6E73] font-roboto text-[16px] placeholder-[#6D6E73] border border-[#CED2E5] rounded "
                                  placeholder="No file choosen"
                                />
                                <div className="w-6 h-6 bg-[#F2F4FF] flex items-center justify-center absolute top-1/2 -translate-y-1/2 right-4 text-[#6D6E73]">
                                  <MdModeEdit />
                                </div>
                              </div>
                            </div>
        </div>

      </div>
    </SettingsLayout>
  )
}
