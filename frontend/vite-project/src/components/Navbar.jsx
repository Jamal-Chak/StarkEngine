// src/components/Navbar.jsx
import React from 'react';
import {
  Box,
  Flex,
  IconButton,
  Heading,
  HStack,
  Spacer,
  Link as ChakraLink,
  useColorModeValue,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { Link as RouterLink } from 'react-router-dom';

function Navbar({ onToggleSidebar }) {
  const bg = useColorModeValue('white', 'gray.900');
  const borderColor = useColorModeValue('gray.200', 'gray.700');
  const linkColor = useColorModeValue('gray.700', 'gray.100');
  const hoverColor = useColorModeValue('blue.500', 'blue.300');

  const navLinks = [
    { name: 'Dashboard', to: '/dashboard' },
    { name: 'Invoices', to: '/invoices' },
    { name: 'Customers', to: '/customers' },
    { name: 'Settings', to: '/settings' },
    { name: 'Solutions', to: '/solutions' },
    { name: 'Features', to: '/features' },
    { name: 'Partner With Us', to: '/partners' },
    { name: 'Resources', to: '/resources' },
    { name: 'Pricing', to: '/pricing' },
  ];

  return (
    <Box
      bg="transparent"
      px={{ base: 4, md: 8 }}
      py={3}
      borderBottom="0"
      shadow="none"
      position="sticky"
      top="0"
      zIndex="1000"
    >
      <Flex align="center">
        {/* Left: Sidebar toggle */}
        <IconButton
          aria-label="Toggle Sidebar"
          icon={<HamburgerIcon />}
          onClick={onToggleSidebar}
          variant="ghost"
          size="md"
          mr={2}
          display={{ base: 'flex', md: 'none' }}
        />

        {/* Logo */}
        <Heading size="md" color="brand.500" mr={6}>
          📘 TwineBooks
        </Heading>

        {/* Center Nav */}
        <HStack as="nav" spacing={5} display={{ base: 'none', md: 'flex' }}>
          {navLinks.map((link) => (
            <ChakraLink
              as={RouterLink}
              to={link.to}
              key={link.name}
              fontWeight="medium"
              color={linkColor}
              _hover={{ color: hoverColor }}
            >
              {link.name}
            </ChakraLink>
          ))}
        </HStack>

        <Spacer />

        {/* Right: future auth buttons / profile */}
      </Flex>
    </Box>
  );
}

export default Navbar;