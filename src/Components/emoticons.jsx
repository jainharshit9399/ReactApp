import React from 'react'

export default function emoticons(props) {
  return (
    <div className="snap-center max-h-[200] min-w-[300px] max-w-[300px] p-5 rounded-[20px]" style={{backgroundColor:props.color}}>
        <h1 className='text-[30px]'>😃</h1>
        <h1 className='text-[15px] font-bold mt-5'>{props.heading}</h1>
        <h1 className='text-[14px] pt-3'>{props.content}</h1>
    </div>
  )
}
