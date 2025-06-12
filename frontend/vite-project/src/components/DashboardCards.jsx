import React from 'react';
import { SimpleGrid, Box, Text, Stat, StatLabel, StatNumber } from '@chakra-ui/react';

const DashboardCards = () => {
  return (
    <SimpleGrid columns={[1, 2, 3]} spacing={6} mb={8}>
      <StatCard label="Receivables" value="$12,450" />
      <StatCard label="Payables" value="$5,230" />
      <StatCard label="Cash in Hand" value="$7,890" />
    </SimpleGrid>
  );
};

const StatCard = ({ label, value }) => (
  <Box p={6} bg="white" boxShadow="md" borderRadius="md">
    <Stat>
      <StatLabel>{label}</StatLabel>
      <StatNumber>{value}</StatNumber>
    </Stat>
  </Box>
);

export default DashboardCards;
