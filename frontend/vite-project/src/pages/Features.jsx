// src/pages/Features.jsx
import React from 'react';
import {
  Box,
  Heading,
  Text,
  SimpleGrid,
  VStack,
  Divider,
  Image,
} from '@chakra-ui/react';

const Features = () => {
  return (
    <Box p={8}>
      <Heading mb={6}>Features</Heading>

      {/* Core Features */}
      <Heading size="md" mb={4}>Core Features</Heading>
      <SimpleGrid columns={[1, 2, 3]} spacing={4} mb={6}>
        {[
          'Quotes',
          'Invoicing',
          'Sales Orders',
          'Bills',
          'Purchase Orders',
          'Projects',
          'Banking',
          'Inventory',
          'Expenses',
          'Documents',
          'Reporting',
          'Online Payments',
        ].map((feature) => (
          <Box key={feature} p={4} bg="gray.50" borderRadius="md" boxShadow="sm">
            <Text>{feature}</Text>
          </Box>
        ))}
      </SimpleGrid>

      <Divider my={8} />

      {/* Compliance */}
      <Heading size="md" mb={4}>Compliance</Heading>
      <VStack align="start" spacing={2} mb={6}>
        <Text>📄 Document Management</Text>
        <Text>💼 VAT Accounting</Text>
      </VStack>

      <Divider my={8} />

      {/* Effortless Accounting */}
      <Heading size="md" mb={4}>Effortless Accounting</Heading>
      <VStack align="start" spacing={2} mb={6}>
        <Text>📱 Mobile Accounting</Text>
        <Text>☁️ Cloud Integration</Text>
        <Text>👥 Client & Team Portals</Text>
        <Text>🤖 Smart Automations</Text>
      </VStack>

      <Divider my={8} />

      {/* Accounting Across Devices */}
      <Heading size="md" mb={4}>Accounting Across Devices</Heading>
      <Text mb={3}>
        Do your accounting from our mobile or desktop app.
        Take control of your finances anywhere, anytime!
      </Text>
      <SimpleGrid columns={[2, null, 4]} spacing={4}>
        <Image src="https://upload.wikimedia.org/wikipedia/commons/f/f5/Microsoft_Store_logo_2022.svg" alt="Microsoft" height="40px" />
        <Image src="https://upload.wikimedia.org/wikipedia/commons/6/67/App_Store_%28iOS%29.svg" alt="Apple Store" height="40px" />
        <Image src="https://upload.wikimedia.org/wikipedia/commons/d/d0/Google_Play_2022_icon.svg" alt="Google Play" height="40px" />
      </SimpleGrid>
    </Box>
  );
};

export default Features;
