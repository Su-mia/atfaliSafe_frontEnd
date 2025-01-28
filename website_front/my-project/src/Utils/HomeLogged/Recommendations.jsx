import React, { useEffect, useState } from 'react';
import def from "../../assets/def.svg";
import star from '../../../public/icons/Star.svg';
import MainCard from './MainCard';

function Recommendations() {
    const [data, setData] = useState([]); 
    const [loading, setLoading] = useState(false); 

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const response = await fetch('http://localhost:5000/api/recommendations'); 
    //             const result = await response.json();
    //             setData(result); 
    //         } catch (error) {
    //             console.error('Error fetching data:', error);
    //         } finally {
    //             setLoading(false);
    //         }
    //     };

    //     fetchData();
    // }, []);

    if (loading) {
        return <div>Loading...</div>; 
    }
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
        ];
    return (
        <div className='flex justify-between px-11'>
            <div className='flex flex-col w-[60%] bg-white border border-[#50C878] rounded-3xl p-9'>
                <img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQ65dQLLNBtZQR9Rm1KhDdMYOtEiySVf9J2ERVKSLmBbUNRwYOCxGOoTwl-tBgO-8PyNr6tuw" alt="Main Display" className='h-[350px]' />
                <div dir='rtl' className='flex justify-between items-center px-2 py-2'>
                    <p className='text-black text-[30px]  font-bold' dir='rtl'> 
                    Omar&Hana | رسوم متحركة إسلامية للأطفال
                    </p>
                    <div className='text-[#50C878] font-bold text-[30px] relative w-24 flex justify-end items-end'>
                        <p className='mr-12'>4.5</p>
                        <img src={star} alt="Star Icon" className='top-0 right-[0px] h-6 absolute' />
                    </div>
                </div>
            </div>

            <div className='flex flex-col w-[29%] bg-white border border-[#50C878] rounded-3xl p-9'>
                <p className='text-black text-[30px] font-bold' dir='rtl'>
                    الحلقات
                </p>
                <div className='flex flex-col justify-between h-[350px] items-start gap-3 overflow-y-scroll custom-scrollbar'>
                    {dummy.map((item, index) => (
                        <div key={index} className='flex items-start  gap-4'>
                            <MainCard 
                                mini={true} 
                                score={item.score} 
                                URL={item.URL} 
                                title={item.title} 
                                id={4556}
                            />
                           
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Recommendations;
