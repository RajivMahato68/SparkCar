import React, { useState, useEffect } from 'react';
import NavDetails from './NavDetails';
import { Link, NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import LoginModal from '../Login/LoginModal'; // Import the LoginModal

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false); // State for modal

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }

    setLastScrollY(currentScrollY);
  };

  const openLoginModal = () => {
    setIsLoginModalOpen(true);
  };

  const closeLoginModal = () => {
    setIsLoginModalOpen(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    const timer = setTimeout(() => {
      if (!isVisible) setIsVisible(true);
    }, 5000); // Show navbar after 5 seconds

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, [lastScrollY, isVisible]);

  return (
    <header
      className={`bg-white fixed md:w-full w-full z-50 shadow-md transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}
    >
      <NavDetails />
      <nav className="px-4 lg:px-24 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link to="/" className="flex items-center">
            <img
              src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
              className="mr-3 h-12"
              alt="Logo"
            />
          </Link>

          <div className="lg:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-800 focus:outline-none"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>

          <div
            className={`${
              isOpen ? 'block' : 'hidden'
            } lg:flex justify-between items-center w-full lg:w-auto`}
            id="mobile-menu-2"
          >
            <ul className="flex flex-col lg:flex-row lg:space-x-8 mt-4 lg:mt-0 font-medium">
              {['/', '/Hire a Driver', '/Corporate Rent', '/Blog', '/about', '/Contract Us'].map((path, index) => (
                <li key={index} className="group relative">
                  <NavLink
                    to={path}
                    onClick={closeMenu}
                    className="block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:p-0"
                  >
                    {path === '/' ? 'Home' : path.replace('/', '').replace(/([A-Z])/g, ' $1')}
                  </NavLink>
                  <span className="absolute left-0 bottom-0 top-7 md:top-7 w-0 h-[2px] bg-[#1ecb15] transition-all duration-300 group-hover:w-full"></span>
                </li>
              ))}
            </ul>

            <div className="mt-4 lg:mt-0 md:ml-4 xl:ml-36 xl:mr-9">
              <button
                onClick={openLoginModal}
                className="text-white bg-[#1ecb15] focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
              >
                Sign In
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Render the Login Modal */}
      <LoginModal isOpen={isLoginModalOpen} onClose={closeLoginModal} />
    </header>
  );
}
