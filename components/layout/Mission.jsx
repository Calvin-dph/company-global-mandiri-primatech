"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const VisiMisi = () => {
  const refVisi = useRef(null);
  const refMisi = useRef(null);
  const isInViewVisi = useInView(refVisi, { once: true });
  const isInViewMisi = useInView(refMisi, { once: true });

  return (
    <section id="visi-misi" className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8 text-gray-800">Visi & Misi</h2>

        {/* Visi Section */}
        <div
          ref={refVisi}
          className="flex flex-col md:flex-row items-center mb-12"
        >
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={isInViewVisi ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: "easeOut" }}
            className="md:w-1/2 p-6 text-left"
          >
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">Visi</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Membangun PT GLOBAL MANDIRI PRIMATECH sebagai perusahaan
              perdagangan dan layanan terkemuka di bidang keselamatan dan
              perlingdungan kebakaran.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={isInViewVisi ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1.2, ease: "easeOut" }}
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.98 }}
            className="md:w-1/2 p-6"
          >
            <img
              src="https://placehold.co/600x400"
              alt="Visi Image"
              className="w-full h-auto object-cover rounded-lg shadow-lg transition-transform duration-300"
            />
          </motion.div>
        </div>

        {/* Misi Section */}
        <div ref={refMisi} className="flex flex-col md:flex-row items-center">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={isInViewMisi ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1.2, ease: "easeOut" }}
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.98 }}
            className="md:w-1/2 p-6"
          >
            <img
              src="https://placehold.co/600x400"
              alt="Misi Image"
              className="w-full h-auto object-cover rounded-lg shadow-lg"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={isInViewMisi ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1.3, ease: "easeOut" }}
            className="md:w-1/2 p-6 text-left"
          >
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">Misi</h3>
            <ul className="text-lg text-gray-700 leading-relaxed list-disc pl-6">
              <li className="ml-6">
                Membangun Kejujuran, Disiplin, Dan Tanggungjawab Dalam Bekerja
              </li>
              <li className="ml-6">
                Membangun Kreatifitas, Inovatif, Dan Produktivitas Individu Dan
                Perusahaan
              </li>
              <li className="ml-6">
                Membangun Teknologi Dan Informasi Yang Baik Guna Mendukung
                Perusahaan
              </li>
              <li className="ml-6">Membangun Profesionalisme SDM Perusahaan</li>
              <li className="ml-6">
                Menjalin Kerjasama Yang Baik Dengan Owner/Vendor
              </li>
              <li className="ml-6">
                Mengutamakan Pelayanan Dan Kualitas Hasil Kerja
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VisiMisi;
