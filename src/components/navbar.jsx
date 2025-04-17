"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between lg:px-8 py-4 px-4 text-white relative bg-navy shadow-md z-50">
      {/* Left Section: Logo */}
      <div className="flex items-center w-auto h-8">
        <img src="logo.png" alt="Logo" className="w-8 h-8 mr-2" />
        <span className="text-gold font-bold text-xl">SSP</span>
      </div>

      {/* Desktop Nav */}
      <div className="hidden md:flex space-x-10 text-white text-[0.95rem] font-medium">
        <Link href="/" className="hover:text-gold transition">Home</Link>
        <Link href="/results" className="hover:text-gold transition">Results</Link>
        <Link href="/About" className="hover:text-gold transition">About</Link>
        <Link href="/contact" className="hover:text-gold transition">Contacts</Link>
        <Link href="/services" className="hover:text-gold transition">Services</Link>
      </div>

      {/* Mobile Toggle Button */}
      <div className="md:hidden">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
          className="text-white"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-[4.1rem] left-0 right-0 bg-charcoal text-white shadow-md px-6 py-4 flex flex-col space-y-4 transition-transform duration-300 ${
          menuOpen ? "translate-y-0" : "-translate-y-full"
        } z-40 md:hidden`}
        style={{ visibility: menuOpen ? "visible" : "hidden" }}
      >
        {["Home", "Results", "About", "Contacts", "Services"].map((item, idx) => (
          <Link
            key={idx}
            href={`#${item.toLowerCase()}`}
            className="py-2 text-white hover:text-gold transition"
            onClick={() => setMenuOpen(false)}
          >
            {item}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
