const Partner = () => {
  const allPartner = [
    { nama: "Prima", image: "/partner/1.png" },
    { nama: "ABC", image: "/partner/2.png" },
    { nama: "Astari", image: "/partner/3.png" },
    { nama: "Rucika", image: "/partner/4.png" },
    { nama: "Mitsubisi", image: "/partner/5.png" },
    { nama: "Supreme", image: "/partner/6.png" },
    { nama: "BPBD", image: "/partner/7.png" },
    { nama: "KMS", image: "/partner/8.png" },
    { nama: "CNG", image: "/partner/9.png" },
  ];

  // Bagi array menjadi chunk 6 item
  const chunkArray = (arr, size) =>
    Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
      arr.slice(i * size, i * size + size)
    );

  const rows = chunkArray(allPartner, 6);

  return (
    <section id="partner" className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12 text-gray-800">Partner Kami</h2>

        {rows.map((group, i) => (
          <div key={i} className="flex justify-center flex-wrap gap-4 mb-6">
            {group.map((e, j) => (
              <div
                key={j}
                className="w-full max-w-[120px] aspect-[3/2] bg-white p-4 rounded-xl shadow hover:shadow-md transition duration-300 flex items-center justify-center"
              >
                <img
                  src={e.image}
                  alt={e.nama}
                  className="w-full h-auto object-contain"
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Partner;
