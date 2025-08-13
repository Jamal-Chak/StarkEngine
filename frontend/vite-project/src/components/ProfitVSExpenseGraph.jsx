import React from 'react';
import {
  Box,
  Heading,
  useColorModeValue,
} from '@chakra-ui/react';
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

// Dummy data
const data = [
  { month: 'Jan', profit: 4000, expense: 2400 },
  { month: 'Feb', profit: 3000, expense: 1398 },
  { month: 'Mar', profit: 5000, expense: 2800 },
  { month: 'Apr', profit: 4780, expense: 2908 },
  { month: 'May', profit: 5890, expense: 4800 },
  { month: 'Jun', profit: 4390, expense: 3800 },
  { month: 'Jul', profit: 4490, expense: 4300 },
];

function ProfitVsExpenseGraph() {
  const cardBg = useColorModeValue('white', 'gray.800');
  const cardShadow = useColorModeValue('md', 'dark-lg');

  return (
    <Box bg={cardBg} shadow={cardShadow} borderRadius="md" p={6} mb={10}>
      <Heading size="md" mb={4}>📈 Profit vs Expense Comparison</Heading>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="profit" stroke="#38A169" strokeWidth={2} />
          <Line type="monotone" dataKey="expense" stroke="#E53E3E" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </Box>
  );
}

export default ProfitVsExpenseGraph;
