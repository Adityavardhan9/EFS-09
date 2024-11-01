import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed w-full bg-white shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo as Text with "Quicksand" font styling */}
          <div className="flex items-center">
            <Link to="/">
              <span
                className="bg-[#feffff] text-[#00539f] px-4 py-1.5 rounded-md text-2xl font-bold tracking-tight shadow-sm"
                style={{
                  fontFamily: "'Quicksand', sans-serif",
                  fontWeight: '700', // Bold for logo
                  boxShadow: '0px 4px 8px rgba(0, 83, 159, 0.2)', // Soft shadow for depth
                }}
              >
                EpicForge Software
              </span>
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link to="/" className={`px-3 py-2 rounded-md text-sm font-medium ${isActive('/') ? 'text-[#00539f] font-semibold' : 'text-gray-600 hover:text-[#00539f]'}`} style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>Home</Link>
              <Link to="/services" className={`px-3 py-2 rounded-md text-sm font-medium ${isActive('/services') ? 'text-[#00539f] font-semibold' : 'text-gray-600 hover:text-[#00539f]'}`} style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>Services</Link>
              <Link to="/about" className={`px-3 py-2 rounded-md text-sm font-medium ${isActive('/about') ? 'text-[#00539f] font-semibold' : 'text-gray-600 hover:text-[#00539f]'}`} style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>About</Link>
              <Link to="/contact" className={`px-3 py-2 rounded-md text-sm font-medium ${isActive('/contact') ? 'text-[#00539f] font-semibold' : 'text-gray-600 hover:text-[#00539f]'}`} style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>Contact</Link>
              <a href="#" className="bg-[#00539f] text-white hover:bg-[#004385] px-4 py-2 rounded-md text-sm font-medium transition-colors" style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>Get Started</a>
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
            <Link to="/" className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/') ? 'text-[#00539f] font-semibold' : 'text-gray-600 hover:text-[#00539f]'}`} style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>Home</Link>
            <Link to="/services" className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/services') ? 'text-[#00539f] font-semibold' : 'text-gray-600 hover:text-[#00539f]'}`} style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>Services</Link>
            <Link to="/about" className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/about') ? 'text-[#00539f] font-semibold' : 'text-gray-600 hover:text-[#00539f]'}`} style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>About</Link>
            <Link to="/contact" className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/contact') ? 'text-[#00539f] font-semibold' : 'text-gray-600 hover:text-[#00539f]'}`} style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>Contact</Link>
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium bg-[#00539f] text-white hover:bg-[#004385]" style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>Get Started</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;