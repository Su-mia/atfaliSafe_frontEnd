import React from 'react'
import star from "/icons/Star.svg";

function MainCard({mini}) {
  return (
    <div className={` flex flex-col justify-start items-start bg-black ${ mini ? "w-[200px]  h-[150px]" : "min-w-[360px]  h-[320px]"}  border border-[#50C878] rounded-3xl `}>
    <div
        className=' w-full rounded-t-3xl '
        style={{
            backgroundImage: `url("https://img.youtube.com/vi/yXqZ6XzmbKk/hqdefault.jpg")`,
            backgroundSize: '210%',
            backgroundPosition: 'center',
            height: '60vh',
        }}
        ></div>

      <div className={` flex justify-between items-center ${ mini? "bg-white h-[20%]" : "bg-white h-[40%]"} rounded-b-3xl  w-full `}>
        { !mini &&
                <p className=' text-black p-4   font-bold text-[25px]'>
                Sali
               </p>
        }
         <div className=' text-[#50C878] font-bold text-[30px]  relative h-[80%] flex justify-end items-end ' >
          <p className={`mr-12 `}>4.5</p>
          <img src={star} alt=""  className='  top-0 right-[0px] h-6 absolute'/>
         </div>
      </div>
    </div>
  )
}

export default MainCard
