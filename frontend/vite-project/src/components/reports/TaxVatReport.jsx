// TaxVatReport.jsx
// ---------------------------
import React from 'react';
import { Box, Heading, Grid, Text } from '@chakra-ui/react';

const TaxVatReport = () => {
  const vatCollected = 3200;
  const vatPaid = 2100;
  const vatDue = vatCollected - vatPaid;

  return (
    <Box>
      <Heading size="md" mb={4}>🧾 Tax / VAT Summary</Heading>
      <Grid templateColumns="repeat(3, 1fr)" gap={6}>
        <Box><Text fontWeight="bold">VAT Collected</Text><Text>${vatCollected.toLocaleString()}</Text></Box>
        <Box><Text fontWeight="bold">VAT Paid</Text><Text>${vatPaid.toLocaleString()}</Text></Box>
        <Box><Text fontWeight="bold">VAT Due</Text><Text>${vatDue.toLocaleString()}</Text></Box>
      </Grid>
    </Box>
  );
};

export default TaxVatReport;