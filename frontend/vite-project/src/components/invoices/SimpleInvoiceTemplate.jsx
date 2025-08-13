// src/components/invoices/SimpleInvoiceTemplate.jsx
import React from 'react';

const SimpleInvoiceTemplate = ({ invoice }) => (
  <div style={{ padding: 20, border: '1px solid #ccc' }}>
    <h2>Invoice</h2>
    <p><strong>Client:</strong> {invoice.client}</p>
    <ul>
      {invoice.items.map((item, index) => (
        <li key={index}>
          {item.description} - ${item.amount}
        </li>
      ))}
    </ul>
    <p><strong>Notes:</strong> {invoice.notes}</p>
  </div>
);

export default SimpleInvoiceTemplate;
