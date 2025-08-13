// src/components/reports/ExpenseBreakdown.jsx
import React from 'react';
import { Box, Heading } from '@chakra-ui/react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Rent', value: 1000 },
  { name: 'Utilities', value: 500 },
  { name: 'Marketing', value: 700 },
  { name: 'Salaries', value: 2500 },
];

const COLORS = ['#3182CE', '#63B3ED', '#90CDF4', '#BEE3F8'];

const ExpenseBreakdown = () => (
  <Box>
    <Heading size="md" mb={4}>📉 Expense Breakdown</Heading>
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          
          outerRadius={100}
          label
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  </Box>
);

export default ExpenseBreakdown;
