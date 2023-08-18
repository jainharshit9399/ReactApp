import React from 'react'
import One from "./one.png";
import Two from "./two.png";
import Three from "./three.png";
export default function otherthink() {
  return (
    <div className='max-w-[1300px] mx-auto mt-[100px]'>
        <div className='bg-blue-50 py-[70px] px-[50px] rounded rounded-[30px]'>
            <div className='text-center'>
                <h1 className='text-[17px] font-semibold text-[#475569]'>Let your friends, family, and co-workers (anonymously) rate your social skills</h1>
                <h1 className='text-[40px] font-bold'>Ever wondered what others think of you?</h1>
            </div>
            <div className="my-[70px]">
                <div className='max-w-[800px] mx-auto flex justify-center items-center'>
                    <img src={One} alt='one' className='w-[50px]'></img>
                    <h1 className='static text-[#ec4899] font-bold'>------------------------------------------</h1>
                    <img src={Two} alt='two' className='w-[45px]'></img>
                    <h1 className='text-[#ec4899] font-bold'>------------------------------------------</h1>
                    <img src={Three} alt='three' className='w-[40px]'></img>
                </div>
                <div className='max-w-[800px] mx-auto flex justify-between text-center'>
                    <h1 className='text-[#6b7280] text-[11px] font-bold'>Answer questions your social skills</h1>
                    <h1 className='text-[#6b7280] text-[11px] font-bold'>Let others anonymously answer the same<br/> question about you </h1>
                    <h1 className='text-[#6b7280] text-[11px] font-bold'>Find out where you and others see things <br/> the same way- and where not!</h1>
                </div>
            </div>
            {/* <div className='relative w-[100%]'>
                <div className='mx-auto w-[600px] h-[200px] rounded-[20px] bg-[white] p-[20px]'>
                    <div className='max-width-[600px] '>
                        <div className='w-[20px] h-[20px] rounded-full bg-red-600'></div>
                    </div>
                </div>
                <div className='absolute w-[100%] mx-auto p-5'>
                    <div className='max-w-[50px] p-[5px] bg-blue-600 text-center rounded-lg'>You</div>
                </div>
            </div> */}
            
        </div>
    </div>
  )
}
