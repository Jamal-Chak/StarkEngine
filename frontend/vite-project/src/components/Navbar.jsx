// src/components/Navbar.jsx
import React from 'react';
import {
  Box,
  Flex,
  IconButton,
  Heading,
  HStack,
  Link as ChakraLink,
  useColorModeValue,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { Link as RouterLink } from 'react-router-dom';

function Navbar({ onToggleSidebar }) {
  const bg = useColorModeValue('white', 'gray.900');
  const borderColor = useColorModeValue('gray.200', 'gray.700');

  return (
    <Box
      bg={bg}
      px={4}
      py={3}
      borderBottom="1px"
      borderColor={borderColor}
      shadow="sm"
      position="sticky"
      top="0"
      zIndex="1000"
    >
      <Flex justify="space-between" align="center">
        {/* Hamburger Icon */}
        <IconButton
          aria-label="Toggle Sidebar"
          icon={<HamburgerIcon />}
          onClick={onToggleSidebar}
          variant="ghost"
          size="md"
          mr={2}
        />

        {/* Brand Title */}
        <Heading size="md" color="blue.500">
          📘 StarkBooks
        </Heading>

        {/* Desktop Navigation */}
        <HStack as="nav" spacing={6} display={{ base: 'none', md: 'flex' }}>
          <ChakraLink as={RouterLink} to="/" fontWeight="medium">
            Dashboard
          </ChakraLink>
          <ChakraLink as={RouterLink} to="/invoices" fontWeight="medium">
            Invoices
          </ChakraLink>
          <ChakraLink as={RouterLink} to="/customers" fontWeight="medium">
            Customers
          </ChakraLink>
          <ChakraLink as={RouterLink} to="/settings" fontWeight="medium">
            Settings
          </ChakraLink>
        </HStack>
      </Flex>
    </Box>
  );
}

export default Navbar;
