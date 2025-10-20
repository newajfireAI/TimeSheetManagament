"use client";
import React, { useState } from 'react'
import { MdSpaceDashboard, MdOutlineAccessTimeFilled, MdOutlineCalendarMonth, MdSettings   } from "react-icons/md";
import { LuSquareActivity } from "react-icons/lu";
import { FaUserLarge } from "react-icons/fa6";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

function Sidebar() {
    const [fullview, setFullView] = useState(true) // TODO: we have to make it false
    const Pathname = usePathname()

    const NavLinks = [
        {
            Title: 'Dashboard',
            Icon: <MdSpaceDashboard />,
            pathname: '/dashboard'
        },
        {
            Title: 'Add User',
            Icon: <FaUserLarge />,
            pathname: '/user'
        },
        {
            Title: 'Time sheet',
            Icon: <MdOutlineCalendarMonth />,
            pathname: '/Timesheet'
        },

        {
            Title: 'Scheduler',
            Icon: <MdOutlineAccessTimeFilled />,
            pathname: '/scheduler'
        },
        
        {
            Title: 'Activity',
            Icon: <LuSquareActivity  />,
            pathname: '/activity'
        },
        {
            Title: 'Settings',
            Icon: <MdSettings  />,
            pathname: '/settings'
        }
    ]
  return (
    <div className={`bg-[#5069E5] w-[5%] h-full px-4 py-6 fixed flex justify-center`}>
        <ul className='flex flex-col items-center gap-9 mt-6 pt-6 border-t-2 border-[#CED2E5]'>
            {
                NavLinks.map((navlink, idx)=>
                <li className={`${Pathname === navlink.pathname ? 'text-white' : 'text-[#0C0C0D]' }text-2xl  text-center`} key={idx}>
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