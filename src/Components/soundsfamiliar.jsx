import React from 'react'
import Emoticons from './emoticons';
export default function soundsfamiliar() {
  return (
    <div className='max-w-[1200px] mx-auto mt-[100px]'>
        <h1 className='text-[40px] pl-20 font-bold'>Does this sounds familiar...</h1>
        <div className='flex overflow-x-auto scroll-color-transparent  scroll-smooth hover:scroll-auto mt-10 snap-x snap-mandatory gap-5'> 
            <Emoticons color="#fefce8" heading="You argue with a colleague" 
            content="You get angry and defensive, instead of staying open and working towards common ground"/>
            <Emoticons color="#f0fdf4" heading="You get a promotion at work" 
            content="You question yourself and wonder when they'll realize you're an unqualified imposter, instead of trusting yourself & your abilities"/>
            <Emoticons color="#fdf2f8" heading="You attend a class renunion" 
            content="You compare yourself with your peers achievements instead of making your self- judgement more independent of others"/>
            <Emoticons color="#fafafa" heading="You are at a lively dinner party" 
            content="You play on your phone, instead of confidently approaching starngers and striking up a chat"/>
            <Emoticons color="#fff7ed" heading="You hit dead end in a negotiation" 
            content="You get nervous, frozzled and frustrated instead of staying optimistic and solution- oriented"/>
            <Emoticons color="#fffbeb" heading="You argue with a colleague" 
            content="You get angry and defensive, instead of staying open and working towards common ground"/>
            <Emoticons color="#f0fdf4" heading="You argue with a colleague" 
            content="You get angry and defensive, instead of staying open and working towards common ground"/>
        </div>
    </div>
  )
}
