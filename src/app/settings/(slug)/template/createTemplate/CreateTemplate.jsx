"use client";
import TemplateUsed from '@/components/TemplateUsed';
import React, { useState } from 'react'
import { FaCaretDown, FaCaretUp } from 'react-icons/fa';
import { HiArrowRight } from "react-icons/hi2";

const CreateTemplate = () => {
   const [selected, setSelected] = useState("Subject");

   const roles = ["Timesheet submit","Client", "Vendor", "Employee"];
     const [Role, setRole] = useState("Timesheet submit");
     const [showRole, setShowRole] = useState(false);

  return (
    <div className='flex justify-between'>
      <div className=' bg-white w-[38%] p-12 rounded-[8px] 0] '>
      

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
        <span className={`font-roboto font-medium text-[#0C0C0D]`}>Subject</span>
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
         <span className={`font-roboto font-medium text-[#0C0C0D]`}>Template</span>
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

      <div className='  w-[59%]'>
        <div className="flex flex-col gap-2 ">
                  <label className="font-roboto text-[#000000] text-[16px]">
                    Template type<span className="text-[#F46B6A]">*</span>
                  </label>
                  <div className="relative" onClick={() => setShowRole(!showRole)}>
                    <div>
                      <input
                        readOnly
                        className="w-full bg-white outline-none py-[18px] px-4 text-[#6D6E73] font-roboto text-[16px] placeholder-[#6D6E73] border border-[#CED2E5] rounded "
                        placeholder={Role}
                      />
                      <div className="w-6 h-6 bg-[#F2F4FF] flex items-center justify-center absolute top-1/2 -translate-y-1/2 right-4 text-[#6D6E73]">
                        {showRole ? <FaCaretUp /> : <FaCaretDown />}
                      </div>
                      <div
                        className={`w-full text-center bg-white font-roboto text-[14px] text-[#333333] z-30 absolute ${
                          showRole
                            ? "opacity-100 h-auto visible overflow-auto"
                            : "opacity-0 h-0 invisible overflow-hidden"
                        }`}
                      >
                        {roles.map((item) => (
                          <div
                            key={item}
                            onClick={() => {
                              setRole(item);
                              setShowRole(false);
                            }}
                            className="py-2 hover:bg-[#5069E5] hover:text-white cursor-pointer"
                          >
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

         <div className="flex flex-col gap-2  my-8">
          <label className="font-roboto text-[#000000] text-[16px]">
            Template Name<span className="text-[#F46B6A]">*</span>
          </label>

          <input
            className="w-full bg-white outline-none py-[18px] px-4 text-[#6D6E73] font-roboto text-[16px] placeholder-[#6D6E73] border border-[#CED2E5] rounded "
            placeholder="Timesheet Name"
          />
        </div>

        <TemplateUsed/>

        <div className="flex flex-col gap-2  my-8">
          <label className="font-roboto text-[#000000] text-[16px]">
            Subject<span className="text-[#F46B6A]">*</span>
          </label>

          <input
            className="w-full bg-white outline-none py-[18px] px-4 text-[#6D6E73] font-roboto text-[16px] placeholder-[#6D6E73] border border-[#CED2E5] rounded "
            placeholder="This is subject {{ Client name }}"
          />
        </div>


        <div className="flex  gap-4  mt-12">
          <button className='bg-[#5069E5] font-roboto font-semibold text-[#ffffff] px-8 py-[14px]  rounded-sm w-fit'>
           Save
          </button>
          <button className='bg-[#FFF7F7] font-roboto font-semibold text-[#F46B6A] px-8 py-[14px]  rounded-sm w-fit'>
          Cancel
          </button>
        </div>

      </div>
    </div>
  )
}

export default CreateTemplate
