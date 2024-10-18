"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header({ userImage }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  // Close the menu when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    // Add event listener
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup the event listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="bg-cover bg-center text-white relative">
      <nav
        className="container mx-auto flex items-center justify-between  lg:px-12 relative"
        style={{
          backgroundImage: "url('/bg11.jpeg')", // Background image
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              alt="EmpowerSafe Logo"
              src="/logo.png" // Logo path
              width={180} // Adjusted size
              height={100} // Adjusted size
              className="rounded-full"
            />
          </Link>
        </div>

        <button
          onClick={toggleMenu}
          className="lg:hidden flex items-center px-3 py-2 border rounded text-white border-white hover:bg-gray-700 z-40"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className={`w-6 h-6 ${menuOpen ? "rotate-180" : ""}`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>

        <div
          ref={menuRef}
          className={`${
            menuOpen ? "flex bg-rose-300" : "hidden"
          } lg:flex flex-col lg:flex-row items-start lg:items-center lg:space-y-0 lg:space-x-8 fixed lg:static top-0 right-0 lg:left-auto lg:transform-none h-full lg:h-auto w-full lg:w-auto max-w-xs lg:max-w-none p-5 lg:p-0 z-20 justify-center space-y-4 lg:space-y-0`}
        >
          <Link
            href="/"
            className="text-lg text-white block lg:inline-block py-2 px-4 rounded-md shadow-md font-normal transition duration-300 ease-in-out hover:bg-pink-500"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-lg text-white block lg:inline-block py-2 px-4 rounded-md shadow-md font-normal transition duration-300 ease-in-out hover:bg-pink-500"
          >
            About
          </Link>
          <Link
            href="/services"
            className="text-lg text-white block lg:inline-block py-2 px-4 rounded-md shadow-md font-normal transition duration-300 ease-in-out hover:bg-pink-500"
          >
            Services
          </Link>
          <Link
            href="/contact"
            className="text-lg text-white block lg:inline-block py-2 px-4 rounded-md shadow-md font-normal transition duration-300 ease-in-out hover:bg-pink-500"
          >
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
}
