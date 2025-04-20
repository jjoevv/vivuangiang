import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Header: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      setLastScrollY(currentScrollY);
    };

    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, [lastScrollY]);

  return (
    <header className={`fixed w-full z-50 ${!isScrolled ? 'bg-white shadow-md' : 'hidden'} transition-all duration-300`}>
      <nav className="flex justify-between items-center px-4 py-2 md:px-24">
        {/* Logo or Site Name */}
        <Link to='/' className="text-4xl font-bold text-black DEFAULT">Vivavivu</Link>

        {/* Mobile Menu Button */}
        <div className="sm:hidden">
          <button onClick={toggleMenu} className="text-black focus:outline-none">
            {/*<FontAwesomeIcon icon={isOpen ? faTimes : faBars} className="w-6 h-6" />*/}
          </button>
        </div>

        {/* Mobile Menu (Full-Screen) */}
        <div 
          className={`fixed inset-0 bg-white z-30 flex flex-col items-center justify-center px-20
          transition-transform duration-300 ${isOpen ? 'translate-y-0' : 'translate-y-full'} sm:hidden`}
        >
          {/* Close Menu Button */}
          <button onClick={toggleMenu} className="absolute top-6 right-6 text-black focus:outline-none">
            {/*<FontAwesomeIcon icon={faTimes} className="w-6 h-6" />*/}
          </button>

          {/* Menu Links */}
          <Link 
            to="/" 
            onClick={() => setIsOpen(false)} 
            className="text-2xl font-medium text-black my-6 hover:animate-spin hover:text-dark-green"
          >
            Homesss
          </Link>
          <Link 
            to="/projects" 
            onClick={() => setIsOpen(false)} 
            className="text-2xl font-medium text-black my-6 hover:text-dark-green"
          >
            Projects
          </Link>
          <Link 
            to="/contact" 
            onClick={() => setIsOpen(false)} 
            className="text-2xl font-medium text-black my-6 hover:text-dark-green"
          >
            Contact
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex space-x-6">
          <Link to="/" className="text-lg font-medium text-black hover:text-gray-700 p-4 transition duration-0 hover:duration-400 hover:border-b-4 border-brunswick-green hover:text-dark-green">Home</Link>
          <Link to="/projects" className="text-lg font-medium text-black hover:text-gray-700 p-4 transition duration-0 hover:duration-400 hover:border-b-4 border-brunswick-green hover:text-dark-green">Projects</Link>
          <Link to="/contact" className="text-lg font-medium text-black hover:text-gray-700 p-4 transition duration-0 hover:duration-400 hover:border-b-4 border-brunswick-green hover:text-dark-green">Contact</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
