import React from 'react'
import def from "../../assets/def.svg"
import star from '../../../public/icons/Star.svg';
import MainCard from './MainCard';

function Recommendations() {
  return (
    <div className=' flex justify-between px-11'>
         <div className=' flex flex-col w-[60%]   bg-white border border-[#50C878] rounded-3xl p-9 '>
           <img src={def} alt="" className=' h-[350px] ' />
           <div dir='rtl' className=' flex justify-between items-center px-28 py-2'>
             <p className=' text-black text-[30px] font-bold '>
             اسم العرض
             </p>
            <div className=' text-[#50C878] font-bold text-[30px]  relative w-24 flex justify-end items-end ' >
            <p className=' mr-12'>4.5</p>
            <img src={star} alt=""  className='  top-0 right-[0px] h-6 absolute'/>
            </div>
 
           </div>
         </div>

         <div className=' flex flex-col  w-[25%] bg-white border border-[#50C878] rounded-3xl p-9'>

            <p className=' text-black text-[30px] font-bold ' dir='rtl'>
            الحلقات
            </p>
            <div className='flex flex-col justify-between h-[350px] items-start gap-3 overflow-y-scroll custom-scrollbar'>
                <div className='flex items-end gap-4'>
                <MainCard mini={true}/>
                <p className='text-black font-bold'>
                    Sali
                </p>
                </div>
                <div className='flex items-end gap-4'>
                <MainCard mini={true}/>
                <p className='text-black font-bold'>
                    Sali
                </p>
                </div>
                <div className='flex items-end gap-4'>
                <MainCard mini={true}/>
                <p className='text-black font-bold'>
                    Sali
                </p>
                </div>
                <div className='flex items-end gap-4'>
                <MainCard mini={true}/>
                <p className='text-black font-bold'>
                    Sali
                </p>
                </div>
                <div className='flex items-end gap-4'>
                <MainCard mini={true}/>
                <p className='text-black font-bold'>
                    Sali
                </p>
                </div>

            </div>
         </div>
    
    </div>
  )
}

export default Recommendations
