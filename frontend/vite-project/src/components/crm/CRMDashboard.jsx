// src/components/crm/CRMDashboard.jsx
import React from "react";
import { Doughnut, Line, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  LineElement,
  PointElement,
} from "chart.js";

// Register ChartJS components
ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, LineElement, PointElement);

// Sample data for charts
const revenueData = {
  labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  datasets: [
    {
      label: "Revenue",
      data: [100, 120, 150, 130, 180, 200, 300],
      backgroundColor: "#00C853",
      borderColor: "#00C853",
      fill: false,
    },
  ],
};

const invoiceData = {
  labels: ["Paid", "Overdue"],
  datasets: [
    {
      data: [72, 28],
      backgroundColor: ["#00C853", "#D32F2F"],
      borderWidth: 0,
    },
  ],
};

const taxData = {
  labels: ["Liabilities", "Deductions"],
  datasets: [
    {
      label: "Amount ($K)",
      data: [200, 150],
      backgroundColor: ["#D32F2F", "#00C853"],
    },
  ],
};

const CRMDashboard = () => {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px", padding: "16px" }}>
      {/* Total Revenue */}
      <div style={{ backgroundColor: "#1E1E23", padding: "16px", borderRadius: "8px", color: "white" }}>
        <h2 style={{ fontSize: "16px", color: "#00C853" }}>Total Revenue</h2>
        <p style={{ fontSize: "24px", fontWeight: "600" }}>$1.2M</p>
        <p style={{ color: "#00C853" }}>+2.7%</p>
        <button
          style={{
            marginTop: "8px",
            backgroundColor: "#00C853",
            color: "white",
            padding: "4px 12px",
            borderRadius: "4px",
            border: "none",
            cursor: "pointer",
          }}
        >
          View Chart
        </button>
      </div>

      {/* Invoice Status */}
      <div style={{ backgroundColor: "#1E1E23", padding: "16px", borderRadius: "8px", color: "white" }}>
        <h2 style={{ fontSize: "16px", color: "#00C853" }}>Invoice Status</h2>
        <Doughnut
          data={invoiceData}
          options={{ cutout: "70%", plugins: { legend: { display: false } } }}
        />
        <p style={{ textAlign: "center" }}>72% Paid</p>
      </div>

      {/* Revenue Trend */}
      <div style={{ backgroundColor: "#1E1E23", padding: "16px", borderRadius: "8px", color: "white" }}>
        <h2 style={{ fontSize: "16px", color: "#00C853" }}>Revenue Trend</h2>
        <Line data={revenueData} />
      </div>

      {/* Customer Metric */}
      <div style={{ backgroundColor: "#1E1E23", padding: "16px", borderRadius: "8px", color: "white" }}>
        <h2 style={{ fontSize: "16px", color: "#00C853" }}>Customer Metric</h2>
        <p>Overall Score: 4.5/5</p>
        <p>Lifetime Value: $82,500</p>
      </div>

      {/* Weekly Tasks */}
      <div style={{ backgroundColor: "#1E1E23", padding: "16px", borderRadius: "8px", color: "white" }}>
        <h2 style={{ fontSize: "16px", color: "#00C853" }}>Weekly Tasks</h2>
        <div style={{ width: "100%", backgroundColor: "#3A3B40", borderRadius: "8px", height: "16px" }}>
          <div style={{ backgroundColor: "#00C853", height: "16px", borderRadius: "8px", width: "70%" }}></div>
        </div>
        <p>70% Completed (7/10 tasks)</p>
      </div>

      {/* Top Clients */}
      <div style={{ backgroundColor: "#1E1E23", padding: "16px", borderRadius: "8px", color: "white" }}>
        <h2 style={{ fontSize: "16px", color: "#00C853" }}>Top Clients</h2>
        <p>Devon Lane: $720K</p>
        <p>Wade Warren: $500K</p>
        <p>Darlene Robertson: $300K</p>
      </div>

      {/* Payment Alerts */}
      <div style={{ backgroundColor: "#1E1E23", padding: "16px", borderRadius: "8px", color: "white" }}>
        <h2 style={{ fontSize: "16px", color: "#00C853" }}>Payment Alerts</h2>
        <ul style={{ color: "#D32F2F", listStyle: "none", padding: 0 }}>
          <li>Invoice #123 - $5,000 (Due: Aug 05)</li>
          <li>Invoice #124 - $3,000 (Due: Aug 07)</li>
        </ul>
      </div>

      {/* Tax Insights */}
      <div style={{ backgroundColor: "#1E1E23", padding: "16px", borderRadius: "8px", color: "white" }}>
        <h2 style={{ fontSize: "16px", color: "#00C853" }}>Tax Insights</h2>
        <Bar data={taxData} />
      </div>
    </div>
  );
};

export default CRMDashboard;