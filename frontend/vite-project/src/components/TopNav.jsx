// src/components/layout/TopNav.jsx
import React from "react";
import { Box, Flex, Spacer, Link as ChakraLink, Button } from "@chakra-ui/react";
import { Link, useLocation } from "react-router-dom";

function TopNav() {
  const location = useLocation();

  const navLinks = [
    { /*label: "Dashboard", to: "/dashboard" */},
    { label: "CRM", to: "/crm" },
    { label: "Inventory", to: "/inventory" },
    { label: "Mail", to: "/mail" },
    { label: "Reports", to: "/reports" },
  ];

  return (
    <Box bg="gray.800" px={4} py={2} color="white" boxShadow="md">
      <Flex align="center">
        <Box fontWeight="bold" fontSize="lg">
          StarkEngine
        </Box>
        <Spacer />
        <Flex gap={4}>
          {navLinks.map((link) => (
            <ChakraLink
              key={link.to}
              as={Link}
              to={link.to}
              fontWeight={location.pathname === link.to ? "bold" : "normal"}
              color={location.pathname === link.to ? "blue.300" : "gray.200"}
              _hover={{ textDecoration: "underline" }}
            >
              {link.label}
            </ChakraLink>
          ))}
          <Button colorScheme="red" size="sm">
            Logout
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
}

export default TopNav;
