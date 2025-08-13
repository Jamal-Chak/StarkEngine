import React from 'react';
import {
  Box, Table, Thead, Tbody, Tr, Th, Td, Heading, useColorModeValue, Badge
} from '@chakra-ui/react';

const transactions = [
  { id: 1, description: "Invoice #1001", date: "2025-06-01", amount: "$1,200", status: "Paid" },
  { id: 2, description: "Invoice #1002", date: "2025-06-05", amount: "$750", status: "Pending" },
  { id: 3, description: "Payment from Client X", date: "2025-06-08", amount: "$2,000", status: "Received" },
  { id: 4, description: "Invoice #1003", date: "2025-06-10", amount: "$1,500", status: "Overdue" },
];

const getStatusColor = (status) => {
  switch (status) {
    case "Paid": return "green";
    case "Pending": return "orange";
    case "Received": return "blue";
    case "Overdue": return "red";
    default: return "gray";
  }
};

function RecentTransactions() {
  const bg = useColorModeValue('white', 'gray.800');
  const border = useColorModeValue('gray.200', 'gray.700');

  return (
    <Box bg={bg} p={6} borderRadius="md" shadow="md" mt={10} border="1px solid" borderColor={border}>
      <Heading size="md" mb={4}>🧾 Recent Transactions</Heading>
      <Table variant="simple" size="md">
        <Thead>
          <Tr>
            <Th>Date</Th>
            <Th>Description</Th>
            <Th>Amount</Th>
            <Th>Status</Th>
          </Tr>
        </Thead>
        <Tbody>
          {transactions.map(tx => (
            <Tr key={tx.id}>
              <Td>{tx.date}</Td>
              <Td>{tx.description}</Td>
              <Td>{tx.amount}</Td>
              <Td>
                <Badge colorScheme={getStatusColor(tx.status)}>{tx.status}</Badge>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
}

export default RecentTransactions;
