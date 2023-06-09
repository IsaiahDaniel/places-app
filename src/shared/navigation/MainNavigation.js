import React from 'react';
import MainHeader from './MainHeader';
import NavLinks from './NavLinks';

import { Link } from 'react-router-dom';

import "./MainNavigation.css";
import SideDrawer from './SideDrawer';

const MainNavigation = () => {
  return (
    <>
      <SideDrawer>
        <nav className="main-navigation__drawer-nav">
          <NavLinks />
        </nav>
      </SideDrawer>
      <MainHeader>
        <button className='main-navigation__menu-btn'>
          <span></span>
          <span></span>
          <span></span>
        </button>
        <h1 className='main-navigation__title'>
          <Link to="/">
            yourPlaces
          </Link>
        </h1>
        <nav className='main-navigation__header-nav'>
          <NavLinks />
        </nav>
      </MainHeader>
    </>
  )
}

export default MainNavigation;