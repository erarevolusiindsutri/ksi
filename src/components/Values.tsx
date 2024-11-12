import React from 'react';
import { Shield, Users, Sparkles, Heart } from 'lucide-react';

const values = [
  {
    icon: <Shield className="h-8 w-8" />,
    title: "Integritas",
    description: "Menjunjung tinggi etika dan transparansi dalam setiap aktivitas bisnis"
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: "Kolaborasi",
    description: "Membangun kerjasama yang saling menguntungkan dengan semua pemangku kepentingan"
  },
  {
    icon: <Sparkles className="h-8 w-8" />,
    title: "Inovasi",
    description: "Terus berinovasi untuk mengikuti perkembangan teknologi dan kebutuhan pasar"
  },
  {
    icon: <Heart className="h-8 w-8" />,
    title: "Komitmen Pelanggan",
    description: "Mengutamakan kepuasan pelanggan melalui layanan yang berkualitas"
  }
];

const Values = () => {
  return (
    <section id="values" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in-section">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nilai-Nilai Kami
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Fondasi yang menjadi pegangan kami dalam memberikan layanan terbaik
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-xl hover:bg-gray-50 transition duration-300 fade-in-section"
            >
              <div className="text-blue-600 mx-auto mb-4">{value.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {value.title}
              </h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-blue-600 rounded-2xl p-8 md:p-12 fade-in-section">
          <div className="text-center text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              100+ Tahun Pengalaman Kolektif
            </h3>
            <p className="text-lg text-blue-100 max-w-3xl mx-auto">
              Tim kami terdiri dari para ahli dengan total pengalaman lebih dari 100 tahun dalam industri otomotif,
              memberikan jaminan kualitas dan profesionalisme dalam setiap layanan.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Values;