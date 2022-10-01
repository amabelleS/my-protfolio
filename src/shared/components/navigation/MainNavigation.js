import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

import MainHeader from './MainHeader';
import NavLinks from './NavLinks';
import SideDrawer from './SideDrawer';
import Backdrop from '../UIElements/Backdrop';

import logo from '../../../assets/logo6.png'
import logoN from '../../../assets/logoN.jpeg'
import logofs from '../../../assets/logo-fs.png'

import './MainNavigation.css';

export const MainNavigation = (props) => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  const openDrawerHandler = () => {
    setDrawerIsOpen(true);
  };

  const closeDrawerHandler = () => {
    setDrawerIsOpen(false);
  };

  return (
    <React.Fragment>
      {drawerIsOpen && <Backdrop onClick={closeDrawerHandler} />}
      <SideDrawer show={drawerIsOpen} onClick={closeDrawerHandler}>
        <nav className="main-navigation__drawer-nav">
          <NavLinks />
        </nav>
      </SideDrawer>

      <MainHeader>
        <div className="main-navigation_menu">
          <button
            className="main-navigation__menu-btn"
            onClick={openDrawerHandler}
          >
            <span />
            <span />
            <span />
          </button>
          <img className='logo' src={logo} style={{marginLeft: '0.7rem'}}/>
          <NavLink
            className="main-navigation__title"
            to="/"
            exact
            activeStyle={{
              textShadow: '1px 1px 1px gray',
              transform: 'skewX(-20deg) scale(1.1)',
            }}
          >
            Home
          </NavLink>
        </div>
        <nav className="main-navigation__header-nav">
          <NavLinks />
        </nav>
      </MainHeader>
    </React.Fragment>
  );
};

export default MainNavigation;
