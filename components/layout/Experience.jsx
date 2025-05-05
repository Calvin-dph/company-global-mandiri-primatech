import { pengalaman } from "@/data/data_pengalaman";
import { formatTanggalIndonesia } from "@/utils/formatDate";
import { useRef, useState } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";

const ITEMS_PER_PAGE = 4;

const fadeInLeft = (delay) => ({
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delay,
      duration: 1,
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 0,
    x: 50,
    transition: {
      duration: 0.5,
      ease: "easeIn",
    },
  },
});

const Experience = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true });
  const [currentPage, setCurrentPage] = useState(1);

  const reversedData = [...pengalaman].reverse();
  const totalPages = Math.ceil(reversedData.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentItems = reversedData.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handlePrev = () => setCurrentPage((prev) => Math.max(prev - 1, 1));
  const handleNext = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages));

  return (
    <section
      id="experience"
      className="py-6 px-4 bg-gray-50"
      style={{ backgroundImage: "url('/background/wave.jpg')" }}
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12">Pengalaman</h2>

        <div ref={containerRef} className="space-y-6 text-left min-h-[800px]">
          <AnimatePresence mode="wait">
            {currentItems.map((exp, index) => (
              <motion.div
                key={exp.id ?? `${exp.nama_proyek}-${index}-${currentPage}`} // pastikan unique
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                exit="exit"
                variants={fadeInLeft(index * 0.2)}
                className="flex flex-col md:flex-row items-center md:items-start gap-6 bg-white p-6 shadow rounded"
              >
                <img
                  src={exp.pict}
                  alt={exp.nama_proyek}
                  className="w-full md:w-1/3 rounded object-cover h-48"
                />
                <div className="md:w-2/3 relative">
                  <div className="absolute top-0 right-0 bg-gradient-to-l from-orange-500 to-orange-400 text-white text-xs font-semibold px-3 py-1 rounded-bl-lg shadow-md tracking-wide">
                    {formatTanggalIndonesia(exp.tahun)}
                  </div>
                  <h3 className="font-semibold text-xl mb-2">{exp.nama_proyek}</h3>
                  <p className="text-gray-700"><strong>Lokasi:</strong> {exp.lokasi_proyek}</p>
                  <p className="text-gray-700"><strong>Pengguna / Kontraktor:</strong> {exp.user_or_maincont}</p>
                  <p className="text-gray-600 mt-2">{exp.deskripsi}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <div className="flex justify-center items-center gap-4 mt-10">
          <button
            onClick={handlePrev}
            disabled={currentPage === 1}
            className="px-4 py-2 border border-orange-500 text-orange-500 rounded hover:bg-orange-100 disabled:opacity-50 disabled:cursor-not-allowed transition"
          >
            Sebelumnya
          </button>
          <span className="text-orange-600 font-medium">
            Halaman {currentPage} dari {totalPages}
          </span>
          <button
            onClick={handleNext}
            disabled={currentPage === totalPages}
            className="px-4 py-2 border border-orange-500 text-orange-500 rounded hover:bg-orange-100 disabled:opacity-50 disabled:cursor-not-allowed transition"
          >
            Selanjutnya
          </button>
        </div>
      </div>
    </section>
  );
};

export default Experience;
