// src/pages/Invoice.jsx
import React from 'react';
import { useLocation } from 'react-router-dom';

import SimpleInvoiceTemplate from '../components/invoices/SimpleInvoiceTemplate';
import ModernInvoiceTemplate from '../components/invoices/ModernInvoiceTemplate';

function Invoice() {
  const location = useLocation();
  const { invoice, template = 'simple' } = location.state || {};

  if (!invoice) {
    return (
      <div className="page">
        <h2>❌ No Invoice Data</h2>
        <p>Please return to the Create Invoice page and fill in the details.</p>
      </div>
    );
  }

  const renderTemplate = () => {
    switch (template) {
      case 'modern':
        return <ModernInvoiceTemplate invoice={invoice} />;
      case 'simple':
      default:
        return <SimpleInvoiceTemplate invoice={invoice} />;
    }
  };

  return (
    <div className="page">
      <h2>📄 Invoice Preview</h2>
      {renderTemplate()}
    </div>
  );
}

export default Invoice;
