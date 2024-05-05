import React, { useState } from 'react';
import Logo from '../../src/assets/cyberLogo.svg';
import Favorite from '../icons/favorite.jsx';
import Shop from '../icons/shop';
import User from '../icons/user';
import SearchBox from '../comp/searchBox';
import BreadCrumbs from './breadcrumbs';

const header = () => {
  return (
    <>
      <div className="header-bar">
        <img src={Logo} alt="logo bulunamadi{yuklenemedi}." />
        <SearchBox />
        <div className="navigation">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact Us</li>
            <li>Blog</li>
          </ul>
        </div>
        <div className="icons">
          <Favorite />
          {/* Shop bileşenine cartItemCount prop'unu geçirin */}
          <Shop/>
          <User />
        </div>
      </div>
      <BreadCrumbs />
    </>
  );
};

export default header;