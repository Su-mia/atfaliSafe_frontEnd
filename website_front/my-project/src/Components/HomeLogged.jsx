import React from 'react';
import Navbar from '../Utils/NavBar';
import bg from '../../public/bg.svg';

import "../index.css";
import OtherSuggest from '../Utils/HomeLogged/OtherSuggest';
import Recommendations from '../Utils/HomeLogged/Recommendations';

function HomeLogged() {
  return (
    <div className=' px-16' style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover', height: '100vh' }}>
        <div className=''>
        <Navbar/>
        </div>

        <Recommendations/>
        <h1>HomeLogged</h1>
        <OtherSuggest/>
    </div>
  );
}

export default HomeLogged;
