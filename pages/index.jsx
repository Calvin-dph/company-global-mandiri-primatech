"use client";
import CertificateGallery from "@/components/CertificateGalery";
import InstallationGallery from "@/components/InstalationGallery";
import About from "@/components/layout/About";
import Contact from "@/components/layout/Contact";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/layout/Hero";
import VisiMisi from "@/components/layout/Mission";
import { Navigation } from "@/components/layout/Navbar";
import Partner from "@/components/layout/Partner";
import { useEffect, useState } from "react";

export default function Home() {
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
      <Hero />
      <About />
      <VisiMisi />
      <CertificateGallery />
      <InstallationGallery />
      <Partner />
      <Contact />
      {/* <Services /> */}
      <Footer />
    </div>
  );
}
