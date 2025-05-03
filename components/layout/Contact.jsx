"use client";

import { Mail, Phone, MapPin, Send, MessageCircle } from "lucide-react";

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
        <section
            id="contact-section"
            className="py-20 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-12"
        >
            {/* WhatsApp & Email Cards */}
            <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-8">
                    Hubungi Kami
                </h2>

                <div className="space-y-6">
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

                    <div className="mt-6">
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
            </div>

            {/* Contact Info + Map */}
            <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg shadow-md space-y-3">
                    <h3 className="text-xl font-bold text-gray-800 mb-3">Kantor Kami</h3>
                    <p className="flex items-center gap-2 text-gray-700">
                        <MapPin size={18} /> Komplek Perkantoran Premier Park 2
                        Blok. A No. 02,Cikokol Kota Tangerang 15117
                    </p>
                    <p className="flex items-center gap-2 text-gray-700">
                        <Mail size={18} /> sales@firetech.id
                    </p>
                    <p className="flex items-center gap-2 text-gray-700">
                        <Phone size={18} /> (021) 123-45678
                    </p>
                </div>

                <div className="aspect-video rounded-md overflow-hidden shadow-md">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1983.2025535381297!2d106.63765800000002!3d-6.21018!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f94ef62d91b9%3A0x5b6cebb9a46a6689!2ssafety%20kebakaran!5e0!3m2!1sen!2sus!4v1746252378933!5m2!1sen!2sus"
                        className="w-full h-full border-0"
                        loading="lazy"
                        allowFullScreen
                    />
                </div>
            </div>
        </section>
    );
}
