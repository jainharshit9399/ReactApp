import React from 'react'
import { RxModulzLogo} from "react-icons/rx";
import { FaLocationDot} from "react-icons/fa6"
import {BiLogoGmail} from "react-icons/bi";
import {AiFillApple} from "react-icons/ai";
export default function footer() {
  return (
    <div className='mx-auto p-[50px] border border-t-[#76A9FA]'>
            <RxModulzLogo className='text-[50px] mx-auto'/>
            <h1 className='text-[#974EC3] font-semibold text-[30px] text-center mt-[20px]'>ahead</h1>
            <div className='flex justify-center gap-20 mt-[20px]'>
                <div className="bg-color-[#CDDBFE] items-center flex  gap-3">
                    <div className='bg-[blue] rounded-full p-2 text-white text-[15px]'><FaLocationDot className=''/>
                    </div>
                    <h1> AugststraBe 26, 10117 Berlin</h1>
                </div>
                <div className="bg-color-[#CDDBFE] items-center flex  gap-3">
                    <div className='bg-[blue] rounded-full p-2 text-white text-[15px]'><BiLogoGmail className=''/>
                    </div>
                    <h1> hi@ahead-app.com</h1>
                </div>
            </div>
            <div className='mx-auto w-[180px] h-[60px] bg-[black] mt-[30px] rounded-lg grid grid-cols-4 p-1 items-center'>
                <div className='col-span-1 text-[50px]'>
                    <AiFillApple className='text-[white]'/>
                </div>
                <div className='col-span-3'>
                    <h1 className='text-[white] text-[12px] text-center'>Download on the <br/><span className='text-[20px]'>App Store</span></h1>
                </div>
            </div>
            <div className='text-center mt-5'>
                <h1 className='text-[#9CA3AF] text-[15px]'>2022 Ahead app. All rights reserved</h1>
            </div>
    </div>
  )
}
