"use client";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Mousewheel, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState, useEffect } from "react";

const CertificateGallery = () => {
  const certificates1 = [1, 2, 3, 4, 5, 6, 7, 8];
  const certificates2 = [9, 10];

  // State to track the clicked certificate for modal
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  // Disable scroll when modal is opened
  useEffect(() => {
    if (selectedCertificate) {
      document.body.style.overflow = "hidden"; // Disable scrolling
    } else {
      document.body.style.overflow = "auto"; // Restore scrolling
    }
    // Cleanup function to restore scroll when the component is unmounted
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedCertificate]);

  const renderCertificates = (certificates) => (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 min-h-[400px]">
      {certificates.map((cert) => (
        <motion.img
          key={cert}
          src={`/sertifikat/${cert}.png`}
          alt={`Certificate ${cert}`}
          className="w-[150px] h-[200px] object-cover rounded-lg shadow-lg cursor-pointer hover:scale-105 transition-transform duration-300 mx-auto"
          whileHover={{ scale: 1.05 }}
          onClick={() => setSelectedCertificate(cert)} // Set selected certificate
        />
      ))}
    </div>
  );

  const handleCloseModal = () => setSelectedCertificate(null); // Close the modal

  return (
    <section
      className="py-16 px-4 bg-cover bg-center bg-fit"
      id="certificates"
      style={{
        backgroundImage: "url('/background/gradient.jpg')",
      }}
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8 text-gray-800">
          Sertifikat Kami
        </h2>

        <Swiper
          modules={[Pagination, Mousewheel]}
          spaceBetween={50}
          slidesPerView={1}
          mousewheel={true}
          pagination={{ clickable: true }}
          className="pb-12"
        >
          <SwiperSlide>{renderCertificates(certificates1)}</SwiperSlide>
          <SwiperSlide>{renderCertificates(certificates2)}</SwiperSlide>
        </Swiper>
      </div>

      {/* Modal for zoomed-in image */}
      {selectedCertificate && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50"
          onClick={handleCloseModal} // Close modal when clicking outside
        >
          <div
            className="relative"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
          >
            <img
              src={`/sertifikat/${selectedCertificate}.png`}
              alt={`Certificate ${selectedCertificate}`}
              className="max-w-[90vw] max-h-[90vh] object-contain rounded-lg"
            />
            <button
              onClick={handleCloseModal}
              className="absolute top-0 right-0 bg-white p-2 rounded-full text-black font-bold"
            >
              X
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default CertificateGallery;
