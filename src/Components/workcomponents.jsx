import React from 'react'

export default function workcomponents(props) {
  return (
    <div>
        <div className='bg-[white] p-6 rounded-[20px] mb-5'>
            <h1 className='text-[15px] font-bold w-[85%]'> {props.heading}</h1>
            <h1 className='text-[15px] mt-4 text-justify'>{props.content}</h1>
        </div>
    </div>
  )
}
