import React from 'react'
import './Header.css'
import Dashbord from '../Dashbord/Dashbord'
import { BsSearch, BsJustify }
  from 'react-icons/bs'

const Header = ({ OpenSidebar }) => {
  return (
    <>
      <section className='main_header'>

        <header className='navbar'>
          
            <BsJustify className={OpenSidebar ?'icon_':"icon__"} onClick={OpenSidebar} />
          
          <h3 className='user_name'> Hello Shahrukh 👋,</h3>
          <div className='header-left'>
            <BsSearch className='icon' />
            <input type="text" placeholder='Search' className='input_search' />
          </div>

        </header>
        <Dashbord />
      </section>


    </>
  )
}

export default Header