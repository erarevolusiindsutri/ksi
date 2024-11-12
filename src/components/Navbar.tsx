import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <span className="text-xl font-bold text-gray-900">KSI</span>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-blue-600 transition">Beranda</a>
            <a href="#services" className="text-gray-700 hover:text-blue-600 transition">Layanan</a>
            <a href="#values" className="text-gray-700 hover:text-blue-600 transition">Nilai Kami</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 transition">Kontak</a>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
            <a href="#home" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Beranda</a>
            <a href="#services" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Layanan</a>
            <a href="#values" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Nilai Kami</a>
            <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Kontak</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;