// src/app/components/Navbar/Navbar.tsx
"use client";  // Add this directive to mark the component as a Client Component

import { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl">
          <Link href="/">Spiritual Awakenings</Link>
        </div>
        <div className="relative">
          <Link href="/" className="text-white mr-4">Home</Link>
          <button
            className="text-white mr-4"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            Literature
          </button>
          {dropdownOpen && (
            <div className="absolute bg-white text-black mt-2 rounded shadow-lg">
              <Link href="/literature/who-is-an-addict" className="block px-4 py-2 hover:bg-gray-200">Who is an Addict?</Link>
              <Link href="/literature/what-is-na" className="block px-4 py-2 hover:bg-gray-200">What is the NA Program?</Link>
              <Link href="/literature/why-are-we-here" className="block px-4 py-2 hover:bg-gray-200">Why are We Here?</Link>
              <Link href="/literature/how-it-works" className="block px-4 py-2 hover:bg-gray-200">How it Works</Link>
              <Link href="/literature/12-traditions" className="block px-4 py-2 hover:bg-gray-200">The 12 Traditions</Link>
              <Link href="/literature/just-for-today" className="block px-4 py-2 hover:bg-gray-200">Just for Today</Link>
              <Link href="/literature/we-do-recover" className="block px-4 py-2 hover:bg-gray-200">We Do Recover</Link>
            </div>
          )}
          <Link href="/meetings" className="text-white mr-4">Meetings</Link>
          <Link href="/links" className="text-white mr-4">Links</Link>
          <Link href="/volunteer" className="text-white mr-4">Volunteer</Link>
          <Link href="/service-toolbox" className="text-white">For Servicemembers</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
