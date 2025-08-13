// BalanceSheetReport.jsx
// ---------------------------
import React from 'react';
import { Box, Heading, Grid, Text } from '@chakra-ui/react';

const BalanceSheetReport = () => {
  const assets = 50000;
  const liabilities = 20000;
  const equity = assets - liabilities;

  return (
    <Box>
      <Heading size="md" mb={4}>📊 Balance Sheet</Heading>
      <Grid templateColumns="repeat(2, 1fr)" gap={6}>
        <Box><Text fontWeight="bold">Assets</Text><Text>${assets.toLocaleString()}</Text></Box>
        <Box><Text fontWeight="bold">Liabilities</Text><Text>${liabilities.toLocaleString()}</Text></Box>
        <Box><Text fontWeight="bold">Equity</Text><Text>${equity.toLocaleString()}</Text></Box>
      </Grid>
    </Box>
  );
};

export default BalanceSheetReport;
