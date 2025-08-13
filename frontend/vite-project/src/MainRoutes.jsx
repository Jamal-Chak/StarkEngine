// src/MainRoutes.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";

// Public Pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Solutions from "./pages/Solutions";
import Features from "./pages/Features";
import Partners from "./pages/Partners";
import Resources from "./pages/Resources";
import Pricing from "./pages/Pricing";

// Main App Pages
import Dashboard from "./pages/Dashboard";
import Invoices from "./pages/Invoices";
import CreateInvoice from "./pages/CreateInvoice";
import Customers from "./pages/Customers";
import Settings from "./pages/Settings";
import Documents from "./pages/Documents";
import Reports from "./pages/Reports";
import Users from "./pages/Users";
import Business from "./pages/Business";
import Support from "./pages/Support";

// CRM Wrapper Page
import CRM from "./pages/CRM";

// CRM Components (existing and new placeholders)
import Overview from "./components/crm/Overview";
import Leads from "./components/crm/Leads";
import Contacts from "./components/crm/Contacts";
import Opportunities from "./components/crm/Opportunities"; // Corrected spelling
import Tasks from "./components/crm/Tasks";
import Timeline from "./components/crm/Timeline";

// Placeholder components for missing CRM features
const ReportsPlaceholder = () => <div style={{ padding: "16px", color: "white" }}>Reports (Placeholder)</div>;
const RevenuePlaceholder = () => <div style={{ padding: "16px", color: "white" }}>Revenue (Placeholder)</div>;
const ClientsPlaceholder = () => <div style={{ padding: "16px", color: "white" }}>Clients (Placeholder)</div>;
const InvoicesPlaceholder = () => <div style={{ padding: "16px", color: "white" }}>Invoices (Placeholder)</div>;
const SettingsPlaceholder = () => <div style={{ padding: "16px", color: "white" }}>Settings (Placeholder)</div>;

function MainRoutes() {
  return (
    <Routes>
      {/* Public Pages */}
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/solutions" element={<Solutions />} />
      <Route path="/features" element={<Features />} />
      <Route path="/partners" element={<Partners />} />
      <Route path="/resources" element={<Resources />} />
      <Route path="/pricing" element={<Pricing />} />

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

      {/* CRM Nested Routes */}
      <Route path="/crm" element={<CRM />}>
        <Route index element={<Overview />} /> {/* Default route for /crm */}
        <Route path="overview" element={<Overview />} />
        <Route path="leads" element={<Leads />} />
        <Route path="contacts" element={<Contacts />} />
        <Route path="opportunities" element={<Opportunities />} />
        <Route path="tasks" element={<Tasks />} />
        <Route path="timeline" element={<Timeline />} />
        <Route path="reports" element={<ReportsPlaceholder />} />
        <Route path="revenue" element={<RevenuePlaceholder />} />
        <Route path="clients" element={<ClientsPlaceholder />} />
        <Route path="invoices" element={<InvoicesPlaceholder />} />
        <Route path="settings" element={<SettingsPlaceholder />} />
      </Route>
    </Routes>
  );
}

export default MainRoutes;