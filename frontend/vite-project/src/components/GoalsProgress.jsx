// src/components/GoalsProgress.jsx
import React from 'react';
import {
  Box,
  Heading,
  Progress,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';

function GoalsProgress() {
  const cardBg = useColorModeValue('white', 'gray.800');
  const cardShadow = useColorModeValue('md', 'dark-lg');

  const goals = [
    { label: 'Monthly Revenue Target', value: 75 },
    { label: 'Expense Reduction Goal', value: 40 },
    { label: 'Client Acquisition Goal', value: 60 },
  ];

  return (
    <Box
      bg={cardBg}
      p={6}
      shadow={cardShadow}
      borderRadius="md"
      mb={10}
    >
      <Heading size="md" mb={4}>🎯 Goals & Targets Progress</Heading>
      <Stack spacing={5}>
        {goals.map((goal, index) => (
          <Box key={index}>
            <Text mb={1}>{goal.label}</Text>
            <Progress colorScheme="teal" value={goal.value} borderRadius="md" />
          </Box>
        ))}
      </Stack>
    </Box>
  );
}

export default GoalsProgress;
