// src/components/invoices/ModernInvoiceTemplate.jsx
import React from 'react';

const ModernInvoiceTemplate = ({ invoice }) => (
  <div style={{ padding: 20, background: '#f5f5f5', borderRadius: 10 }}>
    <h1 style={{ borderBottom: '2px solid #333' }}>Modern Invoice</h1>
    <p>📍 Client: {invoice.client}</p>
    <ul>
      {invoice.items.map((item, idx) => (
        <li key={idx}>
          {item.description} — ${item.amount}
        </li>
      ))}
    </ul>
    <p>📝 {invoice.notes}</p>
  </div>
);

export default ModernInvoiceTemplate;
