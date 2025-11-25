"use client";
import Dropdown from "@/components/Dropdown";
import cn from "@/libs/cn";
import React, { useState } from "react";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";

export default function MonthDays() {
    const [monthNum, setMonthNum] = useState('January')
    const [showMonth, setShowMonth] = useState(false)
    const [timesheetPeriod, setTimesheetPeriod] = useState('')

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

    const handleOptionSelect = (option) => {
        setTimesheetPeriod(option);
    };

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

                <Dropdown
                    label="Timesheet period"
                    placeholder="Select Timesheet Period"
                    options={["Weekly", "Monthly", "Yearly"]}
                    onSelect={handleOptionSelect}
                    className='col-span-2'
                />

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
