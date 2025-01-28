import React from 'react'
import MainCard from './MainCard'

function OtherSuggest() {
    const dummy = [
        { 
            "URL": "https://img.youtube.com/vi/hlmbDitSLB8/hqdefault.jpg",
            "score": 4.9,
            "title": "قصص الغابة",
        },
        { 
            "URL": "https://img.youtube.com/vi/ZshOSBBoDAI/hqdefault.jpg",
            "score": 3.5,
            "title": "قصص مدرسة الموسم الثاني",
        },
        { 
            "URL": "https://img.youtube.com/vi/xQsEcNRvzvI/hqdefault.jpg",
            "score": 5,
            "title": "Omar & Hana Arabic",
        },
        { 
            "URL": "https://img.youtube.com/vi/kkHwzU92-5s/hqdefault.jpg",
            "score": 5,
            "title": "حلقات بليبي كاملة | تعلم  ",
        },
    ];

  return (
    <div className=' flex flex-col  gap-5 bg-white border border-[#50C878] rounded-3xl p-9'>
        <p dir='rtl' className=' text-black font-bold text-[35px]'>اقتراحات أخرى:</p>
        <div className=' flex justify-center items-center gap-9 overflow-x-scroll  p-3 custom-scrollbar'>
              
                
                {dummy.map((item, index) => (
                        <div key={index} className='flex items-start  gap-4'>
                            <MainCard 
                                mini={false} 
                                score={item.score} 
                                URL={item.URL} 
                                title={item.title} 
                            />
                           
                        </div>
                    ))}
        

        </div>
    </div>
  )
}

export default OtherSuggest
