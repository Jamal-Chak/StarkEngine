// src/components/layout/TopNav.jsx
import React from "react";
import { Box, Flex, Spacer, Link as ChakraLink, Button, HStack, Text } from "@chakra-ui/react";
import { Link, useLocation } from "react-router-dom";

function TopNav() {
  const location = useLocation();

  const navLinks = [
    { label: "Inventory", to: "/inventory" },
    { label: "Mail", to: "/mail" },
    { label: "Reports", to: "/reports" },
  ];

  return (
    <Box bg="white" px={{ base: 4, md: 8 }} py={3} boxShadow="sm">
      <Flex align="center">
        <HStack spacing={4}>
          <Box bg="brand.500" color="white" px={3} py={1} borderRadius="md" fontWeight="bold">
            TwineCapital
          </Box>
          <Text color="gray.500" fontSize="sm">Accounting · AI Invoices</Text>
        </HStack>

        <Spacer />
        <HStack spacing={4} display={{ base: 'none', md: 'flex' }}>
          {navLinks.map((link) => (
            <ChakraLink
              key={link.to}
              as={Link}
              to={link.to}
              fontWeight={location.pathname === link.to ? 'bold' : 'normal'}
              color={location.pathname === link.to ? 'brand.600' : 'gray.600'}
              _hover={{ textDecoration: 'none', color: 'brand.500' }}
            >
              {link.label}
            </ChakraLink>
          ))}
          <Button variant="solidPrimary" size="sm">
            Logout
          </Button>
        </HStack>
      </Flex>
    </Box>
  );
}

export default TopNav;
