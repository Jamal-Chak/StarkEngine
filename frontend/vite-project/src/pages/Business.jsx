// src/pages/Business.jsx
import React from 'react';
import {
  Box, Heading, Text, FormControl, FormLabel, Input, Button, VStack,
} from '@chakra-ui/react';

const Business = () => {
  return (
    <Box p={6}>
      <Heading mb={4}>🏢 Business Registration</Heading>
      <Text mb={4}>Register your organization to get started with StarkEngine. You can invite team members after setup.</Text>

      <VStack spacing={4} align="stretch" maxW="400px">
        <FormControl>
          <FormLabel>Business Name</FormLabel>
          <Input placeholder="e.g. Stark Enterprises" />
        </FormControl>
        <FormControl>
          <FormLabel>Industry</FormLabel>
          <Input placeholder="e.g. Technology, Accounting" />
        </FormControl>
        <FormControl>
          <FormLabel>Business Email</FormLabel>
          <Input type="email" placeholder="contact@yourcompany.com" />
        </FormControl>
        <Button colorScheme="teal">Register Business</Button>
      </VStack>
    </Box>
  );
};

export default Business;
