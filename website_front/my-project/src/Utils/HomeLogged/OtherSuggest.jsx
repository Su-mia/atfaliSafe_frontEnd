import React from 'react'
import MainCard from './MainCard'

function OtherSuggest() {
  return (
    <div className=' flex flex-col  gap-5 bg-white border border-[#50C878] rounded-3xl p-9'>
        <p dir='rtl' className=' text-black font-bold text-[35px]'>اقتراحات أخرى:</p>
        <div className=' flex justify-center items-center gap-9 overflow-x-scroll  p-3 custom-scrollbar'>
              
                <MainCard/>
                <MainCard/>
                <MainCard/>
                <MainCard/>
        

        </div>
    </div>
  )
}

export default OtherSuggest
