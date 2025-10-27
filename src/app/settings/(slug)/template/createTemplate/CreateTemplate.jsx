"use client";
import React, { useState } from 'react'
import { HiArrowRight } from "react-icons/hi2";

const CreateTemplate = () => {
   const [selected, setSelected] = useState("Subject");
  return (
    <div className='flex justify-between'>
      <div className='text-black bg-white w-[38%] p-12'>
      

        <div>
          <p className='text-[#0C0C0D] font-roboto font-medium mb-4'>Parameter Insert on</p>

          <div className="flex items-center gap-8 ">
      {/* Radio 1 */}
      <label
        className={`flex items-center gap-2  py-3 rounded-xl  cursor-pointer transition 
        `}
      >
        <input
          type="radio"
          name="plan"
          value="Subject"
          checked={selected === "Subject"}
          onChange={() => setSelected("Subject")}
          className="hidden"
        />
        <div
          className={`w-5 h-5 rounded-full border-2 flex items-center justify-center 
          ${selected === "Subject" ? "border-[#5069E5]/30 " : "border-[#DFE0E5] "}`}
        >
          <div className={`w-3 h-3 bg-[#5069E5] rounded-full ${selected === "Subject" ? "bg-[#5069E5] " : "bg-[#DFE0E5] "}`}></div>
        </div>
        <span className={`font-roboto font-medium `}>Subject</span>
      </label>

      {/* Radio 2 */}
      <label
        className={`flex items-center gap-2  py-3 rounded-xl cursor-pointer transition-all 
       `}
      >
        <input
          type="radio"
          name="plan"
          value="Template"
          checked={selected === "Template"}
          onChange={() => setSelected("Template")}
          className="hidden"
        />
        <div
          className={`w-5 h-5 rounded-full border-2  flex items-center justify-center 
          ${selected === "Template" ? "border-[#5069E5]/30" : "border-[#DFE0E5]"}`}
        >
          <div className={`w-3 h-3 bg-[#5069E5] rounded-full ${selected === "Template" ? "bg-[#5069E5] " : "bg-[#DFE0E5] "}`}></div>
        </div>
         <span className={`font-roboto font-medium`}>Template</span>
      </label>
    </div>
        </div>

        <div className='flex flex-col gap-8 mt-8'>
          <p className='text-[#0C0C0D] font-roboto  flex items-center gap-2'>
            <HiArrowRight className='w-6 h-6' />
            User first name
            </p>
          <p className='text-[#0C0C0D] font-roboto  flex items-center gap-2'>
            <HiArrowRight className='w-6 h-6' />
            User last name
            </p>
          <p className='text-[#0C0C0D] font-roboto  flex items-center gap-2'>
            <HiArrowRight className='w-6 h-6' />
            Client name
            </p>
          <p className='text-[#0C0C0D] font-roboto  flex items-center gap-2'>
            <HiArrowRight className='w-6 h-6' />
            Start date
            </p>
          <p className='text-[#0C0C0D] font-roboto  flex items-center gap-2'>
            <HiArrowRight className='w-6 h-6' />
           End date
            </p>
          <p className='text-[#0C0C0D] font-roboto  flex items-center gap-2'>
            <HiArrowRight className='w-6 h-6' />
            Timesheet rejected by first name
            </p>
          <p className='text-[#0C0C0D] font-roboto  flex items-center gap-2'>
            <HiArrowRight className='w-6 h-6' />
            Timesheet rejected by last name
            </p>
          <p className='text-[#0C0C0D] font-roboto  flex items-center gap-2'>
            <HiArrowRight className='w-6 h-6' />
           Signature
            </p>
          <p className='text-[#0C0C0D] font-roboto  flex items-center gap-2'>
            <HiArrowRight className='w-6 h-6' />
           Private signature
            </p>
        </div>

      </div>
      <div className='text-black bg-white w-[59%]'>
        Create Template Page

      </div>
    </div>
  )
}

export default CreateTemplate
