'use client'
import React, { useEffect, useRef, useState } from 'react'

function TimeMangementSheet() {
    const [Active, setActive] = useState("All")
    const [baseOnTitle, setBaseOnTitle] = useState([])
    const [currentPage, setCurrentPage] = useState(1);

    const [viewActivity, setViewActivity] = useState(false)
    const clieckref = useRef(null)

    const FilterTab = [
        { title: "All" },
        { title: "Approved" },
        { title: "Pending" },
        { title: "Rejected" }
    ]

    const data = [
        { Created_by: "Harper Rivera", Client: "David Khan", Period: "22 Sep 2025 to 28 Sep 2025", Upload_Date: "21 Sep 2025", Status: "Approved", Action: "View" },
        { Created_by: "Mason Ramirez", Client: "David Khan", Period: "22 Sep 2025 to 28 Sep 2025", Upload_Date: "21 Sep 2025", Status: "Pending", Action: "View" },
        { Created_by: "Aria Morgan", Client: "David Khan", Period: "22 Sep 2025 to 28 Sep 2025", Upload_Date: "21 Sep 2025", Status: "Rejected", Action: "View" },
        { Created_by: "Logan Hughes", Client: "David Khan", Period: "22 Sep 2025 to 28 Sep 2025", Upload_Date: "21 Sep 2025", Status: "Approved", Action: "View" },
        { Created_by: "Scarlett Rogers", Client: "David Khan", Period: "22 Sep 2025 to 28 Sep 2025", Upload_Date: "21 Sep 2025", Status: "Created", Action: "View" },
        { Created_by: "Elijah Bennett", Client: "David Khan", Period: "22 Sep 2025 to 28 Sep 2025", Upload_Date: "21 Sep 2025", Status: "Rejected", Action: "View" },
        { Created_by: "Luna Cox", Client: "David Khan", Period: "22 Sep 2025 to 28 Sep 2025", Upload_Date: "21 Sep 2025", Status: "Approved", Action: "View" },
        { Created_by: "Henry Peterson", Client: "David Khan", Period: "22 Sep 2025 to 28 Sep 2025", Upload_Date: "21 Sep 2025", Status: "Pending", Action: "View" },
        { Created_by: "Chloe Foster", Client: "David Khan", Period: "22 Sep 2025 to 28 Sep 2025", Upload_Date: "21 Sep 2025", Status: "Rejected", Action: "View" },
        { Created_by: "Jackson Gray", Client: "David Khan", Period: "22 Sep 2025 to 28 Sep 2025", Upload_Date: "21 Sep 2025", Status: "Approved", Action: "View" },
        { Created_by: "Ella Reed", Client: "David Khan", Period: "22 Sep 2025 to 28 Sep 2025", Upload_Date: "21 Sep 2025", Status: "Created", Action: "View" },
        { Created_by: "Sebastian Ward", Client: "David Khan", Period: "22 Sep 2025 to 28 Sep 2025", Upload_Date: "21 Sep 2025", Status: "Approved", Action: "View" },
        { Created_by: "Layla Kelly", Client: "David Khan", Period: "22 Sep 2025 to 28 Sep 2025", Upload_Date: "21 Sep 2025", Status: "Rejected", Action: "View" },
        { Created_by: "Owen Jenkins", Client: "David Khan", Period: "22 Sep 2025 to 28 Sep 2025", Upload_Date: "21 Sep 2025", Status: "Pending", Action: "View" },
        { Created_by: "Zoey Barnes", Client: "David Khan", Period: "22 Sep 2025 to 28 Sep 2025", Upload_Date: "21 Sep 2025", Status: "Approved", Action: "View" },
        { Created_by: "Carter Long", Client: "David Khan", Period: "22 Sep 2025 to 28 Sep 2025", Upload_Date: "21 Sep 2025", Status: "Rejected", Action: "View" },
        { Created_by: "Nora Brooks", Client: "David Khan", Period: "22 Sep 2025 to 28 Sep 2025", Upload_Date: "21 Sep 2025", Status: "Pending", Action: "View" },
        { Created_by: "Ethan Price", Client: "David Khan", Period: "22 Sep 2025 to 28 Sep 2025", Upload_Date: "21 Sep 2025", Status: "Created", Action: "View" },
        { Created_by: "Grace Patterson", Client: "David Khan", Period: "22 Sep 2025 to 28 Sep 2025", Upload_Date: "21 Sep 2025", Status: "Approved", Action: "View" },
        { Created_by: "Daniel Bailey", Client: "David Khan", Period: "22 Sep 2025 to 28 Sep 2025", Upload_Date: "21 Sep 2025", Status: "Rejected", Action: "View" }
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

    const hendleClickOutSite = (e) => {
        if (clieckref.current.contains(e.target) === false) {
            setUploadImage(false)
        }
    }

    return (
        <>
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
                                <th className='text-left rounded-tl-2xl px-4 border-b-3 border-r-3 font-medium text-[#0C0C0D] py-[22px] border-[#F0F0F2] rounded-b-xl w-[15%]'>Created by</th>
                                <th className='text-left px-4 border-b-3 border-r-3 font-medium text-[#0C0C0D] py-[22px] border-[#F0F0F2] rounded-b-xl w-[15%]'>Client</th>
                                <th className='text-left px-4 border-b-3 border-r-3 font-medium text-[#0C0C0D] py-[22px] border-[#F0F0F2] rounded-b-xl w-[30%]'>Period</th>
                                <th className='text-left px-4 border-b-3 border-r-3 font-medium text-[#0C0C0D] py-[22px] border-[#F0F0F2] rounded-b-xl w-[15%]'>Upload Date</th>
                                <th className='text-left px-4 border-b-3 border-r-3 font-medium text-[#0C0C0D] py-[22px] border-[#F0F0F2] rounded-b-xl w-[15%]'>Status</th>
                                <th className='text-left rounded-tr-2xl px-4 border-b-3 border-r-3 font-medium text-[#0C0C0D] py-[22px] border-[#F0F0F2] rounded-b-xl w-[10%]'>Action</th>
                            </tr>
                        </thead>
                        <tbody className='bg-white'>
                            {
                                currentItems.map((item, idx) =>
                                    <tr key={idx} >
                                        <td className='border-b-3 px-4 border-r-3 py-[22px] border-[#F0F0F2] rounded-xl p-2 text-left'>{item.Created_by}</td>
                                        <td className='border-b-3 px-4 border-r-3 py-[22px] border-[#F0F0F2] rounded-xl p-2 text-left'>{item.Client}</td>
                                        <td className='border-b-3 px-4 border-r-3 py-[22px] border-[#F0F0F2] rounded-xl p-2 text-left'>{item.Period}</td>
                                        <td className='border-b-3 px-4 border-r-3 py-[22px] border-[#F0F0F2] rounded-xl p-2 text-left'>{item.Upload_Date}</td>
                                        <td className='border-b-3 px-4 border-r-3 py-[22px] border-[#F0F0F2] rounded-xl p-2 text-left'>{item.Status}</td>
                                        <td onClick={()=> setViewActivity(true)} className='border-b-3 px-4 border-r-3 py-[22px] border-[#F0F0F2] rounded-xl p-2 text-center'>{item.Action}</td>
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

            <div onClick={hendleClickOutSite} className={`w-screen h-screen ${!viewActivity && 'hidden'}  ${viewActivity && 'absolute top-0 left-0 z-auto'} flex justify-center items-center shadow-2xl bg-[#00000052] `}>
                <div ref={clieckref} className='bg-white w-[427px] h-[294px] p-12 rounded-[8px] shadow '>
                    <div className="text-black">
                        <h2>
                            Hello,
                            <br />Timesheet is submit for client : client_name
                            <br />for time period: start_date To end_date
                            <br /> Please check and approve.
                            <br />Thank you.
                        </h2>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TimeMangementSheet