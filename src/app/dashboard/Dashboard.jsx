"use client"
import BarChartComponent from '@/components/BarChartComponent'
import CalendarComponent from '@/components/CalendarComponent'
import DateComponent from '@/components/DateComponent'
import PieChartComponent from '@/components/PieChartComponent'
import SalesAnalyticsCard from '@/components/SalesAnalyticsCard'
import React, { useState } from 'react'
import { GoPlus } from "react-icons/go";
import { IoMdArrowDropdown } from "react-icons/io";

export default function Dashboard() {
 
  const [user, setUser] = useState("All user");
  const [showUser, setShowUser] = useState(false);
  const User=["All user","Sajid","Rafiq","Jasim","Fahim"];


  
  return (

    <div className='pb-12' >

     <div className='flex items-center justify-between   mb-8 '>
      <div className=' flex  items-center  gap-12 w-[60%] '>
      <DateComponent/>
       <button className='  flex items-center gap-2 bg-[#5069E5] text-white font-roboto font-medium text-[20px] px-3 py-2 rounded-md '>
        <GoPlus className='w-6 h-6' />
        Create timesheet
        </button>

     </div>
     <div className='relative'>
      <button onClick={() =>setShowUser(!showUser)}  className='  flex items-center gap-2 bg-[#D9DFFF] text-[#3D3D40] font-roboto font-medium text-[20px] px-3 py-2 rounded-md '>
        {user}
        <IoMdArrowDropdown  className={`w-6 h-6 ${showUser? "rotate-180" : ""}`} />
        </button>
        <div className={` w-full text-center bg-white font-inter text-[14px] text-[#333333] z-30 absolute ${showUser ? "opacity-100 h-auto visible overflow-auto" : "opacity-0 h-0 invisible overflow-hidden"}`}>
                {User.map((item) => (
                  <div key={item} onClick={() => { setUser(item); setShowUser(false); }} className="py-2 hover:bg-[#D9DFFF]  cursor-pointer">{item}</div>
                ))}
              </div>
     </div>
     </div>
      

      <div className='grid grid-cols-3 grid-rows-2 gap-12 '>
        <div className=' col-span-2 '>
          <BarChartComponent/>
        </div>
      <PieChartComponent/>
        <CalendarComponent/>
         <div className=' col-span bg-[#D9DFFF]'>
          <SalesAnalyticsCard/>
        </div>
      </div>





      
    </div>

  )
}
