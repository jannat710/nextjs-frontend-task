import Home from '@/components/Home/Home';
import SideMenu from '@/components/shared/SideMenu/SideMenu';
import React from 'react';

const HomePage = () => {
  return (
    <div className='w-11/12 mx-auto border-t-2 border-gray-300 flex'>
      {/* <h1>Welcome</h1> */}
      <SideMenu></SideMenu>
      <Home></Home>
    </div>
  );
};

export default HomePage;