import React from 'react'
import Navbar from '../Utils/NavBar'
import bg from '../../public/bg.svg';

function RecommPage() {
  return (
    <div style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover', height: '100vh' }}>

        <Navbar/>
        <p>recom</p>
      
    </div>
  )
}

export default RecommPage
