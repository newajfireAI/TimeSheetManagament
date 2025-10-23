import React from 'react'
import SettingsLayout from '../../SettingsLayout'
import Image from 'next/image'

export default function CompanyProfile() {
  return (
    <SettingsLayout>
       <div className='grid grid-cols-4 gap-12'>
       
               <div >
                 <div className='w-full flex flex-col items-center  '>
                   <Image className='w-[370px] h-[370px]' src={'/assets/companyLogo.png'} alt={'Change Profile Image'} height={500} width={500} />
       
                   <button className='bg-[#5069E5] w-full py-[18px] text-white text-xl font-medium mt-[93px] rounded-[8px]'>Upload Logo</button>
                 </div>
               </div>
               <div className='col-span-3 '>
                 <div className="flex flex-col gap-2 ">
                           <label className="font-roboto text-[#000000] text-[16px]">
                             Name 
                           </label>
                           <input
                             className="w-full bg-white outline-none py-[18px] px-4 text-[#6D6E73] font-roboto text-[16px] placeholder-[#6D6E73] border border-[#CED2E5] rounded "
                             placeholder="Name"
                           />
                         </div>
                 
                         <div className="flex flex-col gap-2 mt-4 ">
                           <label className="font-roboto text-[#000000] text-[16px]">
                             Email 
                           </label>
                           <input
                             className="w-full bg-white outline-none py-[18px] px-4 text-[#6D6E73] font-roboto text-[16px] placeholder-[#6D6E73] border border-[#CED2E5] rounded "
                             placeholder="example@gmail.com"
                           />
                         </div>
                         <div className="flex flex-col gap-2 mt-4 w-full  ">
                             <label className="font-roboto text-[#000000] text-[16px]">
                               Phone 
                             </label>
                             
                               <input
                                 className="w-full bg-white outline-none py-[18px] px-4 text-[#6D6E73] font-roboto text-[16px] placeholder-[#6D6E73] border border-[#CED2E5] rounded "
                                 placeholder="Phone Number"
                               />
                              
                             
                           </div>

                           <div className="flex flex-col gap-2 mt-4 ">
                           <label className="font-roboto text-[#000000] text-[16px]">
                             Address(Street, City, Zip code) 
                           </label>
                           <input
                             className="w-full bg-white outline-none py-[18px] px-4 text-[#6D6E73] font-roboto text-[16px] placeholder-[#6D6E73] border border-[#CED2E5] rounded "
                             placeholder="example@gmail.com"
                           />
                         </div>
                         <div className="flex flex-col gap-2 mt-4 w-full  ">
                             <label className="font-roboto text-[#000000] text-[16px]">
                               Details 
                             </label>
                             
                               <input
                                 className="w-full bg-white outline-none py-[18px] px-4 text-[#6D6E73] font-roboto text-[16px] placeholder-[#6D6E73] border border-[#CED2E5] rounded "
                                 placeholder="Phone Number"
                               />
                              
                             
                           </div>
                 
                         
       
                         
       
                         
               </div>
       
             </div>
    </SettingsLayout>
  )
}
