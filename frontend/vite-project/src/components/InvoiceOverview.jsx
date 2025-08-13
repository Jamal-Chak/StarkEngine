// src/components/InvoiceOverview.jsx
import React from 'react';
import {
  Box,
  Stat,
  StatLabel,
  StatNumber,
  useColorModeValue,
  SimpleGrid,
} from '@chakra-ui/react';

const invoiceData = [
  { label: 'Unpaid Invoices', value: 14, color: 'orange.400' },
  { label: 'Paid Invoices', value: 32, color: 'green.400' },
  { label: 'Overdue Invoices', value: 5, color: 'red.400' },
  { label: 'Total Invoices', value: 51, color: 'blue.400' },
];

function InvoiceOverview() {
  const cardBg = useColorModeValue('white', 'gray.800');
  const cardShadow = useColorModeValue('md', 'dark-lg');
  const borderColor = useColorModeValue('gray.200', 'gray.700');

  return (
    <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={6} mb={10}>
      {invoiceData.map((item, idx) => (
        <Box
          key={idx}
          bg={cardBg}
          p={4}
          borderRadius="md"
          shadow={cardShadow}
          border="1px solid"
          borderColor={borderColor}
        >
          <Stat>
            <StatLabel color={item.color}>{item.label}</StatLabel>
            <StatNumber>{item.value}</StatNumber>
          </Stat>
        </Box>
      ))}
    </SimpleGrid>
  );
}

export default InvoiceOverview;
