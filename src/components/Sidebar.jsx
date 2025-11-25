"use client";
import React, { useState, useEffect } from 'react'
import { MdSpaceDashboard, MdOutlineAccessTimeFilled, MdOutlineCalendarMonth, MdSettings } from "react-icons/md";
import { LuSquareActivity } from "react-icons/lu";
import { FaUserLarge } from "react-icons/fa6";
import { IoLogOut } from "react-icons/io5";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

function Sidebar() {
    const Pathname = usePathname()
    const [userRole, setUserRole] = useState(null);

    useEffect(() => {
        const getCookie = (name) => {
            const value = `; ${document.cookie}`;
            const parts = value.split(`; ${name}=`);
            if (parts.length === 2) return parts.pop().split(';').shift();
        }
        setUserRole(getCookie('user_role'));
    }, []);

    const NavLinks = [
        {
            Title: 'dashboard',
            Icon: <MdSpaceDashboard />,
            pathname: '/dashboard'
        },
        {
            Title: 'user',
            Icon: <FaUserLarge />,
            pathname: '/user/userlist'
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

    const filteredLinks = userRole === 'user'
        ? NavLinks.filter(link => ['dashboard', 'timesheet', 'settings'].includes(link.Title))
        : NavLinks;

    return (
        <div className={`bg-[#5069E5] w-[100%] h-[100%] px-4 py-6 flex flex-col justify-between`}>
            <div className=' w-full'>
                <ul className="flex flex-col items-center gap-8 mt-6 pt-6 border-t border-[#CED2E5] w-full">
                    {filteredLinks.map((navlink, idx) => (
                        <li
                            key={idx}
                            className={`w-full text-center text-2xl transition-colors duration-200 ${Pathname === navlink.pathname || (navlink.pathname !== '/' && Pathname.startsWith(navlink.pathname + "/") && navlink.pathname !== '/dashboard') ? "text-white" : "text-[#0C0C0D]"
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
                <div className={`${Pathname === '/logout' ? "text-white" : "text-[#0C0C0D]"} text-2xl text-center cursor-pointer`}>
                    <div className="flex flex-col items-center" onClick={() => {
                        document.cookie = "auth_token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC; SameSite=Strict; Secure";
                        document.cookie = "user_role=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC; SameSite=Strict; Secure";
                        window.location.href = "/login";
                    }}>
                        <IoLogOut />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar