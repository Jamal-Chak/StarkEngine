// src/components/crm/Overview.jsx
import React from "react";
import { Doughnut, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  ArcElement,
  LineElement,
  PointElement,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, ArcElement, LineElement, PointElement);

const revenueData = {
  labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  datasets: [
    {
      label: "Revenue",
      data: [120, 150, 180, 200, 220, 250, 300],
      borderColor: "#4F46E5",
      backgroundColor: "rgba(79, 70, 229, 0.15)",
      fill: true,
      tension: 0.4,
    },
  ],
};

const invoiceData = {
  labels: ["Paid", "Overdue"],
  datasets: [
    {
      data: [75, 25],
      backgroundColor: ["#22C55E", "#EF4444"],
      borderWidth: 0,
    },
  ],
};

const cardStyle = {
  backgroundColor: "#FFFFFF",
  padding: "20px",
  borderRadius: "14px",
  boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
};

const headingStyle = {
  fontSize: "14px",
  color: "#6B7280",
  fontWeight: 500,
  marginBottom: "8px",
};

const Overview = () => {
  return (
    <div
      style={{
        padding: "24px",
        backgroundColor: "#F9FAFB",
        minHeight: "100vh",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "20px",
          maxWidth: "1400px",
          margin: "0 auto",
        }}
      >
        {/* Total Revenue */}
        <div style={cardStyle}>
          <div>
            <h2 style={headingStyle}>Total Revenue</h2>
            <p style={{ fontSize: "28px", fontWeight: 700 }}>$1.5M</p>
            <p style={{ color: "#22C55E", fontSize: "13px" }}>+3.2% this week</p>
          </div>
        </div>

        {/* Invoice Status */}
        <div style={{ ...cardStyle, alignItems: "center", textAlign: "center" }}>
          <h2 style={headingStyle}>Invoice Status</h2>
          <div style={{ height: "120px", width: "120px" }}>
            <Doughnut
              data={invoiceData}
              options={{
                cutout: "70%",
                plugins: { legend: { display: false } },
                responsive: true,
                maintainAspectRatio: false,
              }}
            />
          </div>
          <p style={{ fontSize: "13px", marginTop: "8px" }}>75% Paid</p>
        </div>

        {/* Revenue Trend */}
        <div style={cardStyle}>
          <h2 style={headingStyle}>Revenue Trend</h2>
          <div style={{ height: "120px" }}>
            <Line
              data={revenueData}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                plugins: { legend: { display: false } },
                scales: {
                  y: { beginAtZero: true, ticks: { color: "#9CA3AF" } },
                  x: { ticks: { color: "#9CA3AF" } },
                },
              }}
            />
          </div>
        </div>

        {/* Weekly Tasks */}
        <div style={cardStyle}>
          <h2 style={headingStyle}>Weekly Tasks</h2>
          <div
            style={{
              width: "100%",
              backgroundColor: "#E5E7EB",
              borderRadius: "6px",
              height: "10px",
              marginBottom: "8px",
            }}
          >
            <div
              style={{
                backgroundColor: "#4F46E5",
                height: "10px",
                borderRadius: "6px",
                width: "65%",
              }}
            ></div>
          </div>
          <p style={{ fontSize: "13px" }}>65% Completed (6/10 tasks)</p>
        </div>
      </div>
    </div>
  );
};

export default Overview;
