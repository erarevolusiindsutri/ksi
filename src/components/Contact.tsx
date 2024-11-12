import React from 'react';
import { MessageCircle } from 'lucide-react';

const Contact = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center fade-in-section">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ingin Bekerja Sama?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Hubungi kami untuk mendiskusikan kebutuhan otomotif Anda. Tim profesional kami siap membantu.
          </p>
          <a
            href="https://wa.me/+628161990822"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-green-500 text-white rounded-full hover:bg-green-600 transition duration-300 text-lg font-semibold shadow-lg hover:shadow-xl"
          >
            <MessageCircle className="h-6 w-6 mr-2" />
            Hubungi Kami
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;