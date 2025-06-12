// src/pages/Dashboard.jsx
import React from 'react';
import {
  Box,
  Heading,
  Text,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  useColorModeValue,
  Divider,
} from '@chakra-ui/react';

function Dashboard() {
  const cardBg = useColorModeValue('white', 'gray.800');
  const cardShadow = useColorModeValue('md', 'dark-lg');

  return (
    <Box px={6} py={4}>
      <Heading size="lg" mb={2}>📊 Dashboard</Heading>
      <Text mb={6}>Welcome to StarkBooks! Here’s a summary of your financial activity.</Text>

      <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={6} mb={10}>
        <StatCard label="Total Receivables" value="$18,400" />
        <StatCard label="Total Payables" value="$7,200" />
        <StatCard label="Cash Flow" value="$11,200" />
        <StatCard label="Net Profit" value="$5,600" />
      </SimpleGrid>

      <Divider mb={8} />

      <Heading size="md" mb={4}>Graphs & Reports (Coming Soon)</Heading>
      <Box
        bg={cardBg}
        shadow={cardShadow}
        borderRadius="md"
        p={6}
        textAlign="center"
        color="gray.500"
      >
        📈 Chart placeholders will go here!
      </Box>
    </Box>
  );
}

function StatCard({ label, value }) {
  const cardBg = useColorModeValue('white', 'gray.800');
  const cardShadow = useColorModeValue('md', 'dark-lg');

  return (
    <Box
      bg={cardBg}
      p={4}
      borderRadius="md"
      shadow={cardShadow}
      border="1px solid"
      borderColor={useColorModeValue('gray.200', 'gray.700')}
    >
      <Stat>
        <StatLabel>{label}</StatLabel>
        <StatNumber>{value}</StatNumber>
      </Stat>
    </Box>
  );
}

export default Dashboard;
