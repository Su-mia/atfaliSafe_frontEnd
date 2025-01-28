import React , {useState} from 'react'
import setting from "../../assets/Setting.svg";

import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import MainCard from '../HomeLogged/MainCard';



function Filter() {

  const [isOpenFilter1, setIsOpenFilter1] = useState(false);
  const [isOpenFilter2, setIsOpenFilter2] = useState(false);
  const [isAgeFilterOpen, setIsAgeFilterOpen] = useState(false); 
  const [isReasultReady, setReasultReady] = useState(true); 


  const toggleFilter1 = () => setIsOpenFilter1(!isOpenFilter1);
  const toggleFilter2 = () => setIsOpenFilter2(!isOpenFilter2);
  const toggleAgeFilter = () => setIsAgeFilterOpen(!isAgeFilterOpen); // Toggle age filter



  
  const [value, setValue] = useState([3, 13]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const dummy = [
    { 
        "URL": "https://img.youtube.com/vi/zPfTHS0KDJY/hqdefault.jpg",
        "score": 5,
        "title": "Omar & Hana Arabic",
    },
    { 
        "URL": "https://img.youtube.com/vi/1aO8xihyuxQ/hqdefault.jpg",
        "score": 5,
        "title": "Omar & Hana Arabic",
    },
    { 
        "URL": "https://img.youtube.com/vi/xQsEcNRvzvI/hqdefault.jpg",
        "score": 5,
        "title": "Omar & Hana Arabic",
    },
    { 
        "URL": "https://img.youtube.com/vi/V9NQLu4_uqc/hqdefault.jpg",
        "score": 5,
        "title": "Omar & Hana Arabic",
    },
    { 
        "URL": "https://img.youtube.com/vi/V9NQLu4_uqc/hqdefault.jpg",
        "score": 5,
        "title": "Omar & Hana Arabic",
    },
    { 
        "URL": "https://img.youtube.com/vi/V9NQLu4_uqc/hqdefault.jpg",
        "score": 5,
        "title": "Omar & Hana Arabic",
    },
    { 
        "URL": "https://img.youtube.com/vi/V9NQLu4_uqc/hqdefault.jpg",
        "score": 5,
        "title": "Omar & Hana Arabic",
    },
    { 
        "URL": "https://img.youtube.com/vi/V9NQLu4_uqc/hqdefault.jpg",
        "score": 5,
        "title": "Omar & Hana Arabic",
    },
    { 
        "URL": "https://img.youtube.com/vi/V9NQLu4_uqc/hqdefault.jpg",
        "score": 5,
        "title": "Omar & Hana Arabic",
    },
    { 
        "URL": "https://img.youtube.com/vi/V9NQLu4_uqc/hqdefault.jpg",
        "score": 5,
        "title": "Omar & Hana Arabic",
    },
];

  return (
    <div className=' flex w-full flex-1 justify-around  bg-[#ffffff] p-5 rounded-3xl' dir='rtl'>
      
      <div className='  border bg-white w-[55%] h-[600px] overflow-hidden overflow-y-scroll  rounded-3xl border-[#FFC93CCC]'>
        {  !isReasultReady &&
          <p className=' px-5 py-9 text-black/55 text-[30px]'>
          
                عرض النتائج ...
          
        </p>
            }
     {  isReasultReady && 
         <div className='flex flex-wrap  py-9 justify-center  gap-5 '>
                    {dummy.map((item, index) => (
                      
                            <MainCard
                                mini={true} 
                                score={item.score} 
                                URL={item.URL} 
                                title={item.title} 
                                id={456}
                            />
                      
                    ))}
       </div> }
     
      </div>
      <div className=' w-[25%] h-fit border flex flex-col justify-center  bg-[#FFF8E1CC] rounded-3xl border-[#FFC93CCC]'>
        <div className=' px-5 py-9 flex justify-start items-center gap-2 flex-1'>
          <img src={setting} className='h-[30px]' alt="" />
          <p className='  text-[30px] text-black'>
        خيارات الفلترة
        </p>
        </div>

        <div className="filters flex flex-col items-start px-6 pb-4 gap-4">

        <div className="flex justify-between items-center">
                <button
                 onClick={toggleAgeFilter} 
                className="bg-[#FFC93C] text-black px-4 py-1 rounded-3xl shadow-inner text-[20px] hover:bg-[#ffe8b0] w-[120px]"
              >
              الفئة العمرية
              </button>
           </div>

            {isAgeFilterOpen && 
                    <div className="bg-white rounded-xl border border-[#FFC93CCC] p-4 ">
                        <div className="flex justify-between text-sm text-gray-600">
                            <span>15 سنة</span>
                            <span>0 سنة</span>
                            
                        </div>
                        <Box sx={{ width: "155px" }}>
                            <Slider
                              value={value}
                              onChange={handleChange}
                              valueLabelDisplay="auto"
                              min={0}
                              max={15}
                              step={1}
                              sx={{
                                color: "#FFC93C",
                                "& .MuiSlider-thumb": {
                                  backgroundColor: "#FFC93C",
                                },
                                "& .MuiSlider-track": {
                                  backgroundColor: "#FFC93C",
                                },
                                "& .MuiSlider-rail": {
                                  color: "#FFDFAF",
                                },
                              }}
                            />
                        </Box>

                        <div className="mt-2 text-center text-black flex justify-start " dir='rtl'>
                          الفئة:   {value[0]} إلى {value[1]}
                        </div>
                  </div>
            }

          <div className="relative">
            <button
              onClick={toggleFilter1}
              className="bg-[#FFC93C] text-black px-4 py-1 rounded-3xl shadow-inner text-[20px] hover:bg-[#ffe8b0] w-[120px]"
            >
             النوع
            </button>
            {isOpenFilter1 && (
              <div className=" top-12 left-0 bg-white border rounded-lg shadow-md w-48">
                <ul className="p-2">
                  <li className="hover:bg-gray-100 p-2 text-black cursor-pointer">الأكشن</li>
                  <li className="hover:bg-gray-100 p-2 text-black cursor-pointer">الكوميديا</li>
                  <li className="hover:bg-gray-100 p-2 text-black cursor-pointer">الخيال</li>
                  <li className="hover:bg-gray-100 p-2 text-black cursor-pointer">المغامرة</li>
                </ul>
              </div>
            )}
          </div>

          <div className="relative">
            <button
              onClick={toggleFilter2}
              className="bg-[#FFC93C] text-black px-4 py-1 rounded-3xl shadow-inner text-[20px] hover:bg-[#ffe8b0] w-[120px]"
            >
             المحتوى
            </button>
            {isOpenFilter2 && (
              <div className=" top-12 left-0 bg-white border rounded-lg shadow-md w-48">
                <ul className="p-2">
                  <li className="hover:bg-gray-100 p-2 text-black cursor-pointer"> العدالة والمسؤولية</li>
                  <li className="hover:bg-gray-100 p-2 text-black cursor-pointer"> الأخلاقيات والنزاهة </li>
                  <li className="hover:bg-gray-100 p-2 text-black cursor-pointer"> التعاطف والقيم الاجتماعية</li>
                  <li className="hover:bg-gray-100 p-2 text-black cursor-pointer"> لعائلة والعلاقات</li>
                  <li className="hover:bg-gray-100 p-2 text-black cursor-pointer">التعليم والإبداع </li>
                  <li className="hover:bg-gray-100 p-2 text-black cursor-pointer"> السلام والوئام</li>
                  <li className="hover:bg-gray-100 p-2 text-black cursor-pointer"> لوعي البيئي</li>
                  <li className="hover:bg-gray-100 p-2 text-black cursor-pointer"> الإيمان والقيم الروحية</li>
                  <li className="hover:bg-gray-100 p-2 text-black cursor-pointer"> الشكر والكرم</li>
                </ul>
              </div>
            )}
          </div>
    </div>
      
      </div>
    </div>
  )
}

export default Filter
