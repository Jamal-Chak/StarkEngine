// src/pages/Partners.jsx
import React from 'react';
import {
  Box,
  Heading,
  Text,
  SimpleGrid,
  Image,
  Button,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react';

function Partners() {
  const bg = useColorModeValue('white', 'gray.800');

  return (
    <Box p={6}>
      <Stack spacing={6} align="center">
        <Heading size="xl">Partner With Us</Heading>
        <Text fontSize="lg" textAlign="center" maxW="lg">
          Join the StarkBooks partner network. Together, we empower businesses to manage their finances smarter.
        </Text>
        <Button colorScheme="blue" size="lg">
          Become a Partner
        </Button>
      </Stack>

      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} mt={10}>
        <Box bg={bg} p={6} borderRadius="md" shadow="md">
          <Heading size="md" mb={4}>Why Partner with StarkBooks?</Heading>
          <Text mb={2}>🔧 Expert support and training for your clients.</Text>
          <Text mb={2}>📈 Co-marketing opportunities to grow together.</Text>
          <Text>🤝 Exclusive partner incentives and rewards.</Text>
        </Box>

        <Box bg={bg} p={6} borderRadius="md" shadow="md">
          <Heading size="md" mb={4}>Who Should Partner?</Heading>
          <Text mb={2}>• Accounting firms and bookkeepers</Text>
          <Text mb={2}>• Financial advisors</Text>
          <Text mb={2}>• Software integrators</Text>
          <Text>• Tech consultants bringing value to SMBs</Text>
        </Box>
      </SimpleGrid>

      <Box mt={12} textAlign="center">
        <Image
          src="https://via.placeholder.com/600x300?text=Partner+Collab+Image"
          alt="Partner with Us"
          borderRadius="md"
          mx="auto"
        />
        <Text mt={4} color="gray.500">
          Join countless other professionals in delivering next‑generation accounting powered by StarkBooks.
        </Text>
      </Box>
    </Box>
  );
}

export default Partners;
