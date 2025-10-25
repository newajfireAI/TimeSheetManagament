import CalendarComponent from '@/components/CalendarComponent'
import PieChartComponent from '@/components/PieChartComponent'
import React from 'react'

export default function Dashboard() {
  return (
    <div >
      

      <div className='grid grid-cols-3 grid-rows-2 gap-12'>
        <div className='h-[500px] col-span-2 bg-amber-300'>
          1
        </div>
      <PieChartComponent/>
        <CalendarComponent/>
         <div className='h-[500px] col-span-2 bg-amber-300'>
          1
        </div>
      </div>
    </div>
  )
}
