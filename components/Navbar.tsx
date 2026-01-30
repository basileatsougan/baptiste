"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Accueil", href: "#top" },
    // { label: "A Propos", href: "#" },
    { label: "Annonces", href: "#annonces" },
    // { label: "Contact", href: "#" },
    // { label: "Don", href: "#" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 z-50 w-full bg-white backdrop-blur-sm px-6 py-4 md:px-12">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <div className="flex items-center gap-2">
          {/* Simple Logo Placeholder */}
          {/* <div className="h-10 w-10 flex items-center justify-center rounded-full bg-black text-white font-bold text-xl">
            B
          </div> */}
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-base md:text-lg font-semibold text-black hover:text-brand-orange transition-all duration-300 px-4 py-2 rounded-lg hover:bg-brand-orange/10 relative group"
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-orange transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden flex flex-col gap-1.5 w-8 h-8 justify-center items-center focus:outline-none"
          aria-label="Toggle menu"
        >
          <span
            className={`w-6 h-0.5 bg-black transition-all duration-300 ${
              isMenuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-black transition-all duration-300 ${
              isMenuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-black transition-all duration-300 ${
              isMenuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-[73px] left-0 w-full bg-white border-t border-gray-200 shadow-lg transition-all duration-300 ease-in-out ${
          isMenuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-full pointer-events-none"
        }`}
      >
        <div className="flex flex-col px-6 py-6 gap-4">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={closeMenu}
              className="text-lg font-semibold text-black hover:text-brand-orange transition-all duration-300 py-3 px-4 rounded-lg hover:bg-brand-orange/10 border-b border-gray-100 last:border-b-0"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Overlay */}
      {isMenuOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/20 top-[73px] z-40"
          onClick={closeMenu}
        />
      )}
    </nav>
  );
}

