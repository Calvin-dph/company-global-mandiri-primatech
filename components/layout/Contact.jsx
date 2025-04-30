const Contact = () => {
  return (
    <section
      id="contact"
      className="relative py-16 px-4 bg-white overflow-hidden"
    >
      {/* Blur Overlay with "On Progress" */}
      <div className="absolute inset-0 bg-white/70 backdrop-blur-sm flex items-center justify-center z-10">
        <h2 className="text-4xl font-bold text-gray-800">On Progress</h2>
      </div>

      {/* Actual Content (blurred behind overlay) */}
      <div className="max-w-xl mx-auto text-center relative z-0">
        <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
        <p className="text-gray-600 mb-4">Get in touch via email or phone.</p>
        <p className="text-gray-700">Email: contact@mycompany.com</p>
        <p className="text-gray-700">Phone: +62 812 3456 7890</p>
      </div>
    </section>
  );
};

export default Contact;
