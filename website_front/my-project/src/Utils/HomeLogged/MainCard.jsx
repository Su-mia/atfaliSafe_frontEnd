import React from 'react'
import star from "/icons/Star.svg";

function MainCard({mini , URL , score , title}) {
  return (
    <div className={` flex flex-col justify-start items-start bg-black ${ mini ? "w-[250px]  h-[150px]" : "min-w-[360px]  h-[320px]"}  border border-[#50C878] rounded-3xl `}>
    <div
        className=' w-full rounded-t-3xl '
        style={{
            backgroundImage: `url(${URL})`,
            backgroundSize: '210%',
            backgroundPosition: 'center',
            height: '60vh',
        }}
        ></div>

      <div className={` flex  ${ mini? "bg-white h-[20%] justify-end" : "bg-white h-[40%] justify-between items-center"} rounded-b-3xl  w-full `}>
      
                <p className={` text-black flex justify-center items-center p-4 ${mini ? "text-[12px]" : "text-[20px]"}   font-bold `}>
              {title}
               </p>
     
         <div className=' text-[#50C878] font-bold text-[30px] relative h-[80%] flex justify-end items-end ' >
          <p className={`mr-12  ${mini ? " text-[20px] " : ""}`}>
            {score}
          </p>
          <img src={star} alt=""  className={`top-0  right-[0px]  ${mini ? "h-4" : "h-6"} absolute`}/>
         </div>
      </div>
    </div>
  )
}

export default MainCard
