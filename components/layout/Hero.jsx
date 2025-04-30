import { ChevronDownIcon } from "@heroicons/react/24/solid";

const Hero = () => {
  return (
    <section
      id="hero"
      className="h-screen relative bg-fixed bg-cover bg-center"
      style={{ backgroundImage: "url('https://placehold.co/1920x1080')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Text content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          PT. Global Mandiri Primatech
        </h1>
        <p className="text-lg">Fire Fighting Specialist</p>
      </div>

      {/* Scroll icon */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <div className="w-14 h-14 border-2 border-white rounded-full flex items-center justify-center hover:bg-white/10 transition">
          <ChevronDownIcon className="w-6 h-6 text-white hover:translate-y-2 transition-transform duration-200" />
        </div>
      </a>
    </section>
  );
};

export default Hero;
