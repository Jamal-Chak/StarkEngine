// src/components/crm/Sidebar.jsx
import React from "react";
import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  BarChart2,
  DollarSign,
  Users,
  FileText,
  CheckSquare,
  Settings,
  User,
  UserPlus,
} from "lucide-react";

const menuItems = [
  { name: "Overview", icon: LayoutDashboard, path: "/crm/overview" },
  { name: "Reports", icon: BarChart2, path: "/crm/reports" },
  { name: "Revenue", icon: DollarSign, path: "/crm/revenue" },
  { name: "Clients", icon: Users, path: "/crm/clients" },
  { name: "Invoices", icon: FileText, path: "/crm/invoices" },
  { name: "Tasks", icon: CheckSquare, path: "/crm/tasks" },
  { name: "Settings", icon: Settings, path: "/crm/settings" },
  { name: "Contacts", icon: User, path: "/crm/contacts" },
  { name: "Leads", icon: UserPlus, path: "/crm/leads" },
];

const Sidebar = () => {
  return (
    <div style={{ width: "256px", backgroundColor: "#2D2F33", borderRight: "1px solid #4B4D54", display: "flex", flexDirection: "column", height: "100vh" }}>
      {/* Logo / Title */}
      <div style={{ padding: "24px", borderBottom: "1px solid #4B4D54" }}>
        <h1 style={{ fontSize: "24px", fontWeight: "bold", color: "#00C853", letterSpacing: "2px" }}>
          StarkENGINE CRM
        </h1>
        <p style={{ fontSize: "12px", color: "white" }}>Manage your accounting</p>
      </div>

      {/* Menu Items */}
      <nav style={{ flex: "1", padding: "16px", display: "flex", flexDirection: "column", gap: "8px" }}>
        {menuItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            style={({ isActive }) => ({
              display: "flex",
              alignItems: "center",
              gap: "12px",
              padding: "12px 16px",
              borderRadius: "8px",
              transition: "all 0.2s",
              color: isActive ? "white" : "#A0A0A0",
              backgroundColor: isActive ? "#00C853" : "transparent",
              textDecoration: "none",
            })}
            onMouseOver={(e) => !e.target.getAttribute("data-active") && (e.target.style.backgroundColor = "#3A3B40")}
            onMouseOut={(e) => !e.target.getAttribute("data-active") && (e.target.style.backgroundColor = "transparent")}
          >
            <item.icon size={20} />
            <span style={{ fontSize: "16px", fontWeight: "500" }}>{item.name}</span>
          </NavLink>
        ))}
      </nav>

      {/* Footer */}
      <div style={{ padding: "16px", borderTop: "1px solid #4B4D54", color: "#A0A0A0", fontSize: "12px" }}>
        &copy; {new Date().getFullYear()} StarkEngine CRM
      </div>
    </div>
  );
};

export default Sidebar;