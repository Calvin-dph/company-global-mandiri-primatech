"use client";
import { motion } from "framer-motion";

const CertificateGallery = () => {
  const certificates = [1, 2, 3, 4, 5, 6];

  return (
    <section className="py-16 px-4 bg-white" id="certificates">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8 text-gray-800">
          Sertifikat Kami
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {certificates.map((cert) => (
            <motion.img
              key={cert}
              src={`https://placehold.co/300x400?text=Certificate+${cert}`}
              alt={`Certificate ${cert}`}
              className="rounded-lg shadow-md cursor-pointer hover:scale-105 transition-transform duration-300"
              whileHover={{ scale: 1.05 }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificateGallery;
