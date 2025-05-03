"use client";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Mousewheel, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const CertificateGallery = () => {
  const certificates1 = [1, 2, 3, 4, 5, 6, 7, 8];
  const certificates2 = [9, 10, 11, 12];

  const renderCertificates = (certificates) => (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 min-h-[400px] ">
      {certificates.map((cert) => (
        <motion.img
          key={cert}
          src={`https://placehold.co/150x200?text=Certificate+${cert}`}
          alt={`Certificate ${cert}`}
          className="w-[150px] h-[200px] object-cover rounded-lg shadow-md cursor-pointer hover:scale-105 transition-transform duration-300 mx-auto"
          whileHover={{ scale: 1.05 }}
        />
      ))}
    </div>
  );


  return (
    <section className="py-16 px-4 bg-white" id="certificates">
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
    </section>
  );
};

export default CertificateGallery;
