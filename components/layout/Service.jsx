const Services = () => {
  return (
    <section id="services" className="py-16 px-4 bg-gray-50">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 shadow rounded">
            <h3 className="font-semibold text-lg mb-2">Web Development</h3>
            <p className="text-gray-600">Modern and responsive websites.</p>
          </div>
          <div className="bg-white p-6 shadow rounded">
            <h3 className="font-semibold text-lg mb-2">Digital Marketing</h3>
            <p className="text-gray-600">Grow your business online.</p>
          </div>
          <div className="bg-white p-6 shadow rounded">
            <h3 className="font-semibold text-lg mb-2">Consulting</h3>
            <p className="text-gray-600">Expert advice to boost performance.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
