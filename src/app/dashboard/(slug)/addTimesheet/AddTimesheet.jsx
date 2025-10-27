"use client";
import { FaCaretDown, FaCaretUp } from 'react-icons/fa';
import React, { useState } from 'react'
import Dropdown from '@/components/Dropdown';

const AddTimesheet = () => {

     

        const handleOptionSelect = (option) => {
    console.log("Selected:", option);
  };


  return (
    <div className='flex rounded-[8px] overflow-hidden pb-12'>
      <div className=' bg-[#E6E8F2] w-[50%] p-8  '>
        <h2 className='font-roboto text-[#0C0C0D] text-2xl font-semibold mb-6'>Preview</h2> 
        <div className=' bg-white p-6 rounded-[8px] h-[700px] '>
            </div>      
       
      </div>

      <div className=' bg-white w-[50%] p-8  '>
        <Dropdown
        label="User"
        placeholder="Select User"
        options={["Sajid", "Neaz", "Morshed"]}
        onSelect={handleOptionSelect}
        />
        
       <div className='grid grid-cols-2 grid-rows-2 gap-6 mt-5'>
         

        <Dropdown
        label="Client"
        placeholder="Select Client"
        options={["Sajid", "Neaz", "Morshed"]}
        onSelect={handleOptionSelect}
        />

         <Dropdown
        label="Client"
        placeholder="Select Client"
        options={["Sajid", "Neaz", "Morshed"]}
        onSelect={handleOptionSelect}
        />

       </div>
        
        
       
      </div>
    </div>
  )
}

export default AddTimesheet
