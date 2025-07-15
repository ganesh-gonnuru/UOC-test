import React from "react";
import { Home } from "lucide-react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-blue-900 text-white px-6 py-4 shadow-md flex items-center justify-between">
      {/* Logo */}
      <a href="/" className="flex items-center gap-3">
        <img src="/logo.png" alt="Logo" className="w-10 h-10 rounded-full" />
        <h1 className="text-3xl font-light text-white">Uditi Overseas Counsultancy</h1>
      </a>

      {/* Navigation */}
      <nav className="flex items-center gap-4 md:gap-6 flex-wrap">
        <a
          href="/"
          className="bg-red-500 px-3 py-1 rounded-full flex items-center gap-1 hover:text-red-700 transition-colors"
        >
          <Home size={18} />
          <span>Home</span>
        </a>

        <Link
          to="/about-us"
          className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-700 transition duration-300"
        >
          About Us
        </Link>

        {/* ✅ NEW: Gallery Link */}
        <Link
          to="/student-gallery"
          className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-700 transition duration-300"
        >
          Gallery
        </Link>

        <Link
          to="/contact"
          className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition duration-300"
        >
          Free Consultation
        </Link>

        {/* Navigation
        <Link
          to="/ielts"
          className="bg-red-600 text-white px-4 py-2 rounded-full hover:bg-red-700 transition duration-300"
        >
          Free IELTS Mock
        </Link>
         */}

        
      </nav>
    </header>
  );
}
