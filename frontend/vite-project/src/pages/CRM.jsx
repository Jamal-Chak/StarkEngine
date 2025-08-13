// src/CRM.jsx
import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/crm/Sidebar";
import CRMDashboard from "../components/crm/CRMDashboard"; // Kept for potential default rendering

const CRM = () => {
  return (
    <div style={{ display: "flex", height: "100vh", backgroundColor: "#2D2F33", color: "white" }}>
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div style={{ flex: "1", padding: "24px", overflowY: "auto" }}>
        <div style={{ maxWidth: "1152px", margin: "0 auto" }}>
          {/* Render nested routes from MainRoutes.jsx */}
          <Outlet />
          {/* Optionally render CRMDashboard as a fallback if no route matches */}
          {/* <CRMDashboard /> // Uncomment if you want a default view */}
        </div>
      </div>
    </div>
  );
};

export default CRM;