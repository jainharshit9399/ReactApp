import React from 'react'
import { RxModulzLogo } from "react-icons/rx";
export default function header() {
  return (
    <div className='p-[40px]'>
        <div className='max-w-[1000px] flex justify-between mx-auto items-center'>
            {/* <div className="">
                Harshit
            </div> */}
            <RxModulzLogo className='text-[60px]'/>
            <ul className='flex gap-12'>
                <li>Emotions</li>
                <li>Manifesto</li>
                <li>Self Awareness Test</li>
                <li>Work with Us</li>
            </ul>
            <button className='bg-[black] text-[white] p-4 rounded-full'>Download app</button>
        </div>
    </div>
  )
}
