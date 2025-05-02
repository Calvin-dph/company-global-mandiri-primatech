import Footer from "@/components/layout/Footer";
import { Navigation } from "@/components/layout/Navbar";
import { ChevronDownIcon } from "lucide-react";
import { useEffect, useState } from "react";

export default function Contact() {
  const [isTop, setIsTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsTop(window.scrollY < 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="overflow-x-hidden">
      <Navigation isTop={isTop} />

      {/* Hero Section */}
      <section
        id="hero"
        className="h-[70vh] md:h-[80vh] relative bg-[url('/bg-contact.jpg')] bg-fixed bg-cover bg-center"
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-center h-full text-white px-6 md:px-24 mx-24">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3">
                Contact Us
              </h1>
              <p className="text-base sm:text-lg text-gray-200">
                Home / Contact Us
              </p>
            </div>
            <img
              src="/fire-hydrant.svg"
              alt="fire-hydrant"
              className="w-28 sm:w-32 md:w-40 object-contain"
            />
          </div>
        </div>

        {/* Scroll icon */}
        <a
          href="#contact-section"
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        >
          <div className="w-12 h-12 md:w-14 md:h-14 border-2 border-white rounded-full flex items-center justify-center hover:bg-white/10 transition">
            <ChevronDownIcon className="w-5 h-5 md:w-6 md:h-6 text-white hover:translate-y-2 transition-transform duration-200" />
          </div>
        </a>
      </section>

      {/* Contact Content Section */}
      <section
        id="contact-section"
        className="py-16 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-12"
      >
        {/* Contact Form */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Send us a message
          </h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              placeholder="Your Message"
              rows="5"
              className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
            <button
              type="submit"
              className="bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info or Map */}
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-gray-800">Our Office</h3>
            <p className="text-gray-600">123 Jl. Contoh No.45, Jakarta</p>
            <p className="text-gray-600">Email: info@example.com</p>
            <p className="text-gray-600">Phone: (021) 123-45678</p>
          </div>

          <div className="aspect-video rounded-md overflow-hidden shadow-md">
            <iframe
              src="https://maps.google.com/maps?q=jakarta&t=&z=13&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
