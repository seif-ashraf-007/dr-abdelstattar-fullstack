import React, { useState } from 'react';
import logo from '../../../assets/logo_main.png';
import './Header.css';
import { FaBars } from 'react-icons/fa';
import { IoCloseOutline } from "react-icons/io5";

function Header() {
  // State to track the current language
  const [language, setLanguage] = useState('EN');

  // State to track the mobile menu status
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the language
  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === 'EN' ? 'AR' : 'EN'));
  };

  // Function to toggle the mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white">
      <div className="max-w-[100%] m-[0 auto] p-[0 1rem] flex h-[4rem] justify-around items-center header-container">
        <div>
          <a href="/">
            <img src={logo} className='h-[4rem] logo-img' alt="Logo" />
          </a>
        </div>

        {/* Regular Navbar (Visible on larger screens) */}
        <nav className={`navbar ${isMenuOpen ? 'open' : ''}`}>
          <ul className="flex items-center no-underline list-none gap-[1.8rem]">
            <li><a className="text-black hover:text-[#136c9d] text-[1.1rem] transition duration-[0.3s] no-underline" href="/"> Home </a></li>
            <li><a className="text-black hover:text-[#136c9d] text-[1.1rem] transition duration-[0.3s] no-underline" href="/#certificates"> Certificates </a></li>
            <li><a className="text-black hover:text-[#136c9d] text-[1.1rem] transition duration-[0.3s] no-underline" href="#testmonials"> Testmonials </a></li>
            <li><a className="text-black hover:text-[#136c9d] text-[1.1rem] transition duration-[0.3s] no-underline" href="/locations"> Locations </a></li>
            <li><a className="text-black hover:text-[#136c9d] text-[1.1rem] transition duration-[0.3s] no-underline" href="/blog"> Blog </a></li>
          </ul>
        </nav>

        {/* Right Section */}
        <div className="flex items-center right-section">
          <div className="flex items-center lang-btn">
            <span
              onClick={toggleLanguage}
              className="cursor-pointer text-[#136c9d] text-[0.875rem] mr-2"
            >
              {language}
            </span>
            <button onClick={toggleLanguage} className="bg-transparent border-none cursor-pointer">
              <i className="fa-solid fa-globe text-[#136c9d]"></i>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="z-10 hidden mr-3 text-xl mobile-menu-btn">
            {isMenuOpen ? (
              <IoCloseOutline onClick={toggleMenu} className="text-[#136c9d] cursor-pointer" />
            ) : (
              <FaBars onClick={toggleMenu} className="text-[#136c9d] cursor-pointer" />
            )}
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <nav className={`z-10 mobile-navbar ${isMenuOpen ? 'open' : 'closed'}`}>
        <ul className="flex flex-col items-center gap-4 no-underline list-none">
          <li><a className="text-black text-[0.875rem] transition duration-[0.3s] no-underline" href="#"> Home </a></li>
          <li><a className="text-black text-[0.875rem] transition duration-[0.3s] no-underline" href="#certificates"> Certificates </a></li>
          <li><a className="text-black text-[0.875rem] transition duration-[0.3s] no-underline" href="#testmonials"> Testmonials </a></li>
          <li><a className="text-black text-[0.875rem] transition duration-[0.3s] no-underline" href="/locations"> Locations </a></li>
          <li><a className="text-black text-[0.875rem] transition duration-[0.3s] no-underline" href="/blog"> Blog </a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
