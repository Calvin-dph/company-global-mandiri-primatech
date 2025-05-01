"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const refHead = useRef(null);
  const isInViewHead = useInView(refHead, { once: true });

  const refPara1 = useRef(null);
  const isInViewPara1 = useInView(refPara1, { once: true });

  const refPara2 = useRef(null);
  const isInViewPara2 = useInView(refPara2, { once: true });

  return (
    <section id="about" className="py-16 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-lg mb-2 text-gray-400 italic text-center">
          STORY OF US
        </h2>

        <motion.h2
          ref={refHead}
          initial={{ opacity: 0, y: 50 }}
          animate={isInViewHead ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-4xl font-bold mb-6 text-gray-800 leading-snug text-center"
        >
          Kepercayaan Anda Menjadi Prioritas
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <motion.p
            ref={refPara1}
            initial={{ opacity: 0, x: -100 }} // dari kanan ke kiri
            animate={isInViewPara1 ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1.4, ease: "easeOut" }}
            className="text-xl text-gray-700 mb-6 leading-relaxed tracking-wide text-justify"
          >
            PT GLOBAL MANDIRI PRIMATECH Berdiri sejak awal September tahun 2017,
            didirikan dari pengalaman di bidang Mekanikal & Elektrikal untuk
            memberikan solusi proteksi kebakaran dan instalasi pipa baja kepada
            pelanggan. Kami berkomitmen untuk terus memberikan layanan terbaik
            di sektor ini dengan menjaga kualitas dan keamanan yang tinggi. Kami
            selalu berusaha menjadi yang terbaik dengan inovasi dan pengembangan
            teknologi terbaru di setiap aspek layanan kami.
          </motion.p>

          <motion.p
            ref={refPara2}
            initial={{ opacity: 0, x: 100 }} // dari kiri ke kanan
            animate={isInViewPara2 ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="text-xl text-gray-700 mb-6 leading-relaxed tracking-wide text-justify"
          >
            Dengan mempekerjakan tenaga ahli yang bersertifikasi dan
            berpengalaman, kami telah membangun reputasi yang baik dalam
            memberikan solusi yang efisien dan dapat diandalkan. Kami fokus pada
            fleksibilitas dan layanan yang sesuai dengan kebutuhan setiap
            pelanggan, menjadikan kami pilihan utama untuk proyek-proyek besar
            dan kompleks. Setiap proyek yang kami tangani selalu memperhatikan
            aspek keberlanjutan dan keselamatan untuk menciptakan hasil yang
            optimal.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default About;
