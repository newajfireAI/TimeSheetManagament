import Link from 'next/link'
import React from 'react'

export default function SettingsLayout({children}) {
    const settingTabs = [
        {
            TabName: 'Profile',
            tabPath: '/settings/profile'
        },
        {
            TabName: 'Company',
            tabPath: '/company'
        },
        {
            TabName: 'Role permission',
            tabPath: '/role'
        },
        {
            TabName: 'Template',
            tabPath: '/template'
        },
        {
            TabName: 'Subscription',
            tabPath: '/subscription'
        },
        {
            TabName: 'Change Password',
            tabPath: '/change-password'
        }
    ]
    return (
        <div className='text-black'>
            <div>
                {
                    settingTabs.map((tab, idx) =>
                        <Link key={idx} href={tab.tabPath}><p>{tab.TabName}</p></Link>
                    )
                }
            </div>
            <div>
                {children}
            </div>
        </div>
    )
}
