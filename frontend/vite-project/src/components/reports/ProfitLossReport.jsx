import React from 'react';
import { Box, Heading, Table, Thead, Tbody, Tr, Th, Td, Text } from '@chakra-ui/react';

const ProfitLossReport = () => {
  const revenue = 24000;
  const expenses = 16500;
  const netProfit = revenue - expenses;

  return (
    <Box>
      <Heading size="md" mb={4}>📈 Profit & Loss</Heading>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Category</Th>
            <Th isNumeric>Amount</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>Revenue</Td>
            <Td isNumeric>${revenue.toLocaleString()}</Td>
          </Tr>
          <Tr>
            <Td>Expenses</Td>
            <Td isNumeric>${expenses.toLocaleString()}</Td>
          </Tr>
          <Tr fontWeight="bold">
            <Td>Net Profit</Td>
            <Td isNumeric color={netProfit >= 0 ? 'green.500' : 'red.500'}>
              ${netProfit.toLocaleString()}
            </Td>
          </Tr>
        </Tbody>
      </Table>
    </Box>
  );
};

export default ProfitLossReport;
