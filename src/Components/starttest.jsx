import React from 'react'
import Sign from './mySign.png'
export default function starttest() {
  return (
    <div className='max-w-[1200px] mx-auto text-center mt-[100px]'>
        <h1 className='text-[20px] font-semibold text-[#1F2937]'>We take privacy seriously</h1>
        <h1 className='text-[30px] mt-[20px] font-bold'>Before u get started</h1>
        <h1 className='mx-auto text-[20px] w-1/2 text-[#374151] rel mt-[20px]'>
                "We won't share your answers with anyone (and won't ever tell you which 
                friends said about what about you)"
        </h1>
        <div className='flex justify-center mt-[20px] items-center'>
            <h1>with love, </h1>
            <img src={Sign} className='w-[100px]' alt='none'></img>
        </div>
        <button className='bg-[black] text-[white] mt-[40px] mb-2 rounded-full px-6 py-3 text-[16px]'>Start a test</button>
        <h1 className='text-[15px] text-[#9CA3AF]'>Take only 5 minutes</h1>
    </div>
  )
}
