import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Box, Heading, useColorModeValue } from '@chakra-ui/react';

const data = [
  { name: 'Marketing', value: 400 },
  { name: 'Salaries', value: 1200 },
  { name: 'Operations', value: 800 },
  { name: 'R&D', value: 500 },
];

const COLORS = ['#3182CE', '#2B6CB0', '#63B3ED', '#4299E1'];

function ExpenseChart() {
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
      <Heading size="md" mb={4}>💸 Expense Breakdown</Heading>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={100}
            dataKey="value"
            label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </Box>
  );
}

export default ExpenseChart;
