import React from 'react';
import {
  Box,
  Heading,
  Text,
  SimpleGrid,
  Stack,
  Button,
  useColorModeValue,
} from '@chakra-ui/react';

const plans = [
  {
    name: 'Free',
    price: 'R0',
    freq: 'per organisation / month',
    features: [
      '1 User + 1 Accountant',
      '1,000 invoices/year',
      'Basic Expense Tracking',
      'Email Support',
    ],
  },
  {
    name: 'Standard',
    price: 'R249',
    freq: 'billed annually',
    features: [
      '3 Users',
      'Up to 5,000 Invoices',
      'Multi-currency Support',
      'Chat & Email Support',
    ],
  },
  {
    name: 'Professional',
    price: 'R449',
    freq: 'billed annually',
    features: [
      '5 Users',
      'Purchase Orders & Bills',
      'Custom Roles & Reports',
      'Inventory Tracking',
    ],
  },
  {
    name: 'Premium',
    price: 'R699',
    freq: 'billed annually',
    features: [
      '10 Users',
      'Advanced Inventory & Warehousing',
      'Budgeting & Cash Flow',
      'Priority Support',
    ],
  },
];

function PricingCard({ plan }) {
  const bg = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.600');

  return (
    <Box
      bg={bg}
      border="1px"
      borderColor={borderColor}
      p={6}
      rounded="md"
      shadow="md"
    >
      <Stack spacing={4} textAlign="center">
        <Heading size="md">{plan.name}</Heading>
        <Text fontSize="2xl" fontWeight="bold" color="blue.500">
          {plan.price}{' '}
          <Text as="span" fontSize="md" color="gray.500">
            {plan.freq}
          </Text>
        </Text>
        <Stack spacing={2} textAlign="left" fontSize="sm" color="gray.700">
          {plan.features.map((f, i) => (
            <Text key={i}>• {f}</Text>
          ))}
        </Stack>
        <Button colorScheme="blue" mt={4}>
          Select {plan.name}
        </Button>
      </Stack>
    </Box>
  );
}

export default function Pricing() {
  return (
    <Box p={{ base: 4, md: 10 }}>
      <Heading textAlign="center" mb={6}>
        Simple & Transparent Pricing
      </Heading>
      <Text textAlign="center" mb={10} color="gray.500">
        Choose the plan that fits your business size and goals. All prices are in South African Rands (ZAR).
      </Text>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={6}>
        {plans.map((plan) => (
          <PricingCard key={plan.name} plan={plan} />
        ))}
      </SimpleGrid>
      <Text mt={10} textAlign="center" fontSize="sm" color="gray.500">
        * VAT not included. Cancel or upgrade anytime. 30-day money-back guarantee.
      </Text>
    </Box>
  );
}
