// src/components/CashFlowForecast.jsx
import React from 'react';
import {
  Box,
  Heading,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const data = [
  { month: 'Jan', inflow: 5000, outflow: 3000 },
  { month: 'Feb', inflow: 7000, outflow: 3500 },
  { month: 'Mar', inflow: 6000, outflow: 4000 },
  { month: 'Apr', inflow: 8000, outflow: 4200 },
  { month: 'May', inflow: 7500, outflow: 3800 },
  { month: 'Jun', inflow: 9000, outflow: 4600 },
];

function CashFlowForecast() {
  const cardBg = useColorModeValue('white', 'gray.800');
  const cardShadow = useColorModeValue('md', 'dark-lg');

  return (
    <Box
      bg={cardBg}
      p={6}
      borderRadius="md"
      shadow={cardShadow}
      mb={10}
    >
      <Heading size="md" mb={2}>💸 Cash Flow Forecast</Heading>
      <Text mb={4} color="gray.500">
        A preview of expected cash inflows and outflows over the coming months.
      </Text>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <Line type="monotone" dataKey="inflow" stroke="#38A169" strokeWidth={2} />
          <Line type="monotone" dataKey="outflow" stroke="#E53E3E" strokeWidth={2} />
          <CartesianGrid stroke="#ccc" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
        </LineChart>
      </ResponsiveContainer>
    </Box>
  );
}

export default CashFlowForecast;
