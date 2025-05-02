"use client";
import { motion } from "framer-motion";

const InstallationGallery = () => {
  const installationsA = Array.from(
    { length: 12 },
    (_, i) => `/instalasi/${i + 1}.jpeg`
  );
  const installationsB = Array.from(
    { length: 12 },
    (_, i) => `/instalasi/${i + 13}.jpeg`
  );

  return (
    <section className="py-16 px-4 bg-gray-50" id="installations">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8 text-gray-800">
          Galeri Instalasi
        </h2>
        <div className="flex flex-col gap-4">
          <div className="relative overflow-hidden">
            <motion.div
              className="flex space-x-4"
              animate={{
                x: ["0%", "-100%", "0%"],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 20,
                  ease: "linear",
                },
              }}
            >
              {installationsA.map((img) => (
                <motion.div
                  key={img}
                  className="flex-none w-1/3"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <img
                    src={img}
                    alt={`Instalasi ${img}`}
                    className="w-full max-h-[35vh] object-cover rounded-lg shadow-md"
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
          <div className="relative overflow-hidden">
            <motion.div
              className="flex space-x-4"
              animate={{
                x: ["-100%", "0%", "-100%"],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 20,
                  ease: "linear",
                },
              }}
            >
              {installationsB.map((img) => (
                <motion.div
                  key={img}
                  className="flex-none w-1/3"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <img
                    src={img}
                    alt={`Instalasi ${img}`}
                    className="w-full max-h-[35vh] object-cover rounded-lg shadow-md"
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstallationGallery;
