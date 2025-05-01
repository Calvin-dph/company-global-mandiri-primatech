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
import Services from "@/components/layout/Service";

export default function Home() {
  return (
    <div>
      <Navigation />
      <Hero />
      <About />
      <VisiMisi />
      <CertificateGallery />
      <InstallationGallery />
      <Partner />
      {/* <Services /> */}
      <Contact />
      <Footer />
    </div>
  );
}
