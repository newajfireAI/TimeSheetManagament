"use client";
import React, { useState } from 'react'
import { MdSpaceDashboard, MdOutlineAccessTimeFilled, MdOutlineCalendarMonth, MdSettings } from "react-icons/md";
import { LuSquareActivity } from "react-icons/lu";
import { FaUserLarge } from "react-icons/fa6";
import { IoLogOut } from "react-icons/io5";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

function Sidebar() {
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
            Icon: <LuSquareActivity />,
            pathname: '/activity'
        },
        {
            Title: 'settings',
            Icon: <MdSettings />,
            pathname: '/settings'
        }
    ]

    return (
        <div className={`bg-[#5069E5] w-[100%] h-[100%] px-4 py-6 flex flex-col justify-between`}>
            <div className=' w-full'>
                <ul className="flex flex-col items-center gap-8 mt-6 pt-6 border-t border-[#CED2E5] w-full">
                    {NavLinks.map((navlink, idx) => (
                        <li
                            key={idx}
                            className={`w-full text-center text-2xl transition-colors duration-200 ${Pathname === navlink.pathname ? "text-white" : "text-[#0C0C0D]"
                                } hover:text-white`}
                        >
                            <Link href={navlink.pathname} className="flex flex-col items-center">
                                {navlink.Icon}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <p className={`${Pathname === '/logout' ? "text-white" : "text-[#0C0C0D]" } text-2xl text-center`}>
                    <Link className="flex flex-col items-center" href={'/login'}>
                        <IoLogOut />
                    </Link>
                </p>
            </div>
        </div>
    )
}

export default Sidebar