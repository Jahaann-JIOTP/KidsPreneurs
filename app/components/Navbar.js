"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black text-white p-2 shadow-lg w-full z-20 fixed top-0">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        {/* Logo or Event Name */}
        <div className="text-2xl font-bold flex justify-center">
          <Link
            href="/"
            className="text-yellow-600  transition duration-300"
          >
               <Image className="mt-4"
              src="/logo4.svg"  // Path to the logo file in the public folder
              alt="Logo"
              width={200}  // Adjust width as needed
              height={200}  // Adjust height as needed
            />
            {/* KidPreneurs' Bazaar */}
          </Link>
          <Link
            href="/"
            className="text-yellow-600  transition duration-300 border-l-2 border-white ml-2 pl-1"
          >
               <img className="mt-0 w-auto h-[65px]"
              src="/Logo3.svg"  // Path to the logo file in the public folder
              alt="Logo"
               // Adjust height as needed
            />
            {/* KidPreneurs' Bazaar */}
          </Link>
        </div>

        {/* Desktop Navigation Links + Register Now Button */}
        <div className="hidden lg:flex items-center space-x-6 ">
          <Link
            href="/"
            className="hover:text-yellow-600 transition duration-300 "
          >
            Home
          </Link>
          <Link
            href="#eventschedule"
            className="hover:text-yellow-600 transition duration-300 "
          >
            Event Details
          </Link>
          <Link
            href="#sponsors"
            className="hover:text-yellow-600 transition duration-300 "
          >
            Sponsorship
          </Link>
          <Link
            href="#contact"
            className="hover:text-yellow-600 transition duration-300 "
          >
            Contact Us
          </Link>

          {/* "Register Now" Button inside the same container */}
          <Link href="#contact">
            <button
              className="bg-yellow-600 text-white py-2 px-6 border-2 border-transparent hover:bg-transparent hover:text-yellow-600 hover:border-yellow-600 transition duration-300"
              style={{ borderRadius: "20px" }}
            >
              Register Now
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-white">
            {isOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Links */}
      <div className={`lg:hidden ${isOpen ? "block" : "hidden"} mt-4`}>
        <Link
          href="/"
          className="block px-4 py-2 hover:text-gray-300 transition duration-300"
        >
          Home
        </Link>
        <Link
          href="#eventschedule"
          className="block px-4 py-2 hover:text-gray-300 transition duration-300"
        >
          Event Details
        </Link>
        <Link
          href="#sponsors"
          className="block px-4 py-2 hover:text-gray-300 transition duration-300"
        >
          Sponsorship
        </Link>
        <Link
          href="#contact"
          className="block px-4 py-2 hover:text-gray-300 transition duration-300"
        >
          Contact Us
        </Link>

        {/* Mobile "Register Now" Button */}
        <Link href="#contact" className="block px-4 py-2 text-left mt-4">
          <button
             className="bg-yellow-600 text-white py-2 px-6 border-2 border-transparent hover:bg-transparent hover:text-yellow-600 hover:border-yellow-600 transition duration-300"
             style={{ borderRadius: "20px" }}
          >
            Register Now
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
