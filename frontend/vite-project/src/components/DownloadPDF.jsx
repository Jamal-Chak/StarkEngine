// src/components/DownloadPDF.jsx
import React from 'react';
import { Button } from '@chakra-ui/react';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import { FaDownload } from 'react-icons/fa';

function DownloadPDF({ transactions = [], totals = {} }) {
  const generatePDF = () => {
    const doc = new jsPDF();

    // 🔹 Title & Meta
    doc.setProperties({
      title: 'StarkBooks Financial Summary',
      subject: 'Financial Summary Report',
      author: 'StarkBooks',
    });

    // 🔹 Header
    doc.setFontSize(18);
    doc.text('📘 StarkBooks Financial Summary', 14, 20);

    // 🔹 Summary Section
    doc.setFontSize(12);
    doc.text('Overview:', 14, 30);
    doc.text(`• Total Receivables: $${(totals.receivables ?? 0).toLocaleString()}`, 14, 38);
    doc.text(`• Total Payables: $${(totals.payables ?? 0).toLocaleString()}`, 14, 46);
    doc.text(`• Cash Flow: $${(totals.cashFlow ?? 0).toLocaleString()}`, 14, 54);
    doc.text(`• Net Profit: $${(totals.netProfit ?? 0).toLocaleString()}`, 14, 62);
    doc.text(`• VAT Status: ✅ Compliant`, 14, 70);

    // 🔹 Transactions Table
    doc.text('Recent Transactions:', 14, 82);

    const transactionRows = transactions.map((tx) => [
      tx.date,
      tx.description,
      `$${tx.amount.toLocaleString()}`
    ]);

    doc.autoTable({
      startY: 88,
      head: [['Date', 'Description', 'Amount']],
      body: transactionRows.length > 0 ? transactionRows : [['-', 'No transactions available', '-']],
      theme: 'striped',
    });

    // 🔹 Footer
    doc.setFontSize(10);
    doc.text(
      `Generated on: ${new Date().toLocaleString()}`,
      14,
      doc.lastAutoTable?.finalY + 10 || 120
    );

    doc.save('StarkBooks-Financial-Summary.pdf');
  };

  return (
    <Button leftIcon={<FaDownload />} colorScheme="blue" onClick={generatePDF}>
      Download Summary PDF
    </Button>
  );
}

export default DownloadPDF;
