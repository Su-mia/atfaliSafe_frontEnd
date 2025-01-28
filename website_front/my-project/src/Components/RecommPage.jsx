import React from 'react'
import Navbar from '../Utils/NavBar'
import bg from '../../public/bg.svg';
import Filter from '../Utils/Search/Filter';


import search from "../assets/Search.svg";

function RecommPage() {
  return (
    <div className='px-16 flex flex-col ' style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover', height: '100vh' }}>

        <Navbar/>
        
       <div className=' flex flex-col items-center'>
          <div className="flex items-center my-14 bg-white border rounded-full shadow-inner px-4 py-2 w-full max-w-md">
            <input
            dir='rtl'
              type="text"
              placeholder="ابحث عن عرض"
              className="flex-grow bg-transparent text-gray-700 placeholder-gray-500 outline-none"
            />
            <img src={search} className='  h-[35px]' alt="" />
          </div>


          <div className='flex justify-center items-center gap-2 mt-4'>
            <div className='h-[1px] w-[500px]  bg-black'></div>
            <p className='text-black min-w-max mx-3 text-[35px]'>
              أو قم بتصفية العروض المتاحة
            </p>
            <div className='h-[1px] w-[500px]  bg-black'></div>
          </div>



        <Filter/>
       </div>

      
    </div>
  )
}

export default RecommPage
