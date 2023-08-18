import React from 'react'

export default function openvacancies() {
  return (
    <div className='p-[80px]'>
        <h1 className='text-[50px] font-bold'>Open Vacancies</h1>
        <div className='grid grid-cols-3 mt-[40px] gap-[40px]'>
            <div className='col-span-1 p-8 bg-orange-50 rounded-lg'>
                <h1 className='text-[20px] font-semibold pb-4'>Senior Full Stack- Engineer</h1>
                <ul className='list-disc list-inside text-[#374151]'>
                    <li>Full time position</li>
                    <li className='pt-2'>Berlin or remote</li>
                    <li className='pt-2'>€65- 85k, 0.5-15% equity share options</li>
                </ul>
            </div>
            <div className='col-span-1 p-8 bg-orange-50 rounded-lg'>
                <h1 className='text-[20px] font-semibold pb-4'>Senior Designer</h1>
                <ul className='list-disc list-inside text-[#374151]'>
                    <li>Full time position</li>
                    <li className='pt-2'>Berlin or remote</li>
                    <li className='pt-2'>€40- 55k, 0.25-.50% equity share options</li>
                </ul>
            </div>
            <div className='col-span-1 p-8 bg-orange-50 rounded-lg'>
                <h1 className='text-[20px] font-semibold pb-4'>Superstar Intern</h1>
                <ul className='list-disc list-inside text-[#374151]'>
                    <li>Full time position</li>
                    <li className='pt-2'>Berlin or remote</li>
                    <li className='pt-2'>€20-24k, 0.5-1.50% equity share options</li>
                </ul>
            </div>
        </div>
    </div>
  )
}
