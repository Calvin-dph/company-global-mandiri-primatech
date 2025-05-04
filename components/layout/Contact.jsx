"use client";

import { Mail, Phone, MapPin, Timer, MessageCircle } from "lucide-react";

export default function Contact() {
  const whatsappContacts = [
    { name: "Admin 1", number: "6281234567890" },
    { name: "Admin 2", number: "6289876543210" },
    { name: "Admin 3", number: "6281122334455" },
  ];

  const emailContacts = [
    { name: "Support", email: "support@example.com" },
    { name: "Sales", email: "sales@example.com" },
    { name: "General", email: "info@example.com" },
  ];

  return (
    <section id="contact-section" className="py-20 px-6 mx-auto space-y-10">
      <h1 className="text-3xl font-bold text-gray-800 mb-4 text-center">
        Hubungi Kami
      </h1>
      <div className="relative flex flex-col-reverse md:flex-row gap-6 h-auto md:h-[400px] items-center">
        {/* Informasi Kantor */}
        <div className="md:absolute md:right-40 md:top-0 md:h-full">
          <div className=" flex flex-col gap-4 bg-orange-500 p-6 shadow-md space-y-4 h-full w-72">
            {/* Lokasi */}
            <div className="flex items-start gap-3 justify-between h-fit">
              <div className="text-white text-xs w-[80%]">
                <h1 className="font-bold text-sm tracking-wider">LOKASI</h1>
                Komplek Perkantoran Premier Park 2 Blok. A No. 02, Cikokol Kota
                Tangerang
              </div>
              <MapPin size={20} className="text-white mt-1" />
            </div>

            {/* Email */}
            <div className="flex items-start gap-3 justify-between h-fit">
              <div className="text-white text-xs w-[80%]">
                <h1 className="font-bold text-sm tracking-wider">EMAIL</h1>
                sales@firetech.id
              </div>
              <Mail size={20} className="text-white mt-1" />
            </div>

            {/* Phone */}
            <div className="flex items-start gap-3 justify-between h-fit">
              <div className="text-white text-xs w-[80%]">
                <h1 className="font-bold text-sm tracking-wider">PHONE</h1>
                (021) 123-45678
              </div>
              <Phone size={20} className="text-white mt-1" />
            </div>

            {/* Jam Buka */}
            <div className="flex items-start gap-3 justify-between h-fit">
              <div className="text-white text-xs w-[80%]">
                <h1 className="font-bold text-sm tracking-wider">JAM BUKA</h1>
                <p> Senin - Jumat, 08.30 am - 17.30 pm</p>
              </div>
              <Timer size={20} className="text-white mt-1" />
            </div>
          </div>
        </div>

        {/* Google Maps */}
        <div className="flex-1 rounded-md overflow-hidden shadow-md h-full w-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1983.2025535381297!2d106.63765800000002!3d-6.21018!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f94ef62d91b9%3A0x5b6cebb9a46a6689!2ssafety%20kebakaran!5e0!3m2!1sen!2sus!4v1746252378933!5m2!1sen!2sus"
            className="w-full h-full border-0"
            loading="lazy"
            allowFullScreen
          />
        </div>
      </div>

      {/* WhatsApp & Email Cards */}
      <div className="grid grid-cols-2 space-x-6">
        <div>
          <h3 className="text-xl font-semibold text-gray-700 mb-2 flex items-center gap-2">
            <MessageCircle className="text-green-600" size={20} />
            WhatsApp
          </h3>
          <div className="space-y-3">
            {whatsappContacts.map((wa) => (
              <a
                key={wa.number}
                href={`https://wa.me/${wa.number}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 bg-green-100 hover:bg-green-200 text-green-800 px-4 py-3 rounded-lg shadow-sm transition"
              >
                <MessageCircle size={20} className="text-green-600" />
                <span className="font-medium group-hover:underline">
                  Chat {wa.name}
                </span>
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-gray-700 mb-2 flex items-center gap-2">
            <Mail className="text-blue-600" size={20} />
            Email
          </h3>
          <div className="space-y-3">
            {emailContacts.map((contact) => (
              <a
                key={contact.email}
                href={`mailto:${contact.email}`}
                className="group flex items-center gap-3 bg-blue-100 hover:bg-blue-200 text-blue-800 px-4 py-3 rounded-lg shadow-sm transition"
              >
                <Mail size={20} className="text-blue-600" />
                <span className="font-medium group-hover:underline">
                  Email {contact.name}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
