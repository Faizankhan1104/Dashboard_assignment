import React from 'react'
import './Main.css'

import Dashbord from './Component/Dashbord/Dashbord';
import Header from './Component/Header/Header';
import Sidebar from './Component/Sidebar/Sidebar';

const Main = () => {
  return (
    <div className='Main_container'>
    <Header/>
    <Sidebar/>
    <Dashbord/>
    </div>
  )
}

export default Main