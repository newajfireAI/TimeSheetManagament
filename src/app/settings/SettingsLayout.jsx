"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

export default function SettingsLayout({children}) {
    const pathname = usePathname()
    
    const settingTabs = [
        {
            TabName: 'Profile',
            tabPath: '/settings/profile'
        },
        {
            TabName: 'Company',
            tabPath: '/settings/company'
        },
        {
            TabName: 'Role permission',
            tabPath: '/settings/role'
        },
        {
            TabName: 'Template',
            tabPath: '/settings/template'
        },
        {
            TabName: 'Subscription',
            tabPath: '/settings/subscription'
        },
        {
            TabName: 'Change Password',
            tabPath: '/settings/change-password'
        }
    ]
    return (
        <div className='text-black relative'>
            <div className='flex items-center gap-4 fixed top-20 bg-[#F0F0F2] w-full py-8 '>
                {
                    settingTabs.map((tab, idx) =>
                        <Link key={idx} href={tab.tabPath}><p className={`${pathname === tab.tabPath ? 'px-14 py-4 bg-[#D9DFFF] rounded-[4px]' : 'px-12 py-2 bg-[#FFFFFF] rounded-[4px]'} `}>{tab.TabName}</p></Link>
                    )
                }
            </div>
            <div className='mt-20'>
                {children}
            </div>
        </div>
    )
}
