export default function Products() {
  const products = [
    {
      id: 1,
      name: "Fire Extinguiser",
      image: "/products/starvo.png",
      description:
        "Fire Extinguisher merupakan pemadam api portable yang dapat mengeluarkan air, busa, gas, dan media lainnya yang mampu untuk memadamkan api penyebab dari kebakaran. ",
    },
    {
      id: 2,
      name: "Fire Suppression System",
      image: "/products/hydrant.png",
      description:
        "Fire Protection System merupakan suatu sistem yang didesain untuk mencegah, dan atau memadamkan terjadinya kebakaran.",
    },
    {
      id: 3,
      name: "Fire Alarm System",
      image: "/products/alarm.png",
      description:
        " sistem fire alarm adalah suatu sistem terintegrasi yang di desain untuk mendeteksi adanya gejala kebakaran, untuk kemudian memberi peringatan dalam sistem evakuasi dan ditindaklanjuti secara otomatis maupun manual dengan sistem instalasi pemadam kebakaran.",
    },
    {
      id: 4,
      name: "Hydrant System",
      image: "/products/suppresion.jpeg",
      description:
        "Hydrant adalah sistem salah satu pemadam kebakaran yang terhubung dengan sumber air yang bertekanan dan mendistribusikan air ke lokasi pemadaman dengan laju yang cukup. Alat ini bermanfaat untuk pemadaman api tanpa membuat penggunanya khawatir terjadinya kekurangan pasokan air.",
    },
    {
      id: 5,
      name: "Access Control",
      image: "/products/access-control.jpeg",
      description:
        "Hydrant adalah sistem salah satu pemadam kebakaran yang terhubung dengan sumber air yang bertekanan dan mendistribusikan air ke lokasi pemadaman dengan laju yang cukup. Alat ini bermanfaat untuk pemadaman api tanpa membuat penggunanya khawatir terjadinya kekurangan pasokan air.",
      detail_image: "/products/detail-access-control.jpeg",
    },
  ];

  return (
    <div id="product" className="bg-gray-50 py-10 px-6 ">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Produk Kami</h1>
        <p className="text-gray-600 mb-8 max-w-2xl">
          Konsultasikan kebutuhan keamanan terhadap risiko kebakaran kepada kami
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">
          {products.map((product) => (
            <div key={product.id} className="perspective">
              <div className="text-center mb-2 text-lg font-semibold text-gray-800">
                {product.name}
              </div>
              <div className="relative w-full h-72 transition-transform duration-500 transform-style-preserve-3d hover:rotate-y-180 hover:scale-105">
                {/* Front side */}
                <div className="absolute w-full h-full backface-hidden bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col">
                  <div className="flex-1 flex items-center justify-center bg-white p-2">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="max-w-full h-60 object-contain"
                    />
                  </div>
                  <div className="bg-orange-500 text-white text-center py-2 px-3 text-sm font-semibold">
                    {product.name}
                  </div>
                </div>

                {/* Back side */}
                <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-orange-100 rounded-2xl shadow-lg flex flex-col p-4 overflow-hidden">
                  <h3 className="text-md font-semibold text-gray-800 mb-2 border-b pb-1">
                    Deskripsi
                  </h3>
                  <div className="flex-1 overflow-auto text-sm text-gray-700 leading-relaxed text-justify scrollbar-thin scrollbar-thumb-orange-300 scrollbar-track-orange-100 pr-2">
                    {product.detail_image && (
                      <img
                        src={product.detail_image}
                        alt={product.name}
                        className="max-w-full h-60 "
                      />
                    )}
                    {product.description}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Custom styles for 3D flip */}
      <style jsx>{`
        .perspective {
          perspective: 1000px;
        }
        .transform-style-preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180:hover {
          transform: rotateY(180deg);
        }
        .relative {
          will-change: transform;
        }
      `}</style>
    </div>
  );
}
