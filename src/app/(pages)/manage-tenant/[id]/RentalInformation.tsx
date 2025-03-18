import React from 'react'

const RentalInformation = () => {
  return (
    <div className='flex flex-col gap-5'>
        <div className='w-full flex  items-center p-[10px] gap-[10px]'>
            <div className='flex w-1/2 flex-col gap-4'>
                <p className='text-[#8A8A8A] font-semibold'>Office Number</p>
                <p className='text-sm text-black font-semibold'>004</p>
            </div> 
            <div className='flex w-1/2 flex-col gap-4'>
                <p className='text-[#8A8A8A] font-semibold'>Monthly Payment Amount</p>
                <p className='text-sm text-black font-semibold'>100,000</p>
            </div> 
           
        </div>
        <div className='flex w-full items-center p-[10px] '>
            <div className='flex w-1/2 flex-col gap-4'>
                <p className='text-[#8A8A8A] font-semibold'>Start Date</p>
                <p className='text-sm text-black font-semibold'>22/5/2025</p>
            </div> 
            <div className='flex w-1/2 flex-col  gap-4'>
                <p className='text-[#8A8A8A] font-semibold'>End Date</p>
                <p className='text-sm text-black font-semibold'>End Date</p>
            </div>
            </div>
    </div>
  )
}

export default RentalInformation