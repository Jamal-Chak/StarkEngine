// CashFlowReport.jsx
// ---------------------------
import React from 'react';
import { Box, Heading } from '@chakra-ui/react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { month: 'Jan', cashFlow: 1500 },
  { month: 'Feb', cashFlow: 3000 },
  { month: 'Mar', cashFlow: 2000 },
  { month: 'Apr', cashFlow: 4500 },
];

const CashFlowReport = () => (
  <Box>
    <Heading size="md" mb={4}>💵 Cash Flow</Heading>
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="cashFlow" stroke="#3182CE" strokeWidth={2} />
      </LineChart>
    </ResponsiveContainer>
  </Box>
);

export default CashFlowReport;