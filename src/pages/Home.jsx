import React from 'react';
import {
  FaFacebookF,
  FaLinkedinIn,
  FaGithub,
  FaEnvelope,
  FaInstagram,
} from 'react-icons/fa';
import { SiX } from 'react-icons/si';

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] p-6">
      <img
        src="https://raw.githubusercontent.com/kerliix/.github/main/company/logo.png"
        alt="Company Logo"
        className="mb-8 max-w-lg w-full object-contain"
      />

      {/* Divider line above socials */}
      <div className="w-full max-w-lg border-t border-white/20 mb-10" />

      {/* Social Icons below the divider */}
      <div className="flex space-x-5 text-white/90">
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
  );
}
