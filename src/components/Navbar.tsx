import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="fixed w-full bg-white shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo and Text */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <img src="/EFS_latest_app_icon-1.png" alt="EpicForge Logo" className="h-8 w-8" />
              <span
                className="bg-[#feffff] text-[#00539f] px-4 py-1.5 rounded-md text-2xl font-bold tracking-tight shadow-sm transition-colors duration-300 hover:bg-[#00539f] hover:text-[#feffff]"
                style={{
                  fontWeight: '700',
                  boxShadow: '0px 4px 8px rgba(0, 83, 159, 0.2)',
                }}
              >
                EpicForge Software
              </span>
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link to="/" className={`px-3 py-2 rounded-md text-sm font-medium ${isActive('/') ? 'text-[#00539f] font-semibold' : 'text-gray-600 hover:text-[#00539f]'}`}>Home</Link>
              <Link to="/services" className={`px-3 py-2 rounded-md text-sm font-medium ${isActive('/services') ? 'text-[#00539f] font-semibold' : 'text-gray-600 hover:text-[#00539f]'}`}>Services</Link>
              <Link to="/about" className={`px-3 py-2 rounded-md text-sm font-medium ${isActive('/about') ? 'text-[#00539f] font-semibold' : 'text-gray-600 hover:text-[#00539f]'}`}>About</Link>
              <Link to="/contact" className={`px-3 py-2 rounded-md text-sm font-medium ${isActive('/contact') ? 'text-[#00539f] font-semibold' : 'text-gray-600 hover:text-[#00539f]'}`}>Contact</Link>
              <Link to="/careers" className={`px-3 py-2 rounded-md text-sm font-medium ${isActive('/careers') ? 'text-[#00539f] font-semibold' : 'text-gray-600 hover:text-[#00539f]'}`}>Careers</Link>

              <Link to="/get-started" className="bg-[#00539f] text-white hover:bg-[#004385] px-4 py-2 rounded-md text-sm font-medium transition-colors">Get Started</Link>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-[#00539f] focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" onClick={handleLinkClick} className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/') ? 'text-[#00539f] font-semibold' : 'text-gray-600 hover:text-[#00539f]'}`}>Home</Link>
            <Link to="/services" onClick={handleLinkClick} className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/services') ? 'text-[#00539f] font-semibold' : 'text-gray-600 hover:text-[#00539f]'}`}>Services</Link>
            <Link to="/about" onClick={handleLinkClick} className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/about') ? 'text-[#00539f] font-semibold' : 'text-gray-600 hover:text-[#00539f]'}`}>About</Link>
            <Link to="/contact" onClick={handleLinkClick} className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/contact') ? 'text-[#00539f] font-semibold' : 'text-gray-600 hover:text-[#00539f]'}`}>Contact</Link>
            <Link to="/careers" onClick={handleLinkClick} className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/careers') ? 'text-[#00539f] font-semibold' : 'text-gray-600 hover:text-[#00539f]'}`}>Careers</Link>
            <Link to="/get-started" onClick={handleLinkClick} className="block px-3 py-2 rounded-md text-base font-medium bg-[#00539f] text-white hover:bg-[#004385]">Get Started</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
