import React from 'react'
import {AiFillApple} from "react-icons/ai";
import Mobile from "./mobile.png"
export default function master() {
  return (
    <div className='mt-[10px]'>
        <div className='relative max-w-[1300px] min-h-[550px] mx-auto bg-[#eef2ff] p-[50px] rounded-[40px]'>
            <h1 className='absolute left-[100px] top-[150px] text-[#1e293b] font-semibold pl-2'> Ahead App</h1>
            <h1 className='absolute left-[100px] top-[180px] text-[60px] w-[40%] leading-[70px] font-bold'>
                Master your life by mastering emotions
            </h1>
            <div>
                <div className='absolute top-[380px] left-[100px] mx-auto w-[120px] h-[50px] bg-[black] mt-[30px] rounded-lg grid grid-cols-4 p-1 items-center'>
                    <div className='col-span-1 text-[30px]'>
                        <AiFillApple className='text-[white]'/>
                    </div>
                    <div className='col-span-3'>
                        <h1 className='text-[white] text-[8px] text-center'>Download on the <br/><span className='text-[12px]'>App Store</span></h1>
                    </div>
                </div>
                <div className='absolute left-[250px] top-[410px] left-[200px]'>
                    <h1>⭐️⭐️⭐️⭐️⭐️</h1>
                    <h1 className='text-[12px] text-[#94a3b8]'>100+ AppStore reviews</h1>
                </div>
            </div>
            <img src={Mobile} alt='none' className='absolute w-[500px] top-[10px] right-[100px]'></img>
        </div>
    </div>
  )
}
