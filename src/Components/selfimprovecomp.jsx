import React from 'react'

export default function selfimprovecomp(props) {
  return (
    <div className='pb-[40px]'>
        <h1 className='font-semibold text-[25px]'>{props.heading}</h1>
        <h1 className='text-[20px]'>{props.content}</h1>
    </div>
  )
}
