import React from 'react'
import Workcomponents from './workcomponents';
export default function workwithus() {
  return (
    <div className='max-w-[1300px] mx-auto mt-[100px]'>
        <div className='bg-blue-50 py-[70px] px-[50px] rounded rounded-[30px]'>
            <div className='flex justify-between items-center'>
                <h1 className='text-[40px] font-bold'>Work with us</h1>
                <h1 className='text-[40px] text-[#6d28d9] font-semibold'>ahead</h1>
            </div>
            <div className='flex justify-between'>
                <div className='bg-[white] w-[45%] mt-10 rounded-[20px] max-h-[400px]'>
                    <div className='p-10'>
                        <h1 className='text-[25px] font-bold'>About</h1>
                        <h1 className='text-[18px] mt-5'>At ahead our goal os to make self-improvement fun and lasting. We know there's a way how to make it work. And that's what aHead is all about!</h1>
                    </div>
                    <div className='p-10 bg-pink-50 rounded-[20px]'>
                        <h1 className='text-[25px] font-bold'>Product</h1>
                        <h1 className='text-[18px] mt-5'>Sure, you could spend ages reading books or sitting in seminars on how to become a better spouse, parent, or manager - like we did....</h1>
                    </div>
                </div>
                <div className='w-[30%]  max-h-[400px] mt-10 overflow-y-auto scroll-mr-10 pr-10'>
                    <Workcomponents heading="Power through, even when the going gets though" content="We help you spot and work around whatever stands in the way, be it bad habits, fears, etc."></Workcomponents>
                    <Workcomponents heading="Learn more about who you are and what you want to go" content="We ask right questions to help you better understand why do you things the way u do"></Workcomponents>
                    <Workcomponents heading="Power through, even when the going gets though" content="We help you spot and work around whatever stands in the way, be it bad habits, fears, etc."></Workcomponents>
                    <Workcomponents heading="Power through, even when the going gets though" content="We help you spot and work around whatever stands in the way, be it bad habits, fears, etc."></Workcomponents>
                    <Workcomponents heading="Power through, even when the going gets though" content="We help you spot and work around whatever stands in the way, be it bad habits, fears, etc."></Workcomponents>
                    <Workcomponents heading="Power through, even when the going gets though" content="We help you spot and work around whatever stands in the way, be it bad habits, fears, etc."></Workcomponents>
                </div>
            </div>
        </div>
    </div>
  )
}
