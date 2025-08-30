import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import Home from '../pages/Home';
import NotFound from '../pages/NotFound';

export default function AppRoutes() {
  return (
    <>
      <Toaster position="top-center" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        
        {/* Show NotFound page for all unmatched routes */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
