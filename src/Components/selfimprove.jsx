import React from 'react'
import Selfimprovecomp from "./selfimprovecomp";
export default function selfimprove() {
  return (
    <div className='max-w-[1300px] mx-auto p-[60px] '>
        <div>
            <h1 className='text-[20px] font-semibold text-slate-600'>
                Wrong with self-improvement & how we're fixing it.
            </h1>
            <h1 className='text-[50px] font-bold text-slate-900'>Self-improvement. Ugh.</h1>
            <div className='max-h-[400px] w-[80%] mx-auto overflow-y-auto mt-[40px]'>
                <ul className='list-disc'>
                    <li>
                        <Selfimprovecomp heading="Its not as easy as 1-2-3" content="The Journey of change may be long, but our sessions are quick. We get to the point and tell you want to know(and nothing else)"/>
                    </li>
                    <li>
                        <Selfimprovecomp heading="Old habits are hard to break" content="And bad behavious die hard . Fortunately, we give you great, science-backed techniques to use"/>
                    </li>
                    <li>
                        <Selfimprovecomp heading="You and your motivation don't have a long term-relationship " content="Luckily, we can proactively prepare you for the marathon, not just the race. Effective, memorable exercises will help you stick to your goals"/>
                    </li>
                    <li>
                        <Selfimprovecomp heading="Books dont offer practical" content="Remember when you learned t ride a bike just by reading? Yead, we don't either. We help you take concrete samll steps towards your goals. Learning just a bit, then immediately spring into action"/>
                    </li>
                    <li>
                        <Selfimprovecomp heading="Inspiration is great but then what" content="We make sure your energy from all the content you consume does not fizzle out."/>
                    </li>
                </ul>
                
            </div>
        </div>
    </div>
  )
}
