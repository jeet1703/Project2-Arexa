// Header.js
import React from 'react';
import Logo from '../assets/ArexaLogo.svg';

const Header = () => {
  return (
    <header className="w-full flex justify-between items-center p-5 bg-black text-white">
      <img src={Logo} alt="Logo" className="h-4 md:h-8" />
      
    </header>
  );
};

export default Header;
