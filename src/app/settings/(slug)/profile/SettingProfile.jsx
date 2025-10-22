"use client"
import React, { useState } from 'react'
import SettingsLayout from '../../SettingsLayout'
import Image from 'next/image'

import { FaCaretDown, FaCaretUp } from "react-icons/fa";


export default function SettingProfile() {
  const [Gender, setGender] = useState("Male");
  const [showGender, setShowGender] = useState(false);
  const gender = ["Male", "Female", "Others"];

  return (
    <SettingsLayout>
      <div className='grid grid-cols-3 gap-12'>

        <div>
          <div className='w-full '>
            <Image className='w-full h-full' src={'/assets/SettingProfileImage.png'} alt={'Change Profile Image'} height={400} width={400} />

            <button className='bg-[#5069E5] w-full py-[18px] text-white text-xl font-medium mt-8 rounded-[8px]'>Upload Image</button>
          </div>
        </div>
        <div className='col-span-2 '>
          {/* Sajid Vai Do this */}
        </div>

      </div>
    </SettingsLayout>
  )
}
