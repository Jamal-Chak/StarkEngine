import React from 'react';
import { Box, Heading, VStack, Text, Stat, StatLabel, StatNumber, useColorModeValue } from '@chakra-ui/react';

function AccountSummary() {
  const cardBg = useColorModeValue('white', 'gray.800');
  const cardShadow = useColorModeValue('md', 'dark-lg');

  const summaryData = [
    { label: 'Bank Balance', value: '$25,400' },
    { label: 'Upcoming Bills', value: '$1,200' },
    { label: 'Overdue Invoices', value: '$3,100' },
    { label: 'Available Credit', value: '$10,000' },
  ];

  return (
    <Box
      bg={cardBg}
      shadow={cardShadow}
      borderRadius="lg"
      p={5}
      border="1px solid"
      borderColor={useColorModeValue('gray.200', 'gray.700')}
    >
      <Heading size="md" mb={4}>🏦 Account Summary</Heading>
      <VStack spacing={4} align="stretch">
        {summaryData.map((item, index) => (
          <Stat key={index}>
            <StatLabel>{item.label}</StatLabel>
            <StatNumber>{item.value}</StatNumber>
          </Stat>
        ))}
      </VStack>
    </Box>
  );
}

export default AccountSummary;
