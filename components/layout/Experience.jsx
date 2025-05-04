import { pengalaman } from "@/data/data_pengalaman";
import { useState } from "react";

const ITEMS_PER_PAGE = 4;

const Experience = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const reversedData = [...pengalaman].reverse();

  const totalPages = Math.ceil(reversedData.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentItems = reversedData.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  const handlePrev = () => setCurrentPage((prev) => Math.max(prev - 1, 1));
  const handleNext = () =>
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));

  return (
    <section id="services" className="py-6 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12">Pengalaman</h2>
        <div className="space-y-6 text-left">
          {currentItems.map((exp, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-center md:items-start gap-6 bg-white p-6 shadow rounded"
            >
              <img
                src={exp.pict}
                alt={exp.nama_proyek}
                className="w-full md:w-1/3 rounded object-cover h-48"
              />
              <div className="md:w-2/3">
                <h3 className="font-semibold text-xl mb-2">
                  {exp.nama_proyek}
                </h3>
                <p className="text-gray-700">
                  <strong>Lokasi:</strong> {exp.lokasi_proyek}
                </p>
                <p className="text-gray-700">
                  <strong>Pengguna / Kontraktor:</strong> {exp.user_or_maincont}
                </p>
                <p className="text-gray-600 mt-1">
                  <strong>Tahun:</strong> {exp.tahun}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center items-center gap-4 mt-10">
          <button
            onClick={handlePrev}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
          >
            Sebelumnya
          </button>
          <span>
            Halaman {currentPage} dari {totalPages}
          </span>
          <button
            onClick={handleNext}
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
          >
            Selanjutnya
          </button>
        </div>
      </div>
    </section>
  );
};

export default Experience;
