// InvoiceAgingReport.jsx
// ---------------------------
import React from 'react';
import { Box, Heading, Table, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react';

const invoices = [
  { customer: 'Acme Corp', amount: 1500, daysOverdue: 30 },
  { customer: 'Globex Inc.', amount: 900, daysOverdue: 15 },
  { customer: 'Soylent Co.', amount: 500, daysOverdue: 5 },
];

const InvoiceAgingReport = () => (
  <Box>
    <Heading size="md" mb={4}>📅 Invoice Aging</Heading>
    <Table variant="simple">
      <Thead><Tr><Th>Customer</Th><Th isNumeric>Amount</Th><Th isNumeric>Days Overdue</Th></Tr></Thead>
      <Tbody>
        {invoices.map((inv, idx) => (
          <Tr key={idx}>
            <Td>{inv.customer}</Td>
            <Td isNumeric>${inv.amount.toLocaleString()}</Td>
            <Td isNumeric>{inv.daysOverdue}</Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  </Box>
);

export default InvoiceAgingReport;