import { motion, useScroll, useTransform } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";


function Footer() {
  const router = useRouter()
  const footercontainer = useRef(null)
  const { scrollYProgress } = useScroll({
    target: footercontainer,
    offset: ["start end", "end end"]
  })

  const [xRange, setXRange] = useState([100, 400]);

  useEffect(() => {
    const width = window.innerWidth;
    if (width > 1024) {
      setXRange([350, 400]);
    } else {
      setXRange([0, 0]);
    }
  }, []);

  const x = useTransform(scrollYProgress, [0, 1], xRange);

  return (
    <div
      ref={footercontainer}
      className="bg-gray-900 pt-[12vh] flex flex-col items-center text-[#f8f8f8] px-6"
    >
      <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-10 text-base">
        {/* Company/About Us */}
        <div className="md:col-span-2 space-y-4 text-center md:text-left">
          <h3 className="text-2xl font-bold">PT. Global Mandiri Primatech</h3>
          <p className="text-gray-300 leading-relaxed">
            Kami berkomitmen untuk memberikan layanan dan produk terbaik di bidang kami.
            Temukan lebih banyak tentang siapa kami, apa yang kami lakukan, dan bagaimana
            kami bisa membantu bisnis Anda tumbuh.
          </p>
        </div>

        {/* Keep in Touch */}
        <div className="space-y-4 text-center md:text-left">
          <h4 className="text-lg font-semibold">Hubungi Kami</h4>
          <ul className="space-y-2 text-gray-300">
            <li className="flex justify-center md:justify-start items-center gap-2">
              <Mail className="w-5 h-5 text-blue-400" />
              <span>sales@firetech.id</span>
            </li>
            <li className="flex justify-center md:justify-start items-center gap-2">
              <Phone className="w-5 h-5 text-blue-400" />
              <span>021 - 22292186</span>
            </li>
            <li className="flex justify-center md:justify-start items-center gap-2">
              <MapPin className="w-5 h-5 text-blue-400" />
              <span>Tangerang, Indonesia</span>
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div className="space-y-4 text-center md:text-left">
          <h4 className="text-lg font-semibold">Tautan Cepat</h4>
          <ul className="space-y-1 text-gray-300">
            <li><a href="#product" className="hover:text-blue-400 transition">Produk</a></li>
            <li><a href="#experience" className="hover:text-blue-400 transition">Pengalaman</a></li>
            <li><a href="#contact" className="hover:text-blue-400 transition">Kontak</a></li>
          </ul>
        </div>
      </div>

      {/* Line Separator */}
      <div className="relative top-[95px] w-full h-[2px] bg-[#999999] mt-12"></div>

      {/* Circle Button */}
      <motion.div
        style={{ x }}
        className="relative z-[1] w-[180px] h-[180px] bg-[#f8f8f8] rounded-full top-[calc(100%-75px)] flex justify-center items-center text-[24px] text-black cursor-pointer 
         transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl"
        onClick={() => router.push("/contact")}
      >
        <p className="text-[18px] font-semibold flex justify-center items-center w-[140px] h-[100px] text-center">
          Hubungi Kami
        </p>
      </motion.div>

      {/* Footer Bottom */}
      <footer className="py-4 mt-4 text-center text-sm text-gray-300">
        © {new Date().getFullYear()} PT. Global Mandiri Primatech. All rights reserved.
      </footer>
    </div>

  );
}

export default Footer;
