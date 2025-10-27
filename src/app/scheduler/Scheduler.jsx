"use client";
import cn from "@/libs/cn";
import React, { useState } from "react";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";

export default function MonthDays() {
    const [monthNum, setMonthNum] = useState('')
    const [showMonth, setShowMonth] = useState(false)

    const Months = ["January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"]

    const year = new Date().getFullYear();
    const month = Months.indexOf(monthNum)
    const today = new Date();

    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const days = Array.from({ length: daysInMonth }, (_, i) => {
        const date = new Date(year, month, i + 1);
        return {
            day: i + 1,
            isToday:
                date.getDate() === today.getDate() &&
                date.getMonth() === today.getMonth() &&
                date.getFullYear() === today.getFullYear(),
            isPast: date < today,
            isFriday: date.getDay() === 5,
            isSaturday: date.getDay() === 6,
        };
    });

    return (
        <>
            <div className="w-full">

                <div className="relative inline-flex" onClick={() => setShowMonth(!showMonth)}>
                    <input readOnly className="w-full bg-white outline-none py-[18px] px-4 text-[#6D6E73] font-roboto text-[16px] placeholder-[#6D6E73] border border-[#CED2E5] rounded " Value={monthNum} />

                    <div className="w-6 h-6 bg-[#F2F4FF] flex items-center justify-center absolute top-1/2 -translate-y-1/2 right-4 text-[#6D6E73]">
                        {showMonth ? <FaCaretUp /> : <FaCaretDown />}
                    </div>

                    <div className={`w-full text-center bg-white font-inter text-[14px] text-[#333333] z-30 absolute ${showMonth ? "opacity-100 h-auto visible overflow-auto" : "opacity-0 h-0 invisible overflow-hidden"}`}>
                        {Months.map((month, idx) => (
                            <div key={idx} onClick={() => { setMonthNum(month); setShowMonth(false); }} className="py-2 hover:bg-[#5069E5] hover:text-white cursor-pointer">{month}</div>
                        ))}
                    </div>
                </div>

                <div className="flex items-center justify-between p-4">
                    {days.map(({ day, isToday, isPast, isFriday, isSaturday }) => (
                        <div
                            key={day}
                            className={cn("w-10 h-10 px-6 flex justify-center items-center bg-white text-black rounded-md",
                                {
                                    'bg-[#D9DFFF]': isPast,
                                    'bg-[#FFCCCC]': (isFriday || isSaturday),
                                    'bg-[#0029f6] text-white font-bold w-12 h-12': isToday
                                }
                            )}
                        >
                            {day}
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
