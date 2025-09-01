// src/MainRoutes.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home'; 
import Dashboard from './pages/Dashboard';
import Invoices from './pages/Invoices';
import Customers from './pages/Customers';
import Settings from './pages/Settings';
import Solutions from './pages/Solutions';
import Features from './pages/Features';
import Partners from './pages/Partners';
import Resources from './pages/Resources';
import Pricing from './pages/Pricing';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import CreateInvoice from './pages/CreateInvoice';
import Documents from './pages/Documents';
import Reports from './pages/Reports';
import Users from './pages/Users';
import Business from './pages/Business';
import Support from './pages/Support';

function MainRoutes() {
  return (
    <Routes>
      {/* ✅ Landing / Home Page */}
      <Route path="/" element={<Home />} />

      {/* Auth Pages */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />

      {/* Main App Pages */}
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/invoices" element={<Invoices />} />
      <Route path="/create-invoice" element={<CreateInvoice />} />
      <Route path="/customers" element={<Customers />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/documents" element={<Documents />} />
      <Route path="/reports" element={<Reports />} />
      <Route path="/users" element={<Users />} />
      <Route path="/business" element={<Business />} />
      <Route path="/support" element={<Support />} />

      {/* Public Info Pages */}
      <Route path="/solutions" element={<Solutions />} />
      <Route path="/features" element={<Features />} />
      <Route path="/partners" element={<Partners />} />
      <Route path="/resources" element={<Resources />} />
      <Route path="/pricing" element={<Pricing />} />

      {/* Optional: 404 Fallback */}
      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
  );
}

export default MainRoutes;
