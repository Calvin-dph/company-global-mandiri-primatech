import React from "react";

const VisiMisi = () => {
  return (
    <section id="visi-misi" className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8 text-gray-800">Visi & Misi</h2>

        {/* Visi Section */}
        <div className="flex flex-col md:flex-row items-center mb-12">
          <div className="md:w-1/2 p-6 text-left">
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">Visi</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Membangun PT GLOBAL MANDIRI PRIMATECH sebagai perusahaan
              perdagangan dan layanan terkemuka di bidang keselamatan dan
              perlingdungan kebakaran.
            </p>
          </div>
          <div className="md:w-1/2 p-6">
            <img
              src="https://placehold.co/600x400"
              alt="Visi Image"
              className="w-full h-auto object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Misi Section */}
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 p-6">
            <img
              src="https://placehold.co/600x400"
              alt="Misi Image"
              className="w-full h-auto object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2 p-6 text-left">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisiMisi;
