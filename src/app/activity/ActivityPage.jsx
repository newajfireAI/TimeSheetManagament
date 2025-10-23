"use client"
import React, { useEffect, useState } from 'react'

export default function ActivityPage() {
    const [Active, setActive] = useState("All")
    const [baseOnTitle, setBaseOnTitle] = useState([])
    const [currentPage, setCurrentPage] = useState(1);

    const FilterTab = [
        { title: "All" },
        { title: "Admin" },
        { title: "User" },
        { title: "Supervisor" }
    ]

    const data = [
        { No: 1, Created_by: "James Carter", Date: "15 Oct 2025", Role: "Admin", Activities: "Updated user permissions" },
        { No: 2, Created_by: "Linda Moore", Date: "15 Oct 2025", Role: "User", Activities: "Timesheet Submit" },
        { No: 3, Created_by: "Robert Diaz", Date: "15 Oct 2025", Role: "Supervisor", Activities: "Reviewed project logs" },
        { No: 4, Created_by: "Emily Parker", Date: "15 Oct 2025", Role: "Admin", Activities: "Created new department" },
        { No: 5, Created_by: "William Scott", Date: "15 Oct 2025", Role: "User", Activities: "Timesheet Resubmit" },
        { No: 6, Created_by: "Sophia Turner", Date: "15 Oct 2025", Role: "Admin", Activities: "Timesheet approved" },
        { No: 7, Created_by: "Benjamin Ross", Date: "15 Oct 2025", Role: "Supervisor", Activities: "Checked employee attendance" },
        { No: 8, Created_by: "Grace Morgan", Date: "15 Oct 2025", Role: "User", Activities: "Timesheet Submit" },
        { No: 9, Created_by: "Henry Adams", Date: "15 Oct 2025", Role: "Admin", Activities: "Reset system configuration" },
        { No: 10, Created_by: "Olivia Cooper", Date: "15 Oct 2025", Role: "Supervisor", Activities: "Approved leave request" },
        { No: 11, Created_by: "Daniel Foster", Date: "15 Oct 2025", Role: "User", Activities: "Timesheet Submit" },
        { No: 12, Created_by: "Natalie Rivera", Date: "15 Oct 2025", Role: "Admin", Activities: "Created new user" },
        { No: 13, Created_by: "Lucas Reed", Date: "15 Oct 2025", Role: "Supervisor", Activities: "Verified team report" },
        { No: 14, Created_by: "Ella Bennett", Date: "15 Oct 2025", Role: "User", Activities: "Timesheet Submit" },
        { No: 15, Created_by: "Michael Ward", Date: "15 Oct 2025", Role: "Admin", Activities: "Removed inactive account" },
        { No: 16, Created_by: "Ava Cox", Date: "15 Oct 2025", Role: "Supervisor", Activities: "Team performance check" },
        { No: 17, Created_by: "Jack Ramirez", Date: "15 Oct 2025", Role: "User", Activities: "Timesheet Resubmit" },
        { No: 18, Created_by: "Isabella Perry", Date: "15 Oct 2025", Role: "Admin", Activities: "Database backup" },
        { No: 19, Created_by: "Logan Hughes", Date: "15 Oct 2025", Role: "User", Activities: "Timesheet Submit" },
        { No: 20, Created_by: "Charlotte Bell", Date: "15 Oct 2025", Role: "Supervisor", Activities: "Reviewed timesheet summary" },
        { No: 21, Created_by: "Ethan Russell", Date: "15 Oct 2025", Role: "Admin", Activities: "Updated payroll data" },
        { No: 22, Created_by: "Zoe Murphy", Date: "15 Oct 2025", Role: "User", Activities: "Timesheet Submit" },
        { No: 23, Created_by: "Sebastian Price", Date: "15 Oct 2025", Role: "Supervisor", Activities: "Approved overtime" },
        { No: 24, Created_by: "Harper Torres", Date: "15 Oct 2025", Role: "User", Activities: "Timesheet Submit" },
        { No: 25, Created_by: "Mason Brooks", Date: "15 Oct 2025", Role: "Admin", Activities: "Changed system settings" },
        { No: 26, Created_by: "Lily Edwards", Date: "15 Oct 2025", Role: "Supervisor", Activities: "Reviewed audit log" },
        { No: 27, Created_by: "Jacob Fisher", Date: "15 Oct 2025", Role: "User", Activities: "Timesheet Submit" },
        { No: 28, Created_by: "Amelia Peterson", Date: "15 Oct 2025", Role: "Admin", Activities: "Created project report" },
        { No: 29, Created_by: "Carter Simmons", Date: "15 Oct 2025", Role: "Supervisor", Activities: "Verified report data" },
        { No: 30, Created_by: "Victoria Kelly", Date: "15 Oct 2025", Role: "User", Activities: "Timesheet Submit" }
    ]

    const hendleTab = (title) => {
        setActive(title)
        if (title === "All") {
            setBaseOnTitle(data)
        } else {
            const checkTilte = data.filter(data => data.Role === title)
            setBaseOnTitle(checkTilte);
        }
    }

    useEffect(() => {
        setBaseOnTitle(data)
    }, [])


    const itemsPerPage = 10;

    const totalPages = Math.ceil(baseOnTitle.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentItems = baseOnTitle.slice(startIndex, startIndex + itemsPerPage);



    return (
        <div className='text-black'>
            <div className='flex items-center gap-2'>
                {FilterTab.map((tab, idx) =>
                    <button key={idx} onClick={() => hendleTab(tab.title)} className={`rounded-lg ${Active === tab.title ? 'bg-[#D9DFFF] text-[#0C0C0D] font-medium py-4 px-22' : 'text-[#555659] bg-white font-normal py-4 px-16'}`}>{tab.title}</button>
                )}
            </div>

            <div>
                <table className='w-full my-6'>
                    <thead className='' >
                        <tr className='bg-[#D9DFFF] w-full '>
                            <th className='text-center border-b-3 border-r-3 font-medium text-[#0C0C0D] py-[22px] border-[#F0F0F2] rounded-b-xl rounded-tl-2xl w-[5%]'>No</th>
                            <th className='text-left pl-4 border-b-3 border-r-3 font-medium text-[#0C0C0D] py-[22px] border-[#F0F0F2] rounded-b-xl w-[20%]'>Created by</th>
                            <th className='text-left pl-4 border-b-3 border-r-3 font-medium text-[#0C0C0D] py-[22px] border-[#F0F0F2] rounded-b-xl w-[15%]'>Date</th>
                            <th className='text-left pl-4 border-b-3 border-r-3 font-medium text-[#0C0C0D] py-[22px] border-[#F0F0F2] rounded-b-xl w-[20%]'>Role</th>
                            <th className='text-left pl-4 border-b-3 border-r-3 font-medium text-[#0C0C0D] py-[22px] border-[#F0F0F2] rounded-b-xl w-[40%] rounded-tr-2xl'>Activities</th>
                        </tr>
                    </thead>
                    <tbody className='bg-white'>
                        {
                            currentItems.map((item, idx) =>
                                <tr key={idx} >
                                    <td className='border-b-3 border-r-3 py-[22px] border-[#F0F0F2] rounded-xl p-2 text-center'>{item.No}</td>
                                    <td className='border-b-3 pl-4 border-r-3 py-[22px] border-[#F0F0F2] rounded-xl p-2 text-left'>{item.Created_by}</td>
                                    <td className='border-b-3 pl-4 border-r-3 py-[22px] border-[#F0F0F2] rounded-xl p-2 text-left'>{item.Date}</td>
                                    <td className='border-b-3 pl-4 border-r-3 py-[22px] border-[#F0F0F2] rounded-xl p-2 text-left'>{item.Role}</td>
                                    <td className='border-b-3 pl-4 border-r-3 py-[22px] border-[#F0F0F2] rounded-xl p-2 text-left'>{item.Activities}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>

            <div className='mb-10 py-6'>

                <div className="flex items-center justify-end gap-4">
                    <button
                        onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                        disabled={currentPage === 1}
                        className="px-6 py-3 rounded-md bg-[#D9DFFF] disabled:bg-[#DFE0E5]"
                    >
                        Previous
                    </button>

                    {Array.from({ length: totalPages }, (_, i) => (
                        <button
                            key={i}
                            onClick={() => setCurrentPage(i + 1)}
                            className={`px-3 py-1 transition ${currentPage === i + 1
                                ? "bg-[#D9DFFF] text-black rounded-full"
                                : "hover:bg-white border border-[#CED2E5] hover:rounded-full rounded-sm  duration-300"
                                }`}
                        >
                            {i + 1}
                        </button>
                    ))}

                    <button
                        onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
                        disabled={currentPage === totalPages}
                        className="px-6 py-3 rounded-md bg-[#D9DFFF] disabled:bg-[#DFE0E5]"
                    >
                        Next
                    </button>
                </div>

            </div>

        </div>
    )
}
