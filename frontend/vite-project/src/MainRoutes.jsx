import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Dashboard from './pages/Dashboard';
import Invoices from './pages/Invoices';
import Customers from './pages/Customers';
import Settings from './pages/Settings';

function MainRoutes() {
  return (
    <Routes>
      {/* Redirect root to /dashboard */}
      <Route path="/" element={<Navigate to="/dashboard" replace />} />
      
      {/* Main Pages */}
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/invoices" element={<Invoices />} />
      <Route path="/customers" element={<Customers />} />
      <Route path="/settings" element={<Settings />} />

      {/* Optional: 404 route fallback */}
      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
  );
}

export default MainRoutes;
