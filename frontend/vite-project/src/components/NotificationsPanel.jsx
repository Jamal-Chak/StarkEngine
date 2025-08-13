import React from 'react';
import {
  Box,
  Heading,
  VStack,
  Text,
  Icon,
  useColorModeValue,
} from '@chakra-ui/react';
import { BellIcon } from '@chakra-ui/icons';

const notifications = [
  { id: 1, message: 'New invoice generated for Client X' },
  { id: 2, message: 'Payment received: $3,200' },
  { id: 3, message: 'Reminder: Tax return due next week' },
];

function NotificationsPanel() {
  const cardBg = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.700');

  return (
    <Box
      bg={cardBg}
      p={6}
      borderRadius="md"
      border="1px solid"
      borderColor={borderColor}
      mb={10}
    >
      <Heading size="md" mb={4}>
        🔔 Notifications
      </Heading>
      <VStack align="start" spacing={3}>
        {notifications.map((note) => (
          <Box key={note.id} display="flex" alignItems="center">
            <Icon as={BellIcon} color="teal.400" mr={2} />
            <Text>{note.message}</Text>
          </Box>
        ))}
      </VStack>
    </Box>
  );
}

export default NotificationsPanel;
