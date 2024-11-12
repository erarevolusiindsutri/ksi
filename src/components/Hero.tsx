import React from 'react';
import { Car } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Animated 3D cars */}
      <div className="absolute w-full h-full pointer-events-none">
        {/* Racing stripe decoration */}
        <div className="absolute w-full h-20 bg-gradient-to-r from-blue-500/5 via-blue-500/10 to-blue-500/5 transform -rotate-6 top-1/4"></div>
        <div className="absolute w-full h-20 bg-gradient-to-r from-red-500/5 via-red-500/10 to-red-500/5 transform rotate-6 bottom-1/4"></div>
        
        {/* Top car moving right */}
        <div className="absolute top-[20%] animate-car-right">
          <div className="car-3d">
            <Car className="h-16 w-16 text-blue-600 transform rotate-0 car-headlight" />
            <div className="car-shadow"></div>
          </div>
        </div>
        
        {/* Bottom car moving left */}
        <div className="absolute bottom-[30%] animate-car-left">
          <div className="car-3d">
            <Car className="h-16 w-16 text-blue-400 transform rotate-0 car-headlight" />
            <div className="car-shadow"></div>
          </div>
        </div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          Kreasi Sinergi Integrasi
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Menjembatani kebutuhan otomotif Anda dengan solusi profesional dan terpercaya
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#services"
            className="px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition duration-300 text-lg font-semibold shadow-lg hover:shadow-xl"
          >
            Jelajahi Layanan
          </a>
          <a
            href="#contact"
            className="px-8 py-3 bg-gray-100 text-blue-600 rounded-full hover:bg-gray-200 transition duration-300 text-lg font-semibold shadow-lg hover:shadow-xl"
          >
            Hubungi Kami
          </a>
        </div>

        {/* Additional info cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          <div className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition duration-300">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">100+ Tahun</h3>
            <p className="text-gray-600">Pengalaman Kolektif</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition duration-300">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">24/7</h3>
            <p className="text-gray-600">Layanan Pelanggan</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition duration-300">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Terpercaya</h3>
            <p className="text-gray-600">Mitra ATPM</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;