import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import bg from '../../public/bg.svg';

export default function ShowDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [episodeDetails, setEpisodeDetails] = useState(null);
  const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   const fetchEpisodeDetails = async () => {
  //     try {
  //       const response = await fetch('https://your-api-endpoint.com/episodes', {
  //         method: 'POST',
  //         headers: {
  //           'Content-Type': 'application/json',
  //         },
  //         body: JSON.stringify({ id }),
  //       });
  //       await response.json(); 

  //       if (id === dummyData.id) {
  //         setEpisodeDetails(dummyData);
  //       } else {
  //         setEpisodeDetails(null);
  //       }

  //       setLoading(false);
  //     } catch (error) {
  //       console.error('Error fetching episode details:', error);
  //       setLoading(false);
  //     }
  //   };

  //   fetchEpisodeDetails();
  // }, [id]);


  const dummyData = {
    id: '1',
    episodeTitle : 'اسم العرض',
    genre: 'Drama',
    ageRange: '6 - 10 ',
    theme: 'السلام والوئام',
    summary: 'تتناول الحلقة قصة قصيرة وممتعة عن أهمية التعاون بين الأصدقاء لتحقيق الأهداف.',
    notes: 'قد تحتوي الحلقة على بعض الكلمات غير اللائقة أو محتوى غير مناسب للأطفال. يُرجى أخذ ذلك في الاعتبار قبل المشاهدة.',
    score: 3.7,
  };

  if (loading) {
    return <div className="text-white text-center">Loading...</div>;
  }

  return (
    <div
      className="px-16 relative flex justify-center items-center"
      style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover', height: '100vh', color: 'white' }}
    >
      <button
        onClick={() => navigate(-1)}
        className="absolute top-7 right-7 bg-[#00C2CB] text-white font-semibold text-[20px] px-4 py-2 rounded-lg hover:bg-gray-200"
      >
        العودة إلى الصفحة السابقة
      </button>

      <div dir='rtl' className="mt-10 px-6 py-8 bg-white border flex-1 border-[#50C878] text-black rounded-3xl flex flex-col justify-center items-start shadow-lg">
        <div className=' text-[30px] mb-6'>
        تفاصيل العرض والتقييم :
        </div>
        <div className=' flex '>

            <img src="https://img.youtube.com/vi/kkHwzU92-5s/hqdefault.jpg" alt=""  className=' h-[65%]'/>

          <div>
            <h1 className="text-3xl font-bold mb-4">{dummyData.episodeTitle}</h1>
            <p className="text-xl mb-2"><strong>النوع:</strong> {dummyData.genre}</p>
            <p className="text-xl mb-2"><strong>المحتوى:</strong> {dummyData.theme}</p>
            <p className="text-xl mb-2"><strong>الفئة العمرية :</strong> {dummyData.ageRange}</p>
            <p className="text-xl mb-4"><strong>  التقييم من 5 : </strong> {dummyData.score}</p>
            <p className="text-lg"><strong>الوصف : </strong> {dummyData.summary}</p>
            <p className="text-lg"><strong>تنبيه : </strong> {dummyData.notes}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
