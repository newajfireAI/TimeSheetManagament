"use client";
import React, { useState } from 'react'
import { MdSpaceDashboard, MdOutlineAccessTimeFilled, MdOutlineCalendarMonth, MdSettings   } from "react-icons/md";
import { LuSquareActivity } from "react-icons/lu";
import { FaUserLarge } from "react-icons/fa6";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

function Sidebar() {
    const [active, setActive] = useState(false) 
    const Pathname = usePathname()

    const NavLinks = [
        {
            Title: 'dashboard',
            Icon: <MdSpaceDashboard />,
            pathname: '/dashboard'
        },
        {
            Title: 'user',
            Icon: <FaUserLarge />,
            pathname: '/user'
        },
        {
            Title: 'timesheet',
            Icon: <MdOutlineCalendarMonth />,
            pathname: '/timesheet'
        },

        {
            Title: 'scheduler',
            Icon: <MdOutlineAccessTimeFilled />,
            pathname: '/scheduler'
        },
        
        {
            Title: 'activity',
            Icon: <LuSquareActivity  />,
            pathname: '/activity'
        },
        {
            Title: 'settings',
            Icon: <MdSettings  />,
            pathname: '/settings'
        }
    ]

    
    // `/${navlink.pathname}`
    
  return (
    <div className={`bg-[#5069E5] w-[5%] h-full px-4 py-6 fixed flex justify-center`}>
        <ul className='flex flex-col items-center gap-9 mt-6 pt-6 border-t-2 border-[#CED2E5]'>
            {
                NavLinks.map((navlink, idx)=>
                <li className={`${Pathname === navlink.pathname ? 'text-white' : 'text-[#0C0C0D]'} text-2xl text-center`} key={idx}>
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