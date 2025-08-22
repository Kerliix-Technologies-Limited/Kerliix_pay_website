import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout({ children }) {
  const location = useLocation();

  // Routes where navbar is NOT shown
  const noNavbarRoutes = ['/checkout'];
  // Routes where footer is NOT shown (optional)
  const noFooterRoutes = ['/checkout'];

  const showNavbar = !noNavbarRoutes.includes(location.pathname.toLowerCase());
  const showFooter = !noFooterRoutes.includes(location.pathname.toLowerCase());

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#0c1c2c' }}>
      {showNavbar && <Navbar />}

      <main className={`${showNavbar ? 'mt-16' : 'mt-0'} flex-1 p-6`}>
        {children}
      </main>

      {showFooter && <Footer />}
    </div>
  );
}
