import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const user = {
    username: 'kerliix_user',
    email: 'user@kerliix.com',
    avatarUrl: 'https://i.pravatar.cc/150?img=32',
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-br from-blue-900 to-gray-900 border-b border-white/20 text-white px-4 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left: Logo */}
        <div className="flex items-center">
          <Link to="/">
            <img
              src="https://raw.githubusercontent.com/kerliix/.github/main/company/logo.png"
              alt="Kerliix Logo"
              className="h-10 w-auto"
            />
          </Link>
        </div>

        {/* Center: Navigation Links (Desktop) */}
        <div className="hidden md:flex space-x-6 text-sm font-medium">
          <Link to="/about" className="hover:text-blue-400 transition">
            About
          </Link>
          <Link to="/services" className="hover:text-blue-400 transition">
            Services
          </Link>
          <Link to="/contact" className="hover:text-blue-400 transition">
            Contact
          </Link>
        </div>

        {/* Right: Profile + Mobile Menu Icon */}
        <div className="flex items-center gap-4">
          {/* Profile Image */}
          <a
            href="https://accounts.kerliix.com"
            target="_blank"
            rel="noopener noreferrer"
            className="sm:block"
          >
            <img
              src={user.avatarUrl}
              alt="Profile"
              className="h-10 w-10 rounded-full border-2 border-white/30 hover:border-white transition"
            />
          </a>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white hover:text-blue-400 focus:outline-none"
            aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isMenuOpen && (
        <div className="md:hidden mt-2 bg-gradient-to-br from-blue-900 to-gray-900 border-t border-white/20 px-4 py-3 space-y-3 text-sm font-medium">
          <Link
            to="/about"
            onClick={() => setIsMenuOpen(false)}
            className="block hover:text-blue-400 transition"
          >
            About
          </Link>
          <Link
            to="/services"
            onClick={() => setIsMenuOpen(false)}
            className="block hover:text-blue-400 transition"
          >
            Services
          </Link>
          <Link
            to="/contact"
            onClick={() => setIsMenuOpen(false)}
            className="block hover:text-blue-400 transition"
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}
