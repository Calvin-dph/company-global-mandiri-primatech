"use client";
import { useState } from "react";

export const Navigation = ({ isTop }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "About Us", href: "#about" },
    { label: "Product", href: "#product" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${isTop ? "bg-transparent text-white" : "bg-white text-black shadow-md"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <img
          src="/Logo.png"
          alt="Logo"
          className="h-18 w-auto object-contain transition-opacity duration-300 hover:opacity-80"
        />

        {/* Burger icon */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none cursor-pointer"
          aria-label="Toggle menu"
        >
          <div className="flex flex-col gap-[5px]">
            {[...Array(3)].map((_, i) => (
              <span
                key={i}
                className={`block h-[2px] w-6 rounded-sm transition-all duration-500 ${isTop ? "bg-white" : "bg-gray-800"
                  }`}
              ></span>
            ))}
          </div>
        </button>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center space-x-8 font-medium text-base">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  const target = document.querySelector(link.href);
                  if (target) {
                    const yOffset = -window.innerHeight * 0.1;
                    const y = target.getBoundingClientRect().top + window.pageYOffset + yOffset;
                    window.scrollTo({ top: y, behavior: "smooth" });
                  }
                  setIsOpen(false);
                }}
                className={`block transition duration-300 ${isTop
                  ? "text-white hover:text-blue-300"
                  : "text-gray-700 hover:text-blue-600"
                  }`}
              >
                {link.label}
              </a>
            </li>
          ))}

        </ul>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-800 overflow-hidden ${isOpen ? "max-h-[500px]" : "max-h-0"
          } bg-white`}
      >
        <ul className="flex flex-col px-6 py-4 space-y-4 font-medium text-gray-800">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block hover:text-blue-600 transition duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
