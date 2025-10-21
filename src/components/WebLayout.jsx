"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

function WebLayout({ children }) {
    const pathname = usePathname();
    
    

    return (

        <>
            {
                ((pathname !== '/') &&
                (pathname !== '/login') &&
                (pathname !== '/') &&
                (pathname !== '/login/forgot-password') &&
                (pathname !== '/signup')) ?
                    <>
                        {/* Header */}
                        <section className="w-full h-[80px]">
                            <Navbar />
                        </section>

                        {/* Sidebar + Content */}
                        <div className="fixed flex items-center justify-between w-screen h-[calc(100vh-80px)]">
                            <div className="w-[5%] h-full">
                                <Sidebar />
                            </div>
                            <div className="w-[95%] px-12 pt-12 bg-[#F0F0F2] h-full overflow-y-scroll hide-scrollbar">
                                {children}
                            </div>
                        </div>
                    </>
                    :
                    <>
                        <div className="w-screen h-screen bg-[#F0F0F2]">
                            {children}
                        </div>
                    </>

            }
        </>
    )
}

export default WebLayout