// CustomerSalesReport.jsx
// ---------------------------
import React from 'react';
import { Box, Heading, Table, Thead, Tr, Th, Tbody, Td } from '@chakra-ui/react';

const customers = [
  { name: 'Acme Corp', revenue: 12000 },
  { name: 'Globex Inc.', revenue: 8000 },
  { name: 'Soylent Co.', revenue: 4500 },
];

const CustomerSalesReport = () => (
  <Box>
    <Heading size="md" mb={4}>👥 Customer Sales</Heading>
    <Table variant="striped" size="md">
      <Thead><Tr><Th>Customer</Th><Th isNumeric>Revenue</Th></Tr></Thead>
      <Tbody>
        {customers.map((cust, idx) => (
          <Tr key={idx}>
            <Td>{cust.name}</Td>
            <Td isNumeric>${cust.revenue.toLocaleString()}</Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  </Box>
);

export default CustomerSalesReport;
