"use client";
import Container from "@/components/container";
import React, { useState } from "react";
import { MdModeEdit } from "react-icons/md";
import { FaArrowRight, FaCaretDown, FaCaretUp, FaRegEyeSlash } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import Image from "next/image";
import Link from "next/link";
// import userIcon from "/assets/userIcon.png"

const page = () => {
  const [showPass, setShowPass] = useState(false);
  // const [showNewPass, setShowNewPass] = useState(false);
  const [Role,setRole] = useState("User");
   const [showRole,setShowRole] = useState(false);
   const [Gender,setGender] = useState("Male");
   const [showGender,setShowGender] = useState(false);

  const roles= ["User","Vendor","Employee" ];
  const gender= ["Male","Female","Others" ];
  const [open, setOpen] = useState(false);



  return (
    <div className="relative" >
      <form className="py-8 ">
        <div className="flex flex-col gap-2 ">
          <label className="font-roboto text-[#000000] text-[16px]">
            Name <span className="text-[#F46B6A]">*</span>
          </label>
          <input
            className="w-full bg-white outline-none py-[18px] px-4 text-[#6D6E73] font-roboto text-[16px] placeholder-[#6D6E73] border border-[#CED2E5] rounded "
            placeholder="Name"
          />
        </div>

        <div className="flex flex-col gap-2 mt-4 ">
          <label className="font-roboto text-[#000000] text-[16px]">
            Email <span className="text-[#F46B6A]">*</span>
          </label>
          <input
            className="w-full bg-white outline-none py-[18px] px-4 text-[#6D6E73] font-roboto text-[16px] placeholder-[#6D6E73] border border-[#CED2E5] rounded "
            placeholder="example@gmail.com"
          />
        </div>

        <div className="flex justify-between gap-[2%] mt-4 ">
          <div className="flex flex-col gap-2 mt-4 w-full  ">
            <label className="font-roboto text-[#000000] text-[16px]">
              Phone <span className="text-[#F46B6A]">*</span>
            </label>
            <div className="relative">
              <input
                className="w-full bg-white outline-none py-[18px] pl-14 text-[#6D6E73] font-roboto text-[16px] placeholder-[#6D6E73] border border-[#CED2E5] rounded "
                placeholder="Phone Number"
              />
              <div className="w-6 h-6 bg-[#F2F4FF] flex items-center justify-center absolute top-1/2 -translate-y-1/2 left-4 text-[#6D6E73]">
                <MdModeEdit />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2 mt-4  w-full">
            <label className="font-roboto text-[#000000] text-[16px]">
              Gender<span className="text-[#F46B6A]">*</span>
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
                {showGender? <FaCaretUp />:<FaCaretDown />}
            </div>
            <div className={`w-full text-center bg-white font-roboto text-[14px] text-[#333333] z-30 absolute ${showGender ? "opacity-100 h-auto visible overflow-auto" : "opacity-0 h-0 invisible overflow-hidden"}`}>
                  {gender.map((item) => (
                    <div key={item} onClick={() => { setGender(item); setShowGender(false); }} className="py-2 hover:bg-[#5069E5] hover:text-white cursor-pointer">{item}</div>
                  ))}
              </div>
            </div>
          </div>
        </div>

        

        <div className="flex justify-between gap-[2%] mt-4 ">

        <div className="flex flex-col gap-2 mt-4 w-full">
          <label className="font-roboto text-[#000000] text-[16px]">
            Role<span className="text-[#F46B6A]">*</span>
          </label>
          <div className="relative"
          onClick={() => setShowRole(!showRole)}
          >
             <div >
            
            <input
              readOnly
              className="w-full bg-white outline-none py-[18px] px-4 text-[#6D6E73] font-roboto text-[16px] placeholder-[#6D6E73] border border-[#CED2E5] rounded "
              placeholder={Role}
            />
            <div 
            
            className="w-6 h-6 bg-[#F2F4FF] flex items-center justify-center absolute top-1/2 -translate-y-1/2 right-4 text-[#6D6E73]">
              
              {showRole? <FaCaretUp />:<FaCaretDown />}
            </div>
            <div className={`w-full text-center bg-white font-roboto text-[14px] text-[#333333] z-30 absolute ${showRole ? "opacity-100 h-auto visible overflow-auto" : "opacity-0 h-0 invisible overflow-hidden"}`}>
                  {roles.map((item) => (
                    <div key={item} onClick={() => { setRole(item); setShowRole(false); }} className="py-2 hover:bg-[#5069E5] hover:text-white cursor-pointer">{item}</div>
                  ))}
                </div>
            </div>
          </div>
        </div>




          <div className="flex flex-col gap-2 mt-4  w-full">
            <label className="font-roboto text-[#000000] text-[16px]">
              Password <span className="text-[#F46B6A]">*</span>
            </label>
            <div className="relative">
              <input
               type={showPass ? "text" : "password"}
                className="w-full bg-white outline-none py-[18px] px-4 text-[#3D3D40] font-roboto text-[16px] placeholder-[#3D3D40] border border-[#CED2E5] rounded "
                placeholder=""
              />
              <div 
               onClick={() => setShowPass(!showPass)}
              className="w-6 h-6  flex items-center justify-center absolute top-1/2 -translate-y-1/2 right-4 text-[#6D6E73]">
                 {showPass ? (
                  <IoEyeOutline className="text-[#6D6E73] w-6 h-6 " />
                ) : (
                  <FaRegEyeSlash className="text-[#6D6E73] w-6 h-6 " />
                )}
              </div>
            </div>
          </div>

          {/* <div className="flex flex-col gap-2 mt-4  w-full">
            <label className="font-roboto text-[#000000] text-[16px]">
              Confirm Password<span className="text-[#F46B6A]">*</span>
            </label>
            <div className="relative">
              <input
               type={showNewPass ? "text" : "password"}
                className="w-full bg-white outline-none py-[13px] px-4 text-[#3D3D40] font-roboto text-[16px] placeholder-[#3D3D40] border border-[#CED2E5] rounded "
                placeholder=""
              />
              <div 
               onClick={() => setShowNewPass(!showNewPass)}
              className="w-6 h-6  flex items-center justify-center absolute top-1/2 -translate-y-1/2 right-4 text-[#6D6E73]">
                 {showNewPass ? (
                  <IoEyeOutline className="text-[#6D6E73] w-6 h-6 " />
                ) : (
                  <FaRegEyeSlash className="text-[#6D6E73] w-6 h-6 " />
                )}
              </div>
            </div>
          </div> */}
        </div>
      </form>
      <div className="mt-8 w-[15%] flex justify-between mx-auto">
        <button
        onClick={() => setOpen(true)}
        className="bg-[#5069E5] py-[14px] px-8 text-white font-roboto rounded font-semibold">
          Add user
        </button>

        <button className="bg-[#FFF7F7] py-[14px] px-8 text-[#F46B6A] font-roboto rounded font-semibold">
          Cancel
        </button>
      </div>

      {open && (<div className=" w-full  absolute top-1/2 -translate-y-1/2 bg-transparent py-30   ">
        <div className="bg-[url('/assets/popup.png')] py-[87px] px-[67px] w-[400px] mx-auto  bg-cover bg-center bg-no-repeat   z-30">
          <div className="w-[266px]">
            <div className="flex flex-col justify-center items-center gap-2">
              <Image src="/assets/userIcon.png" alt="User Icon" width={58} height={58}/>

              <p className="font-roboto text-[#0C0C0D] font-medium text-[20px] text-center">
                User has been registered successfully
              </p>
              </div>




            <div className="flex flex-col gap-3 items-center mt-6 ">

            <Link href="/user/clientdetails">
            <button className="flex items-center gap-2 py-2.5 px-4 bg-[#5069E5] text-[#FFFFFF] font-roboto rounded  font-medium">Assign client details
              <FaArrowRight />
            </button>
            </Link>
          <button
          onClick={() => setOpen(false)}
           className="py-2 px-4 bg-[#FFF7F7] text-[#F46B6A] font-roboto rounded font-medium ">Close</button>
            </div>
            </div>      
        </div>

      </div>)}

    </div>
  );
};


export default page;
