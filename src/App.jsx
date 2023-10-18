import './App.css';
import { useState } from 'react';
import Dashbord from './Component/Dashbord/Dashbord';
import Header from './Component/Header/Header';
import Sidebar from './Component/Sidebar/Sidebar';
function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }
  return (
    <>
    <section className='main_container'>      
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
      <Header OpenSidebar={OpenSidebar}/>
      {/* <Dashbord/>          */}
    </section>      
    </>
  );
}

export default App;
