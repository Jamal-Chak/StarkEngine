// src/components/Sidebar.jsx
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  Box,
  VStack,
  IconButton,
  Text,
  HStack,
  Collapse,
  useColorModeValue,
} from '@chakra-ui/react';
import {
  FaHome,
  FaFileInvoice,
  FaUsers,
  FaCog,
  FaBars,
} from 'react-icons/fa';

const navItems = [
  { label: 'Dashboard', icon: FaHome, to: '/' },
  { label: 'Invoices', icon: FaFileInvoice, to: '/invoices' },
  { label: 'Customers', icon: FaUsers, to: '/customers' },
  { label: 'Settings', icon: FaCog, to: '/settings' },
];

function Sidebar({ isOpen }) {
  const [collapsed, setCollapsed] = useState(false);
  const bg = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.700');

  if (!isOpen) return null;

  return (
    <Box
      as="aside"
      w={collapsed ? '60px' : '200px'}
      minH="100vh"
      bg={bg}
      borderRight="1px solid"
      borderColor={borderColor}
      transition="width 0.2s ease"
      boxShadow="sm"
    >
      <IconButton
        icon={<FaBars />}
        aria-label="Toggle sidebar"
        size="sm"
        m="4"
        onClick={() => setCollapsed(!collapsed)}
        variant="ghost"
      />

      <VStack spacing={4} align="stretch" px={2}>
        {navItems.map(({ label, icon: Icon, to }) => (
          <NavLink
            key={label}
            to={to}
            style={({ isActive }) => ({
              backgroundColor: isActive ? '#EDF2F7' : 'transparent',
              borderRadius: '6px',
              padding: '8px',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              textDecoration: 'none',
              color: 'inherit',
            })}
          >
            <HStack spacing={3}>
              <Icon />
              <Collapse in={!collapsed} animateOpacity>
                <Text>{label}</Text>
              </Collapse>
            </HStack>
          </NavLink>
        ))}
      </VStack>
    </Box>
  );
}

export default Sidebar;
