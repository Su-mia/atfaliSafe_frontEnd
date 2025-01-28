import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import logo from '../../public/logo/logo.svg'
import logout from '../../public/icons/Logout.svg'


import './nav.css';



export default function Navbar() {
  const [active, setActive] = useState('home'); // State to track active tab
  const navigate = useNavigate();
  const location = useLocation();

  // Update the active tab when the URL changes
  React.useEffect(() => {
    if (location.pathname === '/recommendations') {
      setActive('recommendations');
    } else {
      setActive('home');
    }
  }, [location]);

  const togglePage = (page) => {
    setActive(page);
    navigate(page === 'home' ? '/home' : '/recommendations'); // Navigate to the selected page
  };

  return (
    <nav className="navbar " >
      <img src={logo} alt="" className=' my-8' />
      <div className="toggle-buttons ">
        <button
          className={`toggle-btn ${active === 'home' ? 'active' : ''}`}
          onClick={() => togglePage('home')}
        >
            <p className='font-bold text-[21px]'>
            الرئيسية
            </p>
         
        </button>
        <button
          className={`toggle-btn ${active === 'recommendations' ? 'active' : ''}`}
          onClick={() => togglePage('recommendations')}
        >
          <p className='font-bold text-[21px]'>
          احصل على التوصيات

            </p>
        </button>
      </div>
      <img src={logout} alt="" className='logout' />
    </nav>
  );
}
