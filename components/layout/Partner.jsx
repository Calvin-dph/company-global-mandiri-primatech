const Partner = () => {
  return (
    <section id="partner" className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8 text-gray-800">Partner Kami</h2>

        {/* Grid untuk menampilkan logo */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {/* Logo 1 */}
          <div className="flex justify-center items-center">
            <img
              src="https://placehold.co/150x150"
              alt="Partner 1"
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Logo 2 */}
          <div className="flex justify-center items-center">
            <img
              src="https://placehold.co/150x150"
              alt="Partner 2"
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Logo 3 */}
          <div className="flex justify-center items-center">
            <img
              src="https://placehold.co/150x150"
              alt="Partner 3"
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Logo 4 */}
          <div className="flex justify-center items-center">
            <img
              src="https://placehold.co/150x150"
              alt="Partner 4"
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Logo 5 */}
          <div className="flex justify-center items-center">
            <img
              src="https://placehold.co/150x150"
              alt="Partner 5"
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Logo 6 */}
          <div className="flex justify-center items-center">
            <img
              src="https://placehold.co/150x150"
              alt="Partner 6"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partner;
