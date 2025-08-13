// src/pages/Support.jsx
import React from 'react';
import {
  Box, Heading, Text, VStack, FormControl, FormLabel, Textarea, Input, Button,
} from '@chakra-ui/react';

const Support = () => {
  return (
    <Box p={6}>
      <Heading mb={4}>🆘 Support</Heading>
      <Text mb={6}>
        Need help? Fill out the form below and our support team will get back to you.
      </Text>

      <VStack spacing={4} maxW="500px" align="stretch">
        <FormControl>
          <FormLabel>Name</FormLabel>
          <Input placeholder="Your name" />
        </FormControl>

        <FormControl>
          <FormLabel>Email</FormLabel>
          <Input type="email" placeholder="your@email.com" />
        </FormControl>

        <FormControl>
          <FormLabel>Message</FormLabel>
          <Textarea placeholder="Describe your issue or question..." rows={5} />
        </FormControl>

        <Button colorScheme="blue">Submit Support Request</Button>
      </VStack>
    </Box>
  );
};

export default Support;
