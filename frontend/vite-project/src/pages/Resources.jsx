// src/pages/Resources.jsx
import React from 'react';
import {
  Box,
  Heading,
  Text,
  SimpleGrid,
  Link,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react';

function ResourceCard({ title, description, link }) {
  const bg = useColorModeValue('gray.50', 'gray.700');
  const hoverBg = useColorModeValue('blue.50', 'blue.800');

  return (
    <Box
      p={5}
      bg={bg}
      borderRadius="md"
      boxShadow="sm"
      _hover={{ bg: hoverBg }}
      transition="all 0.2s"
    >
      <Heading size="md" mb={2}>
        <Link href={link} isExternal>
          {title}
        </Link>
      </Heading>
      <Text fontSize="sm" color="gray.600">
        {description}
      </Text>
    </Box>
  );
}

export default function Resources() {
  return (
    <Box px={{ base: 4, md: 10 }} py={10}>
      <Stack spacing={6} textAlign="center" mb={10}>
        <Heading size="xl">📚 StarkBooks Resources & Support</Heading>
        <Text fontSize="md" color="gray.600">
          Learn how to make the most out of StarkBooks with our guides, documentation, and support channels.
        </Text>
      </Stack>

      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
        <ResourceCard
          title="User Guides"
          description="Step-by-step articles to help you use StarkBooks features with ease."
          link="#"
        />
        <ResourceCard
          title="Video Tutorials"
          description="Watch helpful videos to get started and master key accounting workflows."
          link="#"
        />
        <ResourceCard
          title="Knowledge Base"
          description="Find answers to common questions and explore detailed help docs."
          link="#"
        />
        <ResourceCard
          title="Community Forum"
          description="Join discussions, ask questions, and share tips with other StarkBooks users."
          link="#"
        />
        <ResourceCard
          title="Live Chat Support"
          description="Reach out to our team for real-time help during business hours."
          link="#"
        />
        <ResourceCard
          title="Feature Request"
          description="Suggest improvements or new features you'd like to see in StarkBooks."
          link="#"
        />
      </SimpleGrid>
    </Box>
  );
}
