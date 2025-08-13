import React from 'react';
import { Box, Heading, Text, Grid, GridItem, VStack, Divider } from '@chakra-ui/react';

function Solutions() {
  return (
    <Box p={8}>
      <Heading size="lg" mb={4}>Solutions</Heading>
      <Grid templateColumns={{ base: '1fr', md: '1fr 1fr 1fr' }} gap={8}>
        {/* By Size */}
        <GridItem>
          <Heading size="md" mb={3}>By Size</Heading>
          <VStack align="start" spacing={3}>
            <Box>
              <Text fontWeight="bold">Start Up</Text>
              <Text fontSize="sm">Smart and agile accounting solution to support success</Text>
            </Box>
            <Box>
              <Text fontWeight="bold">Small Business</Text>
              <Text fontSize="sm">Stay on top of cash flow and tax compliance</Text>
            </Box>
            <Box>
              <Text fontWeight="bold">Accountant</Text>
              <Text fontSize="sm">Benefit from helping businesses manage their finances</Text>
            </Box>
            <Box>
              <Text fontWeight="bold">Non Profit</Text>
              <Text fontSize="sm">Categorically manage funds and donations</Text>
            </Box>
          </VStack>
        </GridItem>

        {/* By Device */}
        <GridItem>
          <Heading size="md" mb={3}>By Device</Heading>
          <VStack align="start" spacing={3}>
            <Box>
              <Text fontWeight="bold">Mobile</Text>
              <Text fontSize="sm">Take your accounting wherever you go</Text>
            </Box>
            <Box>
              <Text fontWeight="bold">Windows</Text>
              <Text fontSize="sm">Experience cloud accounting from your familiar desktop device</Text>
            </Box>
          </VStack>
        </GridItem>

        {/* Featured Solution / Promotion */}
        <GridItem>
          <Heading size="md" mb={3}>Featured Solution</Heading>
          <Box
            p={4}
            borderRadius="md"
            border="1px solid #e2e8f0"
            bg="gray.50"
          >
            <Text fontWeight="bold">Introducing StarkPractice</Text>
            <Text fontSize="sm" mb={2}>
              The ultimate practice management software for modern accounting and bookkeeping firms.
            </Text>
            <Text color="blue.500" fontWeight="semibold" cursor="pointer">Learn More →</Text>
          </Box>
        </GridItem>
      </Grid>
    </Box>
  );
}

export default Solutions;
