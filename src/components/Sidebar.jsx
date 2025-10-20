"use client";
import React, { useState } from 'react'
import { MdSpaceDashboard, MdOutlineAccessTimeFilled, MdOutlineCalendarMonth, MdSettings   } from "react-icons/md";
import { LuSquareActivity } from "react-icons/lu";
import { FaUserLarge } from "react-icons/fa6";
import Link from 'next/link';

function Sidebar() {
    const [fullview, setFullView] = useState(true) // TODO: we have to make it false

    const NavLinks = [
        {
            Title: 'Dashboard',
            Icon: <MdSpaceDashboard />,
            pathname: '/dashboard'
        },
        {
            Title: 'Dashboard',
            Icon: <FaUserLarge />,
            pathname: '/dashboard'
        },
        {
            Title: 'Dashboard',
            Icon: <MdOutlineAccessTimeFilled />,
            pathname: '/dashboard'
        },
        {
            Title: 'Dashboard',
            Icon: <MdOutlineCalendarMonth />,
            pathname: '/dashboard'
        },
        {
            Title: 'Dashboard',
            Icon: <LuSquareActivity  />,
            pathname: '/dashboard'
        },
        {
            Title: 'Dashboard',
            Icon: <MdSettings  />,
            pathname: '/dashboard'
        }
    ]
  return (
    <div className={`bg-[#5069E5] w-[5%] h-full px-4 py-6 fixed flex justify-center`}>
        <ul className='flex flex-col items-center gap-9 mt-6 pt-6 border-t-2 border-[#CED2E5]'>
            {
                NavLinks.map((navlink, idx)=>
                <li className='text-2xl text-[#0C0C0D] text-center' key={idx}>
                    <Link href={navlink.pathname}>
                    {navlink.Icon}
                    </Link>
                </li>
                )
            }
        </ul>
    </div>
  )
}

export default Sidebar