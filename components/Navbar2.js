"use client"; // ⭐ required for state handling in app dir

import React, { useState } from "react"; // ⭐ change
import Link from "next/link";

const Navbar2 = () => {
  const [isOpen, setIsOpen] = useState(false); // ⭐ change (state for mobile menu)

  return (
    <nav className="h-20 bg-purple-700 flex justify-between px-3 items-center text-white relative">
      <div className="logo font-bold text-3xl">BitLinks</div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex justify-center items-center gap-4">
        <Link href="/"><li>Home</li></Link>
        <Link href="/about"><li>About</li></Link>
        <Link href="/shorten"><li>Shorten</li></Link>
        <Link href="/contact"><li>Contact Us</li></Link>
        <li className="flex gap-3">
          <Link href="/shorten"><button className="bg-purple-500 rounded-lg shadow-lg px-4 py-2 font-bold">Try Now</button></Link>
          <Link href="/github"><button className="bg-purple-500 rounded-lg shadow-lg px-4 py-2 font-bold">Git Hub</button></Link>
        </li>
      </ul>

      {/* Mobile Hamburger */}
      <button
        className="md:hidden text-white text-2xl"
        onClick={() => setIsOpen(!isOpen)} // ⭐ toggle menu
      >
        ☰
      </button>

      {/* ⭐ Mobile Dropdown Menu */}
      {isOpen && (
        <ul className="absolute top-20 left-0 w-full bg-purple-800 flex flex-col gap-4 p-4 md:hidden">
          <Link href="/" onClick={() => setIsOpen(false)}><li>Home</li></Link>
          <Link href="/about" onClick={() => setIsOpen(false)}><li>About</li></Link>
          <Link href="/shorten" onClick={() => setIsOpen(false)}><li>Shorten</li></Link>
          <Link href="/contact" onClick={() => setIsOpen(false)}><li>Contact Us</li></Link>
          <li className="flex flex-col gap-2">
            <Link href="/shorten" onClick={() => setIsOpen(false)}>
              <button className="bg-purple-500 rounded-lg shadow-lg px-4 py-2 font-bold w-full">
                Try Now
              </button>
            </Link>
            <Link href="/github" onClick={() => setIsOpen(false)}>
              <button className="bg-purple-500 rounded-lg shadow-lg px-4 py-2 font-bold w-full">
                Git Hub
              </button>
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar2;
