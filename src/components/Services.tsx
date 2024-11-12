import React from 'react';
import { Wrench, Truck, Coffee, Sparkles, Phone, Store, Car, Hammer, Cog } from 'lucide-react';

const services = [
  {
    icon: <Cog className="h-8 w-8" />,
    title: "Penyediaan Suku Cadang",
    description: "Suku cadang asli berkualitas untuk berbagai merek kendaraan"
  },
  {
    icon: <Wrench className="h-8 w-8" />,
    title: "Layanan Bengkel Profesional",
    description: "Pelayanan bengkel berkualitas dengan teknisi berpengalaman"
  },
  {
    icon: <Truck className="h-8 w-8" />,
    title: "Jasa Towing",
    description: "Layanan derek 24/7 untuk berbagai jenis kendaraan"
  },
  {
    icon: <Car className="h-8 w-8" />,
    title: "Otomotif Lifestyle Center",
    description: "Pusat gaya hidup otomotif untuk komunitas dan penggemar"
  },
  {
    icon: <Hammer className="h-8 w-8" />,
    title: "Body Repair",
    description: "Perbaikan dan pengecatan body kendaraan profesional"
  },
  {
    icon: <Sparkles className="h-8 w-8" />,
    title: "Car Washing & Detailing",
    description: "Perawatan eksterior dan interior kendaraan"
  },
  {
    icon: <Coffee className="h-8 w-8" />,
    title: "Cafe Racer",
    description: "Tempat nongkrong sambil menunggu servis kendaraan"
  },
  {
    icon: <Phone className="h-8 w-8" />,
    title: "Call Center",
    description: "Dukungan pelanggan 24 jam"
  },
  {
    icon: <Store className="h-8 w-8" />,
    title: "Pop-up Store",
    description: "Merchandise dan aksesoris otomotif"
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in-section">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Layanan Kami
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Solusi lengkap untuk kebutuhan otomotif Anda dengan standar layanan profesional
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition duration-300 border border-gray-100 fade-in-section"
            >
              <div className="text-blue-600 mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;