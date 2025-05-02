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

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="overflow-x-hidden">
            <Navigation isTop={isTop} />
            <section
                id="hero"
                className="h-[40vh] relative bg-fixed bg-cover bg-center"
            >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/50"></div>

                {/* Text content */}
                <div className="relative z-10 flex flex-col justify-center h-full text-white px-4 mx-24">
                    <div className="flex justify-between">
                        <div>
                            <h1 className="text-4xl md:text-5xl font-bold mb-4">
                                Contact Us
                            </h1>
                            <p className="text-lg">Home/Contact Us</p>
                        </div>
                        <h1>LOGO</h1>
                    </div>
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
            <Footer />
        </div>
    )
}