import React from 'react'
import SettingsLayout from '../../SettingsLayout'
import Image from 'next/image'

export default function SubscriptionSetting() {

  const features = [
    {
      Title: "Hours Management"
    },
    {
      Title: "Schedular"
    },
    {
      Title: "Template management"
    },
    {
      Title: "Approval"
    },
    {
      Title: "Data Visualization"
    },
  ]
  return (
    <SettingsLayout>
      <div className='flex justify-center gap-8 items-end'>

        <div className='w-[390px] h-[563px] border-[#CED2E5] bg-white rounded-2xl shadow p-8'>
          <div>
            <Image className='mb-8' src={'/assets/basicSubscription.png'} alt={'Basic Pakage'} height={40} width={40} />

            <div>
              <h3 className='text-[#0C0C0D] text-xl font-medium'>Basic</h3>
              <p className='text-[#3D3D40] text-sm'>Best for small firm</p>
              <h3 className='text-[#0C0C0D] text-3xl font-bold mt-8'>$19.99<span className='text-[#3D3D40] text-sm font-normal'>/month</span></h3>
              <button className='my-8 py-4 w-full bg-[#DFE0E5] text-xl text-[#555659] font-semibold rounded-[8px]'>Subscribed</button>
              <h3 className='text-[#0C0C0D] text-xl font-medium mb-6'>Feature</h3>
              {
                features.map((ftr, idx) =>
                  <p className='text-[#3D3D40] text-sm pb-2' key={idx}>{ftr.Title}</p>
                )
              }

            </div>
          </div>
        </div>
        <div className='w-[390px] h-[600px] border-[#CED2E5] bg-white rounded-2xl shadow p-8'>
          <div>
            <div className='flex justify-between'>
              <div>
                <Image className='mb-8' src={'/assets/propularSubscription.png'} alt={'Basic Pakage'} height={40} width={40} />
              </div>
              <div>
                <button className='bg-[#E5D416] text-sm text-[#ffffff] rounded-full px-3 py-2'>Popular</button>
              </div>
            </div>

            <div>
              <h3 className='text-[#0C0C0D] text-xl font-medium'>Basic</h3>
              <p className='text-[#3D3D40] text-sm'>Best for small firm</p>
              <h3 className='text-[#0C0C0D] text-3xl font-bold mt-8'>$19.99<span className='text-[#3D3D40] text-sm font-normal'>/month</span></h3>
              <button className='my-8 py-4 w-full bg-[#5069E5] text-xl text-[#ffffff] font-semibold rounded-[8px]'>Subscribed</button>
              <h3 className='text-[#0C0C0D] text-xl font-medium mb-6'>Feature</h3>
              {
                features.map((ftr, idx) =>
                  <p className='text-[#3D3D40] text-sm pb-2' key={idx}>{ftr.Title}</p>
                )
              }

            </div>
          </div>
        </div>
        <div className='w-[390px] h-[563px] border-[#CED2E5] bg-white rounded-2xl shadow p-8'>
          <div>
            <Image className='mb-8' src={'/assets/premiumSubscription.png'} alt={'Basic Pakage'} height={40} width={40} />

            <div>
              <h3 className='text-[#0C0C0D] text-xl font-medium'>Basic</h3>
              <p className='text-[#3D3D40] text-sm'>Best for small firm</p>
              <h3 className='text-[#0C0C0D] text-3xl font-bold mt-8'>$19.99<span className='text-[#3D3D40] text-sm font-normal'>/month</span></h3>
              <button className='my-8 py-4 w-full bg-[#DFE0E5] text-xl text-[#555659] font-semibold rounded-[8px]'>Subscribed</button>
              <h3 className='text-[#0C0C0D] text-xl font-medium mb-6'>Feature</h3>
              {
                features.map((ftr, idx) =>
                  <p className='text-[#3D3D40] text-sm pb-2' key={idx}>{ftr.Title}</p>
                )
              }

            </div>
          </div>
        </div>

      </div>
    </SettingsLayout>
  )
}
