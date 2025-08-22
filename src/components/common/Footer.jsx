import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaFacebookF,
  FaLinkedinIn,
  FaGithub,
  FaEnvelope,
  FaInstagram,
} from 'react-icons/fa';
import { SiX } from 'react-icons/si';
import SubscribeForm from './SubscribeForm';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-blue-900 to-gray-900 text-white border-t border-white/20 px-8 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* About Section */}
        <div>
          <h3 className="text-xl font-semibold mb-2">Kerliix</h3>
          <p className="text-sm text-white/80 leading-relaxed mb-4">
            Empowering connections through intuitive design and cutting-edge technology.
            Let's build the future together.
          </p>

          {/* Social Icons */}
          <div className="flex space-x-5 mt-2 text-white/90">
            <a
              href="https://www.facebook.com/kerliix"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="hover:text-[#1877F2] transition"
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href="https://www.instagram.com/kerliix"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-[#E4405F] transition"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="https://x.com/kerliix"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X"
              className="hover:text-[#1DA1F2] transition"
            >
              <SiX size={20} />
            </a>
            <a
              href="https://www.linkedin.com/company/kerliix"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-[#0A66C2] transition"
            >
              <FaLinkedinIn size={20} />
            </a>
            <a
              href="https://github.com/kerliix"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hover:text-[#6e5494] transition"
            >
              <FaGithub size={20} />
            </a>
          </div>
        </div>

        {/* Navigation Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Navigation</h4>
          <ul className="space-y-2 text-white/90">
            <li>
              <Link to="/about" className="hover:text-blue-400 transition">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-blue-400 transition">
                Services
              </Link>
            </li>
            <li>
              <Link to="/blog" className="hover:text-blue-400 transition">
                Blog
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-blue-400 transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Resources</h4>
          <ul className="space-y-2 text-white/90">
            <li>
              <Link to="/help-center" className="hover:text-blue-400 transition">
                Help Center
              </Link>
            </li>
            <li>
              <Link to="/privacy" className="hover:text-blue-400 transition">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/terms" className="hover:text-blue-400 transition">
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Contact</h4>
          <ul className="space-y-4 text-white/90 text-sm">
            <li className="flex items-start gap-2">
              <FaEnvelope className="mt-1" />
              <div>
                <a
                  href="mailto:support@kerliix.com"
                  className="hover:text-blue-400 transition font-medium"
                >
                  support@kerliix.com
                </a>
                <p className="text-white/70 text-xs">
                  For technical support or product-related questions
                </p>
              </div>
            </li>
            <li className="flex items-start gap-2">
              <FaEnvelope className="mt-1" />
              <div>
                <a
                  href="mailto:info@kerliix.com"
                  className="hover:text-blue-400 transition font-medium"
                >
                  info@kerliix.com
                </a>
                <p className="text-white/70 text-xs">
                  For general inquiries, media, or partnership opportunities
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="max-w-7xl mx-auto mt-12 px-4 md:px-0">
        <h4 className="text-lg font-semibold mb-4 text-center">
          Subscribe to our Newsletter
        </h4>
        <div className="flex justify-center">
          <SubscribeForm />
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-10 pt-6 border-t border-white/20 text-center text-white/60 text-sm">
        © {new Date().getFullYear()} Kerliix. All rights reserved.
      </div>

      {/* Tagline */}
      <div className="max-w-7xl mx-auto mt-6 text-center text-blue-400 uppercase tracking-wider font-semibold">
        Connect. Understand. Unify.
      </div>
    </footer>
  );
}
