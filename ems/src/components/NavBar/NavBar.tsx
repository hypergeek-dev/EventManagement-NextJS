import { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="p-4 relative z-20">
      <div className="container mx-auto flex justify-between items-center">
        <div className=" font-bold text-xl">
          {/* Logo or brand name */}
        </div>
        <div className="relative">
          <Link href="/" className=" mr-4">Home</Link>
          <Link href="/Literature" className=" mr-4">Literature</Link>
          <Link href="/meetings" className=" mr-4">Meetings</Link>
          <Link href="/links" className=" mr-4">Links</Link>
          <Link href="/volunteer" className=" mr-4">Volunteer</Link>
          <Link href="/service-toolbox" className="">For Servicemembers</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
