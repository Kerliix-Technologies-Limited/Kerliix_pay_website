import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout({ children }) {
  const location = useLocation();

  // Routes where navbar is NOT shown
  const noNavbarRoutes = ['/notfound'];
  // Routes where footer is NOT shown (optional)
  const noFooterRoutes = ['/notfound'];

  const showNavbar = !noNavbarRoutes.includes(location.pathname.toLowerCase());
  const showFooter = !noFooterRoutes.includes(location.pathname.toLowerCase());

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-900 via-black to-gray-900">
      {showNavbar && <Navbar />}

      <main className={`${showNavbar ? 'mt-16' : 'mt-0'} flex-1 p-6`}>
        {children}
      </main>

      {showFooter && <Footer />}
    </div>
  );
}
