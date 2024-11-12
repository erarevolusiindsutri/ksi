import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <span className="text-xl font-bold text-white">KSI</span>
            </div>
            <p className="text-sm">
              PT Kreasi Sinergi Integrasi (KSI) adalah perusahaan yang bergerak di industri otomotif
              sebagai pihak ketiga yang menjembatani hubungan antara pelanggan dan Agen Tunggal Pemegang Merek (ATPM).
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Tautan</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="hover:text-blue-400">Beranda</a></li>
              <li><a href="#services" className="hover:text-blue-400">Layanan</a></li>
              <li><a href="#values" className="hover:text-blue-400">Nilai Kami</a></li>
              <li><a href="#contact" className="hover:text-blue-400">Kontak</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Kontak</h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-blue-500" />
                <span>+62 816-1430-285</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-blue-500" />
                <span>contact@ksi-otohub.com</span>
              </li>
              <li className="flex items-center">
                <MapPin className="h-5 w-5 mr-2 text-blue-500" />
                <span>Jakarta, Indonesia</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} PT Kreasi Sinergi Integrasi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;