import React, { useRef } from 'react';
import {
  Box,
  Heading,
  Button,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from '@chakra-ui/react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

import ProfitLossReport from '../components/reports/ProfitLossReport';
import BalanceSheetReport from '../components/reports/BalanceSheetReport';
import CashFlowReport from '../components/reports/CashFlowReport';
import ExpenseBreakdown from '../components/reports/ExpenseBreakdown';
import CustomerSalesReport from '../components/reports/CustomerSalesReport';
import TaxVatReport from '../components/reports/TaxVatReport';
import InvoiceAgingReport from '../components/reports/InvoiceAgingReport';

const Reports = () => {
  const reportRef = useRef(null);

  const handleDownloadPDF = async () => {
    const element = reportRef.current;
    if (!element) return;

    const canvas = await html2canvas(element);
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF();
    const imgProps = pdf.getImageProperties(imgData);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
    pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
    pdf.save('report.pdf');
  };

  return (
    <Box p={6}>
      <Heading mb={4}>📊 Reports</Heading>

      <Tabs variant="enclosed" isFitted>
        <TabList>
          <Tab>Profit & Loss</Tab>
          <Tab>Balance Sheet</Tab>
          <Tab>Cash Flow</Tab>
          <Tab>Expenses</Tab>
          <Tab>Customer Sales</Tab>
          <Tab>Tax/VAT</Tab>
          <Tab>Invoice Aging</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <Box ref={reportRef}>
              <ProfitLossReport />
            </Box>
          </TabPanel>
          <TabPanel>
            <Box ref={reportRef}>
              <BalanceSheetReport />
            </Box>
          </TabPanel>
          <TabPanel>
            <Box ref={reportRef}>
              <CashFlowReport />
            </Box>
          </TabPanel>
          <TabPanel>
            <Box ref={reportRef}>
              <ExpenseBreakdown />
            </Box>
          </TabPanel>
          <TabPanel>
            <Box ref={reportRef}>
              <CustomerSalesReport />
            </Box>
          </TabPanel>
          <TabPanel>
            <Box ref={reportRef}>
              <TaxVatReport />
            </Box>
          </TabPanel>
          <TabPanel>
            <Box ref={reportRef}>
              <InvoiceAgingReport />
            </Box>
          </TabPanel>
        </TabPanels>
      </Tabs>

      <Button mt={6} colorScheme="blue" onClick={handleDownloadPDF}>
        📄 Download Current Report as PDF
      </Button>
    </Box>
  );
};

export default Reports;

