import React, { useState } from 'react';
import './Sidebar.css';
import { RiDashboardLine } from 'react-icons/ri';
import { BiChevronRight } from 'react-icons/bi';
import { LuBadgePercent, LuUserSquare } from 'react-icons/lu';
import { TfiWallet } from 'react-icons/tfi';
import { MdOutlineLiveHelp } from 'react-icons/md';
import { GrCodepen } from 'react-icons/gr';
import { FiChevronDown } from 'react-icons/fi';
import images from '../../Assets/mee.jpg';

const Sidebar = ({ openSidebarToggle, OpenSidebar }) => {
  const [activeNav, setActiveNav] = useState('#')

  return (
    <div id="sidebar" className={openSidebarToggle ? "sidebar-responsive" : ""}>
      <div>
        <div className='dashboard'>

          <RiDashboardLine className='li_icon' /> Dashboard
          <span className={openSidebarToggle ? 'close_icon' : "close__"} onClick={OpenSidebar}>X</span>
        </div>

        <ul>
          <li className='active'>
            <a href=''>
              <RiDashboardLine className='li_icon' /> Dashboard
            </a>
          </li>
          <li>
            <a href=''>
              <GrCodepen className='li_icon' /> Product
            </a>
            <BiChevronRight className='icon_right' />
          </li>
          <li>
            <a href=''>
              <LuUserSquare className='li_icon' /> Customers
            </a>
            <BiChevronRight className='icon_right' />
          </li>
          <li>
            <a href=''>
              <TfiWallet className='li_icon' /> Income
            </a>
            <BiChevronRight className='icon_right' />
          </li>
          <li>
            <a href=''>
              <LuBadgePercent className='li_icon' /> Promote
            </a>
            <BiChevronRight className='icon_right' />
          </li>
          <li>
            <a href=''>
              <MdOutlineLiveHelp className='li_icon' /> Help
            </a>
            <BiChevronRight className='icon_right' />
          </li>
        </ul>
        <div className='userProfile'>
          <img src={images} alt='User' />
          <div className='userInfo_'>
            <h2 className='_userName'>Evano</h2>Product Manager
          </div>
          <FiChevronDown className='doWN' />
        </div>
      </div>

    </div>
  );
};

export default Sidebar;
