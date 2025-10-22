"use client";
import React, { useState } from "react";
import { FaCaretDown, FaCaretUp, FaPlus } from "react-icons/fa";
import { MdModeEdit } from "react-icons/md";

const page = () => {

  const roles= ["Client","Vendor","Employee" ];
  const [Role,setRole] = useState("Client");
  const [showRole,setShowRole] = useState(false);

  const clientname= ["Sajid","Neaz","Morshed" ];
  const [Client,setClient] = useState("Select Client");
  const [showClient,setShowClient] = useState(false);

   const vendorname= ["Sajid","Neaz","Morshed" ];
  const [Vendor,setVendor] = useState("Select Vendor");
  const [showVendor,setShowVendor] = useState(false);

  const period= ["Weekly","Monthly","Yearly" ];
  const [Period,setPeriod] = useState("Weekly");
  const [showPeriod,setShowPeriod] = useState(false);

    const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];
  const [Month,setMonth] = useState("January");
  const [showMonth,setShowMonth] = useState(false);

  return (
    <div>
      <div className="grid grid-cols-8 grid-rows-3 gap-8">
        <div className="flex flex-col gap-2 mt-4 col-span-2">
          <label className="font-roboto text-[#000000] text-[16px]">
            Invoice to<span className="text-[#F46B6A]">*</span>
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

        <div className="flex flex-col gap-2 mt-4 col-span-2">
          <label className="font-roboto text-[#000000] text-[16px]">
            Client name<span className="text-[#F46B6A]">*</span>
          </label>
            <div className="relative">
              <div className="w-6 h-6 bg-[#F2F4FF] flex items-center justify-center absolute top-1/2 -translate-y-1/2 left-4 text-[#6D6E73]">
                              <FaPlus />

                            </div>
          <div onClick={() => setShowClient(!showClient)}>

              <input
                readOnly
                className="w-full bg-white outline-none py-[18px] pl-14 pr-4 text-[#6D6E73] font-roboto text-[16px] placeholder-[#6D6E73] border border-[#CED2E5] rounded "
                placeholder={Client}
              />
              
              <div className="w-6 h-6 bg-[#F2F4FF] flex items-center justify-center absolute top-1/2 -translate-y-1/2 right-4 text-[#6D6E73]">
                {showClient ? <FaCaretUp /> : <FaCaretDown />}
              </div>
              <div
                className={`w-full text-center bg-white font-roboto text-[14px] text-[#333333] z-30 absolute ${
                  showClient
                    ? "opacity-100 h-auto visible overflow-auto"
                    : "opacity-0 h-0 invisible overflow-hidden"
                }`}
              >
                {clientname.map((item) => (
                  <div
                    key={item}
                    onClick={() => {
                      setClient(item);
                      setShowClient(false);
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

        <div className="flex flex-col gap-2 mt-4 col-span-2">
          <label className="font-roboto text-[#000000] text-[16px]">
            Vendor name<span className="text-[#F46B6A]">*</span>
          </label>
            <div className="relative">
              <div className="w-6 h-6 bg-[#F2F4FF] flex items-center justify-center absolute top-1/2 -translate-y-1/2 left-4 text-[#6D6E73]">
                              <FaPlus />

                            </div>
          <div onClick={() => setShowVendor(!showVendor)}>

              <input
                readOnly
                className="w-full bg-white outline-none py-[18px] pl-14 pr-4 text-[#6D6E73] font-roboto text-[16px] placeholder-[#6D6E73] border border-[#CED2E5] rounded "
                placeholder={Vendor}
              />
              
              <div className="w-6 h-6 bg-[#F2F4FF] flex items-center justify-center absolute top-1/2 -translate-y-1/2 right-4 text-[#6D6E73]">
                {showVendor ? <FaCaretUp /> : <FaCaretDown />}
              </div>
              <div
                className={`w-full text-center bg-white font-roboto text-[14px] text-[#333333] z-30 absolute ${
                  showVendor
                    ? "opacity-100 h-auto visible overflow-auto"
                    : "opacity-0 h-0 invisible overflow-hidden"
                }`}
              >
                {vendorname.map((item) => (
                  <div
                    key={item}
                    onClick={() => {
                      setVendor(item);
                      setShowVendor(false);
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

        <div className="flex flex-col gap-2 mt-4 col-span-2">
          <label className="font-roboto text-[#000000] text-[16px]">
            Client rate<span className="text-[#F46B6A]">*</span>
          </label>
          
          <input
                
                className="w-full bg-white outline-none py-[18px] px-4 text-[#6D6E73] font-roboto text-[16px] placeholder-[#6D6E73] border border-[#CED2E5] rounded "
                placeholder="Enter Client rate"
              />
   
          
        </div>

        <div className="flex flex-col gap-2 mt-4 col-span-2">
          <label className="font-roboto text-[#000000] text-[16px]">
            Timesheet period<span className="text-[#F46B6A]">*</span>
          </label>
          <div className="relative" onClick={() => setShowPeriod(!showPeriod)}>
            <div>
              <input
                readOnly
                className="w-full bg-white outline-none py-[18px] px-4 text-[#6D6E73] font-roboto text-[16px] placeholder-[#6D6E73] border border-[#CED2E5] rounded "
                placeholder={Period}
              />
              <div className="w-6 h-6 bg-[#F2F4FF] flex items-center justify-center absolute top-1/2 -translate-y-1/2 right-4 text-[#6D6E73]">
                {showPeriod ? <FaCaretUp /> : <FaCaretDown />}
              </div>
              <div
                className={`w-full text-center bg-white font-roboto text-[14px] text-[#333333] z-30 absolute ${
                  showPeriod
                    ? "opacity-100 h-auto visible overflow-auto"
                    : "opacity-0 h-0 invisible overflow-hidden"
                }`}
              >
                {period.map((item) => (
                  <div
                    key={item}
                    onClick={() => {
                      setPeriod(item);
                      setShowPeriod(false);
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

        <div className="flex flex-col gap-2 mt-4 col-span-3">
          <label className="font-roboto text-[#000000] text-[16px]">
            Start date<span className="text-[#F46B6A]">*</span>
          </label>
          
          <input
                
                className="w-full bg-white outline-none py-[18px] px-4 text-[#6D6E73] font-roboto text-[16px] placeholder-[#6D6E73] border border-[#CED2E5] rounded "
                placeholder="dd/mm/yy"
              />
   
          
        </div>

        <div className="flex flex-col gap-2 mt-4 col-span-3">
          <label className="font-roboto text-[#000000] text-[16px]">
            End date<span className="text-[#F46B6A]">*</span>
          </label>
          
          <input
                
                className="w-full bg-white outline-none py-[18px] px-4 text-[#6D6E73] font-roboto text-[16px] placeholder-[#6D6E73] border border-[#CED2E5] rounded "
                placeholder="dd/mm/yy"
              />
   
          
        </div>

        <div className="flex flex-col gap-2 mt-4 col-span-2">
          <label className="font-roboto text-[#000000] text-[16px]">
            Other<span className="text-[#F46B6A]">*</span>
          </label>
          
          <input
                
                className="w-full bg-white outline-none py-[18px] px-4 text-[#6D6E73] font-roboto text-[16px] placeholder-[#6D6E73] border border-[#CED2E5] rounded "
                placeholder="Enter c2c/other"
              />
   
          
        </div>

        <div className="flex flex-col gap-2 mt-4 col-span-3">
          <label className="font-roboto text-[#000000] text-[16px]">
            Other rate type<span className="text-[#F46B6A]">*</span>
          </label>
          
          <input
                
                className="w-full bg-white outline-none py-[18px] px-4 text-[#6D6E73] font-roboto text-[16px] placeholder-[#6D6E73] border border-[#CED2E5] rounded "
                placeholder="Percentage"
              />
   
          
        </div>

        <div className="flex flex-col gap-2 mt-4 col-span-3">
          <label className="font-roboto text-[#000000] text-[16px]">
            Recursive<span className="text-[#F46B6A]">*</span>
          </label>
          <div className="relative" onClick={() => setShowMonth(!showMonth)}>
            <div>
              <input
                readOnly
                className="w-full bg-white outline-none py-[18px] px-4 text-[#6D6E73] font-roboto text-[16px] placeholder-[#6D6E73] border border-[#CED2E5] rounded "
                placeholder={Month}
              />
              <div className="w-6 h-6 bg-[#F2F4FF] flex items-center justify-center absolute top-1/2 -translate-y-1/2 right-4 text-[#6D6E73]">
                {showMonth ? <FaCaretUp /> : <FaCaretDown />}
              </div>
              <div
                className={`w-full  overflow-y-scroll hide-scrollbar text-center bg-white font-roboto text-[14px] text-[#333333] z-30 absolute ${
                  showMonth
                    ? "opacity-100 h-[250px] visible overflow-auto"
                    : "opacity-0 h-0 invisible overflow-hidden"
                }`}
              >
                {months.map((item) => (
                  <div
                    key={item}
                    onClick={() => {
                      setMonth(item);
                      setShowMonth(false);
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
      </div>

      <div>
        
      </div>
    </div>
  );
};

export default page;
