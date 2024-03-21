import Home from '@/components/Home/Home';
import SideMenu from '@/components/shared/SideMenu/SideMenu';
import React from 'react';

const HomePage = () => {
  return (
    <div>
      {/* <h1>Welcome</h1> */}
      <SideMenu></SideMenu>
      <Home></Home>
    </div>
  );
};

export default HomePage;