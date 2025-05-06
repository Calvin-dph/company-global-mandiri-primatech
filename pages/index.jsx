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
import Products from "@/components/layout/Products";
import { useEffect, useState } from "react";
import Experience from "@/components/layout/Experience";
import BackToTop from "@/components/BacktoTop";
import Head from "next/head";

export default function Home() {
  const [isTop, setIsTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsTop(window.scrollY < 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Head>
        <title>
          PT Global Mandiri Primatech | Fire Hydrant & Fire Extinguisher
        </title>
        <meta
          name="description"
          content="PT Global Mandiri Primatech adalah perusahaan penyedia alat pemadam kebakaran seperti hydrant dan fire extinguisher terpercaya di Indonesia. Kunjungi firefighting.id untuk info produk lengkap."
        />
        <meta
          name="keywords"
          content="fire extinguisher, hydrant, alat pemadam kebakaran, firefighting Indonesia, PT Global Mandiri Primatech, jual APAR, sistem hydrant"
        />
        <meta name="author" content="PT Global Mandiri Primatech" />
        <meta name="robots" content="index, follow" />

        <meta
          property="og:title"
          content="PT Global Mandiri Primatech | Fire Hydrant & Fire Extinguisher"
        />
        <meta
          property="og:description"
          content="Spesialis alat pemadam kebakaran seperti hydrant dan fire extinguisher. Kunjungi kami di firefighting.id."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://firefighting.id" />
        <meta
          property="og:image"
          content="https://firefighting.id/images/og-image.jpg"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="PT Global Mandiri Primatech | Fire Hydrant & Fire Extinguisher"
        />
        <meta
          name="twitter:description"
          content="Perusahaan penyedia fire extinguisher & sistem hydrant terpercaya di Indonesia."
        />
        <meta
          name="twitter:image"
          content="https://firefighting.id/images/og-image.jpg"
        />
      </Head>

      <div className="overflow-x-hidden">
        <Navigation isTop={isTop} />
        <Hero />
        <About />
        <VisiMisi />
        <InstallationGallery />
        <CertificateGallery />
        <Products />
        <Experience />
        <Partner />
        <Contact />
        <Footer />
        <BackToTop />
      </div>
    </>
  );
}
