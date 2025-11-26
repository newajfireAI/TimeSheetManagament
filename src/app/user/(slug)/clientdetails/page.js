"use client";
import Dropdown from "@/components/Dropdown";
import Radio from "@/components/Radio";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaArrowRight, FaCaretDown, FaCaretUp, FaPlus } from "react-icons/fa";
import { MdModeEdit } from "react-icons/md";

const page = () => {


  const clientname = ["Sajid", "Neaz", "Morshed"];
  const [Client, setClient] = useState("Select Client");
  const [showClient, setShowClient] = useState(false);

  const vendorname = ["Sajid", "Neaz", "Morshed"];
  const [Vendor, setVendor] = useState("Select Vendor");
  const [showVendor, setShowVendor] = useState(false);

  const employeename = ["Sajid", "Neaz", "Morshed"];
  const [Employee, setEmployee] = useState("Select Employee");
  const [showEmployee, setShowEmployee] = useState(false);









  const rate = ["Percentage", "Fixed"];
  const [Rate, setRate] = useState("Percentage");
  const [showRate, setShowRate] = useState(false);

  const rate2 = ["Percentage", "Fixed"];
  const [Rate2, setRate2] = useState("Percentage");
  const [showRate2, setShowRate2] = useState(false);

  const rate3 = ["Percentage", "Fixed"];
  const [Rate3, setRate3] = useState("Percentage");
  const [showRate3, setShowRate3] = useState(false);


  const [Recursive, setRecursive] = useState("Select month");
  const [showRecursive, setShowRecursive] = useState(false);

  const [Recursive2, setRecursive2] = useState("Select month");
  const [showRecursive2, setShowRecursive2] = useState(false);

  const [Recursive3, setRecursive3] = useState("Select month");
  const [showRecursive3, setShowRecursive3] = useState(false);

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
    "December",
  ];
  const [Month, setMonth] = useState("January");
  const [showMonth, setShowMonth] = useState(false);

  const [ClientOpen, setClientOpen] = useState(false);
  const [VendorOpen, setVendorOpen] = useState(false);
  const [EmployeeOpen, setEmployeeOpen] = useState(false);

  const [selected, setSelected] = useState(null);
  const [selected2, setSelected2] = useState(null);
  const [selected3, setSelected3] = useState(null);

  const handleOptionSelect = (option) => {
    // TODO: Implement option selection logic
  };

  return (
    <div>
      <div className="grid grid-cols-8 grid-rows-3 gap-x-8 gap-y-6">
        <Dropdown
          label="Invoice to"
          placeholder="Select Invoice to"
          options={["User", "Vender", "Employee"]}
          onSelect={handleOptionSelect}
          className='col-span-2'
        />

        <div className="flex flex-col gap-2  col-span-2">
          <label className="font-roboto text-[#000000] text-[16px]">
            Client name<span className="text-[#F46B6A]">*</span>
          </label>
          <div className="relative">
            <div
              onClick={() => setClientOpen(true)}
              className="w-6 h-6 bg-[#F2F4FF] flex items-center justify-center absolute top-1/2 -translate-y-1/2 left-4 text-[#6D6E73]"
            >
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
                className={`w-full text-center bg-white font-roboto text-[14px] text-[#333333] z-30 absolute ${showClient
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

        <div className="flex flex-col gap-2  col-span-2">
          <label className="font-roboto text-[#000000] text-[16px]">
            Vendor name<span className="text-[#F46B6A]">*</span>
          </label>
          <div className="relative">
            <div
              onClick={() => setVendorOpen(true)}
              className="w-6 h-6 bg-[#F2F4FF] flex items-center justify-center absolute top-1/2 -translate-y-1/2 left-4 text-[#6D6E73]">
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
                className={`w-full text-center bg-white font-roboto text-[14px] text-[#333333] z-30 absolute ${showVendor
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

        <div className="flex flex-col gap-2  col-span-2">
          <label className="font-roboto text-[#000000] text-[16px]">
            Client rate<span className="text-[#F46B6A]">*</span>
          </label>

          <input
            className="w-full bg-white outline-none py-[18px] px-4 text-[#6D6E73] font-roboto text-[16px] placeholder-[#6D6E73] border border-[#CED2E5] rounded "
            placeholder="Enter Client rate"
          />
        </div>

        <Dropdown
          label="Timesheet period"
          placeholder="Select Timesheet Period"
          options={["Weekly", "Monthly", "Yearly"]}
          onSelect={handleOptionSelect}
          className='col-span-2'
        />

        <div className="flex flex-col gap-2  col-span-3">
          <label className="font-roboto text-[#000000] text-[16px]">
            Start date<span className="text-[#F46B6A]">*</span>
          </label>

          <input
            className="w-full bg-white outline-none py-[18px] px-4 text-[#6D6E73] font-roboto text-[16px] placeholder-[#6D6E73] border border-[#CED2E5] rounded "
            placeholder="dd/mm/yy"
          />
        </div>

        <div className="flex flex-col gap-2  col-span-3">
          <label className="font-roboto text-[#000000] text-[16px]">
            End date<span className="text-[#F46B6A]">*</span>
          </label>

          <input
            className="w-full bg-white outline-none py-[18px] px-4 text-[#6D6E73] font-roboto text-[16px] placeholder-[#6D6E73] border border-[#CED2E5] rounded "
            placeholder="dd/mm/yy"
          />
        </div>

        <div className="flex flex-col gap-2  col-span-2">
          <label className="font-roboto text-[#000000] text-[16px]">
            Other<span className="text-[#F46B6A]">*</span>
          </label>

          <input
            className="w-full bg-white outline-none py-[18px] px-4 text-[#6D6E73] font-roboto text-[16px] placeholder-[#6D6E73] border border-[#CED2E5] rounded "
            placeholder="Enter c2c/other"
          />
        </div>

        <div className="flex flex-col gap-2  col-span-3">
          <label className="font-roboto text-[#000000] text-[16px]">
            Other rate type<span className="text-[#F46B6A]">*</span>
          </label>

          <input
            className="w-full bg-white outline-none py-[18px] px-4 text-[#6D6E73] font-roboto text-[16px] placeholder-[#6D6E73] border border-[#CED2E5] rounded "
            placeholder="Percentage"
          />
        </div>

        <div className="flex flex-col gap-2  col-span-3">
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
                className={`w-full  overflow-y-scroll hide-scrollbar text-center bg-white font-roboto text-[14px] text-[#333333] z-30 absolute ${showMonth
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

      <div className="mt-16">
        <Radio />

        <div className="grid grid-cols-8 grid-rows-2 gap-x-8 gap-y-6 mt-8">
          <div className="flex flex-col gap-2  col-span-2">
            <label className="font-roboto text-[#000000] text-[16px]">
              W2<span className="text-[#F46B6A]">*</span>
            </label>

            <input
              className="w-full bg-white outline-none py-[18px] px-4 text-[#6D6E73] font-roboto text-[16px] placeholder-[#6D6E73] border border-[#CED2E5] rounded "
              placeholder="Enter W2"
            />
          </div>

          <div className="flex flex-col gap-2  col-span-3">
            <label className="font-roboto text-[#000000] text-[16px]">
              Pay tax<span className="text-[#F46B6A]">*</span>
            </label>

            <input
              className="w-full bg-white outline-none py-[18px] px-4 text-[#6D6E73] font-roboto text-[16px] placeholder-[#6D6E73] border border-[#CED2E5] rounded "
              placeholder="Percentage"
            />
          </div>
          <div className="flex flex-col gap-2  col-span-3">
            <label className="font-roboto text-[#000000] text-[16px]">
              Consultant rate<span className="text-[#F46B6A]">*</span>
            </label>

            <input
              className="w-full bg-white outline-none py-[18px] px-4 text-[#6D6E73] font-roboto text-[16px] placeholder-[#6D6E73] border border-[#CED2E5] rounded "
              placeholder="Enter consultant rater"
            />
          </div>

          <div className="flex flex-col gap-2  col-span-2">
            <label className="font-roboto text-[#000000] text-[16px]">
              Employee name<span className="text-[#F46B6A]">*</span>
            </label>
            <div className="relative">
              <div
                onClick={() => setEmployeeOpen(true)}
                className="w-6 h-6 bg-[#F2F4FF] flex items-center justify-center absolute top-1/2 -translate-y-1/2 left-4 text-[#6D6E73]">
                <FaPlus />
              </div>
              <div onClick={() => setShowEmployee(!showEmployee)}>
                <input
                  readOnly
                  className="w-full bg-white outline-none py-[18px] pl-14 pr-4 text-[#6D6E73] font-roboto text-[16px] placeholder-[#6D6E73] border border-[#CED2E5] rounded "
                  placeholder={Employee}
                />

                <div className="w-6 h-6 bg-[#F2F4FF] flex items-center justify-center absolute top-1/2 -translate-y-1/2 right-4 text-[#6D6E73]">
                  {showEmployee ? <FaCaretUp /> : <FaCaretDown />}
                </div>
                <div
                  className={`w-full text-center bg-white font-roboto text-[14px] text-[#333333] z-30 absolute ${showEmployee
                      ? "opacity-100 h-auto visible overflow-auto"
                      : "opacity-0 h-0 invisible overflow-hidden"
                    }`}
                >
                  {employeename.map((item) => (
                    <div
                      key={item}
                      onClick={() => {
                        setEmployee(item);
                        setShowEmployee(false);
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

          <div className="flex flex-col gap-2  col-span-3">
            <label className="font-roboto text-[#000000] text-[16px]">
              Employee Phone<span className="text-[#F46B6A]">*</span>
            </label>

            <input
              className="w-full bg-white outline-none py-[18px] px-4 text-[#6D6E73] font-roboto text-[16px] placeholder-[#6D6E73] border border-[#CED2E5] rounded "
              placeholder="Enter"
            />
          </div>
          <div className="flex flex-col gap-2  col-span-3">
            <label className="font-roboto text-[#000000] text-[16px]">
              Zip code<span className="text-[#F46B6A]">*</span>
            </label>

            <input
              className="w-full bg-white outline-none py-[18px] px-4 text-[#6D6E73] font-roboto text-[16px] placeholder-[#6D6E73] border border-[#CED2E5] rounded "
              placeholder="Enter Zip code"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-5 grid-rows-3 gap-x-8 gap-y-6 mt-16">
        <Dropdown
          label="Account manager"
          placeholder="Select Account Manager"
          options={["Sajid", "Neaz", "Morshed"]}
          onSelect={handleOptionSelect}

        />

        <div className="flex flex-col gap-2  ">
          <label className="font-roboto text-[#000000] text-[16px]">
            Commission<span className="text-[#F46B6A]">*</span>
          </label>

          <input
            className="w-full bg-white outline-none py-[18px] px-4 text-[#6D6E73] font-roboto text-[16px] placeholder-[#6D6E73] border border-[#CED2E5] rounded "
            placeholder="Enter Commission"
          />
        </div>
        <Dropdown
          label="Commission on"
          placeholder="Select Commission"
          options={["Gross margin", "Gross margin2", "Gross margin3"]}
          onSelect={handleOptionSelect}

        />

        <Dropdown
          label="Rate Type"
          placeholder="Select Rate Type"
          options={["Percentage", "Fixed"]}
          onSelect={handleOptionSelect}

        />
        <div className="flex flex-col gap-2  ">

          <label
            className={`flex items-center gap-2  cursor-pointer transition 
        ${selected ? "" : ""}`}
          >
            <input
              type="radio"
              name="plan"
              value="Recursive"
              checked={selected}
              onClick={() => setSelected(!selected)}
              className="hidden"
            />
            <div
              className={`w-5 h-5 rounded-full border-2 flex items-center justify-center 
          ${selected ? "border-[#5069E5]/30 " : "border-[#DFE0E5] "}`}
            >
              <div className={`w-3 h-3 bg-[#5069E5] rounded-full ${selected ? "bg-[#5069E5] " : "bg-[#DFE0E5] "}`}></div>
            </div>
            <p className={`font-roboto text-[#000000] text-[16px]`}>Recursive</p>
          </label>



          <div className="relative" onClick={() => !selected && setShowRecursive(!showRecursive)}>
            <div>
              <input
                readOnly
                disabled={selected}
                className={`w-full outline-none py-[18px] px-4 text-[#6D6E73] font-roboto text-[16px] placeholder-[#6D6E73] border  rounded
            ${selected ? "border-[#CED2E5] bg-[#D9DFFF] cursor-not-allowed" : "border-[#CED2E5] bg-white  "}`}
                placeholder={
                  selected
                    ? "On all month"
                    : Recursive
                      ? Recursive
                      : "Select Month"
                }
              />
              <div className={`w-6 h-6 bg-[#F2F4FF] flex items-center justify-center absolute top-1/2 -translate-y-1/2 right-4 text-[#6D6E73] ${selected ? "hidden" : ""}`}>
                {showRecursive ? <FaCaretUp /> : <FaCaretDown />}
              </div>
              <div
                className={`w-full overflow-y-scroll hide-scrollbar text-center bg-white font-roboto text-[14px] text-[#333333] z-30 absolute ${showRecursive
                    ? "opacity-100 h-[250px] visible overflow-auto"
                    : "opacity-0 h-0 invisible overflow-hidden"
                  }`}
              >
                {months.map((item) => (
                  <div
                    key={item}
                    onClick={() => {
                      setRecursive(item);
                      setShowRecursive(false);
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



        <Dropdown
          label="BD manager"
          placeholder="Select BD Manager"
          options={["Sajid", "Neaz", "Morshed"]}
          onSelect={handleOptionSelect}

        />

        <div className="flex flex-col gap-2  ">
          <label className="font-roboto text-[#000000] text-[16px]">
            Commission<span className="text-[#F46B6A]">*</span>
          </label>

          <input
            className="w-full bg-white outline-none py-[18px] px-4 text-[#6D6E73] font-roboto text-[16px] placeholder-[#6D6E73] border border-[#CED2E5] rounded "
            placeholder="Enter Commission"
          />
        </div>
        <Dropdown
          label="Commission on"
          placeholder="Select Commission"
          options={["Gross margin", "Gross margin2", "Gross margin3"]}
          onSelect={handleOptionSelect}

        />

        <Dropdown
          label="Rate Type"
          placeholder="Select Rate Type"
          options={["Percentage", "Fixed"]}
          onSelect={handleOptionSelect}

        />
        <div className="flex flex-col gap-2  ">

          <label
            className={`flex items-center gap-2  cursor-pointer transition 
        ${selected2 ? "" : ""}`}
          >
            <input
              type="radio"
              name="plan"
              value="Recursive"
              checked={selected2}
              onClick={() => setSelected2(!selected2)}
              className="hidden"
            />
            <div
              className={`w-5 h-5 rounded-full border-2 flex items-center justify-center 
          ${selected2 ? "border-[#5069E5]/30 " : "border-[#DFE0E5] "}`}
            >
              <div className={`w-3 h-3 bg-[#5069E5] rounded-full ${selected2 ? "bg-[#5069E5] " : "bg-[#DFE0E5] "}`}></div>
            </div>
            <p className={`font-roboto text-[#000000] text-[16px]`}>Recursive</p>
          </label>



          <div className="relative" onClick={() => !selected2 && setShowRecursive2(!showRecursive2)}>
            <div>
              <input
                readOnly
                disabled={selected2}
                className={`w-full outline-none py-[18px] px-4 text-[#6D6E73] font-roboto text-[16px] placeholder-[#6D6E73] border  rounded
            ${selected2 ? "border-[#CED2E5] bg-[#D9DFFF] cursor-not-allowed" : "border-[#CED2E5] bg-white  "}`}
                placeholder={
                  selected2
                    ? "On all month"
                    : Recursive2
                      ? Recursive2
                      : "Select Month"
                }
              />
              <div className={`w-6 h-6 bg-[#F2F4FF] flex items-center justify-center absolute top-1/2 -translate-y-1/2 right-4 text-[#6D6E73] ${selected ? "hidden" : ""}`}>
                {showRecursive2 ? <FaCaretUp /> : <FaCaretDown />}
              </div>
              <div
                className={`w-full overflow-y-scroll hide-scrollbar text-center bg-white font-roboto text-[14px] text-[#333333] z-30 absolute ${showRecursive2
                    ? "opacity-100 h-[250px] visible overflow-auto"
                    : "opacity-0 h-0 invisible overflow-hidden"
                  }`}
              >
                {months.map((item) => (
                  <div
                    key={item}
                    onClick={() => {
                      setRecursive2(item);
                      setShowRecursive2(false);
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

        <Dropdown
          label="Recruiter"
          placeholder="Select Recruiter"
          options={["Sajid", "Neaz", "Morshed"]}
          onSelect={handleOptionSelect}
        />

        <div className="flex flex-col gap-2  ">
          <label className="font-roboto text-[#000000] text-[16px]">
            Commission<span className="text-[#F46B6A]">*</span>
          </label>

          <input
            className="w-full bg-white outline-none py-[18px] px-4 text-[#6D6E73] font-roboto text-[16px] placeholder-[#6D6E73] border border-[#CED2E5] rounded "
            placeholder="Enter Commission"
          />
        </div>
        <Dropdown
          label="Commission on"
          placeholder="Select Commission"
          options={["Gross margin", "Gross margin2", "Gross margin3"]}
          onSelect={handleOptionSelect}

        />

        <Dropdown
          label="Rate Type"
          placeholder="Select Rate Type"
          options={["Percentage", "Fixed"]}
          onSelect={handleOptionSelect}

        />
        <div className="flex flex-col gap-2  ">

          <label
            className={`flex items-center gap-2  cursor-pointer transition 
        ${selected3 ? "" : ""}`}
          >
            <input
              type="radio"
              name="plan"
              value="Recursive"
              checked={selected3}
              onClick={() => setSelected3(!selected3)}
              className="hidden"
            />
            <div
              className={`w-5 h-5 rounded-full border-2 flex items-center justify-center 
          ${selected3 ? "border-[#5069E5]/30 " : "border-[#DFE0E5] "}`}
            >
              <div className={`w-3 h-3 bg-[#5069E5] rounded-full ${selected3 ? "bg-[#5069E5] " : "bg-[#DFE0E5] "}`}></div>
            </div>
            <p className={`font-roboto text-[#000000] text-[16px]`}>Recursive</p>
          </label>



          <div className="relative" onClick={() => !selected3 && setShowRecursive3(!showRecursive3)}>
            <div>
              <input
                readOnly
                disabled={selected3}
                className={`w-full outline-none py-[18px] px-4 text-[#6D6E73] font-roboto text-[16px] placeholder-[#6D6E73] border  rounded
            ${selected3 ? "border-[#CED2E5] bg-[#D9DFFF] cursor-not-allowed" : "border-[#CED2E5] bg-white  "}`}
                placeholder={
                  selected3
                    ? "On all month"
                    : Recursive3
                      ? Recursive3
                      : "Select Month"
                }
              />
              <div className={`w-6 h-6 bg-[#F2F4FF] flex items-center justify-center absolute top-1/2 -translate-y-1/2 right-4 text-[#6D6E73] ${selected3 ? "hidden" : ""}`}>
                {showRecursive3 ? <FaCaretUp /> : <FaCaretDown />}
              </div>
              <div
                className={`w-full overflow-y-scroll hide-scrollbar text-center bg-white font-roboto text-[14px] text-[#333333] z-30 absolute ${showRecursive3
                    ? "opacity-100 h-[250px] visible overflow-auto"
                    : "opacity-0 h-0 invisible overflow-hidden"
                  }`}
              >
                {months.map((item) => (
                  <div
                    key={item}
                    onClick={() => {
                      setRecursive3(item);
                      setShowRecursive3(false);
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

      <div className=" flex flex-row justify-center gap-4 pb-12 mt-12">
        <button

          className="bg-[#5069E5] py-[14px] px-8 text-white font-roboto rounded font-semibold">
          Update client details
        </button>

        <button

          className="bg-[#FFF7F7] py-[14px] px-8 text-[#F46B6A] font-roboto rounded font-semibold">
          Close
        </button>
      </div>

      {/* pop up */}
      {ClientOpen && (
        <div className=" w-full  absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-transparent py-30  ">
          <div className=" bg-[#FFFFFF] w-[800px] mx-auto  z-30 shadow-2xl rounded ">
            <div className=" bg-[#F0F0F2] py-4 pl-12  border-b border-[#CED2E5]">
              <p className="font-roboto text-[20px] text-black">
                Add New Client
              </p>
            </div>


            <div className="bg-[#FFFFFF] p-12">


              <div className="grid grid-cols-3 grid-rows-2 gap-y-6 gap-x-4 ">
                <div className="flex flex-col gap-2  ">
                  <label className="font-roboto text-[#000000] text-[16px]">
                    Name<span className="text-[#F46B6A]">*</span>
                  </label>

                  <input
                    className="w-full bg-white outline-none py-[18px] px-4 text-[#6D6E73] font-roboto text-[16px] placeholder-[#6D6E73] border border-[#CED2E5] rounded "
                    placeholder="Client Name"
                  />
                </div>

                <div className="flex flex-col gap-2  ">
                  <label className="font-roboto text-[#000000] text-[16px]">
                    Phone<span className="text-[#F46B6A]">*</span>
                  </label>

                  <input
                    className="w-full bg-white outline-none py-[18px] px-4 text-[#6D6E73] font-roboto text-[16px] placeholder-[#6D6E73] border border-[#CED2E5] rounded "
                    placeholder="Client Phone"
                  />
                </div>

                <div className="flex flex-col gap-2  ">
                  <label className="font-roboto text-[#000000] text-[16px]">
                    Zip Code<span className="text-[#F46B6A]">*</span>
                  </label>

                  <input
                    className="w-full bg-white outline-none py-[18px] px-4 text-[#6D6E73] font-roboto text-[16px] placeholder-[#6D6E73] border border-[#CED2E5] rounded "
                    placeholder="Enter Zip Code"
                  />
                </div>

                <div className="flex flex-col gap-2  ">
                  <label className="font-roboto text-[#000000] text-[16px]">
                    Address
                  </label>

                  <input
                    className="w-full bg-white outline-none py-[18px] px-4 text-[#6D6E73] font-roboto text-[16px]  border border-[#CED2E5] rounded "

                  />
                </div>

                <div className="flex flex-col gap-2  ">
                  <label className="font-roboto text-[#000000] text-[16px]">
                    Remark</label>

                  <input
                    className="w-full bg-white outline-none py-[18px] px-4 text-[#6D6E73] font-roboto text-[16px]  border border-[#CED2E5] rounded "

                  />
                </div>
              </div>


              <div className="mt-12 flex flex-row gap-4">
                <button

                  className="bg-[#5069E5] py-[14px] px-8 text-white font-roboto rounded font-semibold">
                  Save
                </button>

                <button
                  onClick={() => setClientOpen(false)}
                  className="bg-[#FFF7F7] py-[14px] px-8 text-[#F46B6A] font-roboto rounded font-semibold">
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {VendorOpen && (
        <div className=" w-full  absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-transparent py-30  ">
          <div className=" bg-[#FFFFFF] w-[800px] mx-auto  z-30 shadow-2xl rounded ">
            <div className=" bg-[#F0F0F2] py-4 pl-12  border-b border-[#CED2E5]">
              <p className="font-roboto text-[20px] text-black">
                Add New Vendor
              </p>
            </div>


            <div className="bg-[#FFFFFF] p-12">


              <div className="grid grid-cols-3 grid-rows-2 gap-y-6 gap-x-4 ">
                <div className="flex flex-col gap-2  ">
                  <label className="font-roboto text-[#000000] text-[16px]">
                    Name<span className="text-[#F46B6A]">*</span>
                  </label>

                  <input
                    className="w-full bg-white outline-none py-[18px] px-4 text-[#6D6E73] font-roboto text-[16px] placeholder-[#6D6E73] border border-[#CED2E5] rounded "
                    placeholder="Vendor Name"
                  />
                </div>

                <div className="flex flex-col gap-2  ">
                  <label className="font-roboto text-[#000000] text-[16px]">
                    Phone<span className="text-[#F46B6A]">*</span>
                  </label>

                  <input
                    className="w-full bg-white outline-none py-[18px] px-4 text-[#6D6E73] font-roboto text-[16px] placeholder-[#6D6E73] border border-[#CED2E5] rounded "
                    placeholder="Vendor Phone"
                  />
                </div>

                <div className="flex flex-col gap-2  ">
                  <label className="font-roboto text-[#000000] text-[16px]">
                    Zip Code<span className="text-[#F46B6A]">*</span>
                  </label>

                  <input
                    className="w-full bg-white outline-none py-[18px] px-4 text-[#6D6E73] font-roboto text-[16px] placeholder-[#6D6E73] border border-[#CED2E5] rounded "
                    placeholder="Enter Zip Code"
                  />
                </div>

                <div className="flex flex-col gap-2  ">
                  <label className="font-roboto text-[#000000] text-[16px]">
                    Address
                  </label>

                  <input
                    className="w-full bg-white outline-none py-[18px] px-4 text-[#6D6E73] font-roboto text-[16px]  border border-[#CED2E5] rounded "

                  />
                </div>

                <div className="flex flex-col gap-2  ">
                  <label className="font-roboto text-[#000000] text-[16px]">
                    Remark</label>

                  <input
                    className="w-full bg-white outline-none py-[18px] px-4 text-[#6D6E73] font-roboto text-[16px]  border border-[#CED2E5] rounded "

                  />
                </div>
              </div>


              <div className="mt-12 flex flex-row gap-4">
                <button

                  className="bg-[#5069E5] py-[14px] px-8 text-white font-roboto rounded font-semibold">
                  Save
                </button>

                <button
                  onClick={() => setVendorOpen(false)}
                  className="bg-[#FFF7F7] py-[14px] px-8 text-[#F46B6A] font-roboto rounded font-semibold">
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}


      {EmployeeOpen && (
        <div className=" w-full  absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-transparent py-30  ">
          <div className=" bg-[#FFFFFF] w-[800px] mx-auto  z-30 shadow-2xl rounded ">
            <div className=" bg-[#F0F0F2] py-4 pl-12  border-b border-[#CED2E5]">
              <p className="font-roboto text-[20px] text-black">
                Add New Employee
              </p>
            </div>


            <div className="bg-[#FFFFFF] p-12">


              <div className="grid grid-cols-3 grid-rows-2 gap-y-6 gap-x-4 ">
                <div className="flex flex-col gap-2  ">
                  <label className="font-roboto text-[#000000] text-[16px]">
                    Name<span className="text-[#F46B6A]">*</span>
                  </label>

                  <input
                    className="w-full bg-white outline-none py-[18px] px-4 text-[#6D6E73] font-roboto text-[16px] placeholder-[#6D6E73] border border-[#CED2E5] rounded "
                    placeholder="Employee Name"
                  />
                </div>

                <div className="flex flex-col gap-2  ">
                  <label className="font-roboto text-[#000000] text-[16px]">
                    Phone<span className="text-[#F46B6A]">*</span>
                  </label>

                  <input
                    className="w-full bg-white outline-none py-[18px] px-4 text-[#6D6E73] font-roboto text-[16px] placeholder-[#6D6E73] border border-[#CED2E5] rounded "
                    placeholder="Employee Phone"
                  />
                </div>

                <div className="flex flex-col gap-2  ">
                  <label className="font-roboto text-[#000000] text-[16px]">
                    Zip Code<span className="text-[#F46B6A]">*</span>
                  </label>

                  <input
                    className="w-full bg-white outline-none py-[18px] px-4 text-[#6D6E73] font-roboto text-[16px] placeholder-[#6D6E73] border border-[#CED2E5] rounded "
                    placeholder="Enter Zip Code"
                  />
                </div>

                <div className="flex flex-col gap-2  ">
                  <label className="font-roboto text-[#000000] text-[16px]">
                    Address
                  </label>

                  <input
                    className="w-full bg-white outline-none py-[18px] px-4 text-[#6D6E73] font-roboto text-[16px]  border border-[#CED2E5] rounded "

                  />
                </div>

                <div className="flex flex-col gap-2  ">
                  <label className="font-roboto text-[#000000] text-[16px]">
                    Remark</label>

                  <input
                    className="w-full bg-white outline-none py-[18px] px-4 text-[#6D6E73] font-roboto text-[16px]  border border-[#CED2E5] rounded "

                  />
                </div>
              </div>


              <div className="mt-12 flex flex-row gap-4">
                <button

                  className="bg-[#5069E5] py-[14px] px-8 text-white font-roboto rounded font-semibold">
                  Save
                </button>

                <button
                  onClick={() => setEmployeeOpen(false)}
                  className="bg-[#FFF7F7] py-[14px] px-8 text-[#F46B6A] font-roboto rounded font-semibold">
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* pop up */}
    </div>
  );
};

export default page;
