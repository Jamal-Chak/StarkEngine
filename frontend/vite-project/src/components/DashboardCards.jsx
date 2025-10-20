import React from 'react';
import { SimpleGrid, Box, Text, Stat, StatLabel, StatNumber, HStack, Icon } from '@chakra-ui/react';
import { FiDollarSign, FiTrendingUp, FiCreditCard } from 'react-icons/fi';

const DashboardCards = () => {
  return (
    <SimpleGrid columns={[1, 2, 3]} spacing={6} mb={8}>
      <StatCard label="Receivables" value="$12,450" icon={FiDollarSign} />
      <StatCard label="Payables" value="$5,230" icon={FiCreditCard} />
      <StatCard label="Cash in Hand" value="$7,890" icon={FiTrendingUp} />
    </SimpleGrid>
  );
};

const StatCard = ({ label, value, icon: IconComp }) => (
  <Box p={6} bgGradient="linear(to-r, white, gray.50)" boxShadow="sm" borderRadius="md">
    <HStack justify="space-between">
      <Stat>
        <StatLabel color="gray.600">{label}</StatLabel>
        <StatNumber fontSize="2xl" fontWeight="semibold">{value}</StatNumber>
      </Stat>
      {IconComp && (
        <Box bg="brand.50" p={3} borderRadius="md">
          <Icon as={IconComp} boxSize={6} color="brand.600" />
        </Box>
      )}
    </HStack>
  </Box>
);

export default DashboardCards;
