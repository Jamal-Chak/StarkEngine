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
  Tooltip,
} from '@chakra-ui/react';
import {
  FaHome,
  FaFileInvoice,
  FaUsers,
  FaCog,
  FaBars,
  FaPlusCircle,
  FaFolderOpen,
  FaChartBar,
  FaBuilding,
  FaLifeRing,
} from 'react-icons/fa';

const navItems = [
  { label: 'Dashboard', icon: FaHome, to: '/' },
  { label: 'Invoices', icon: FaFileInvoice, to: '/invoices' },
  { label: 'Create Invoice', icon: FaPlusCircle, to: '/create-invoice' },
  { label: 'Documents', icon: FaFolderOpen, to: '/documents' },
  { label: 'Customers', icon: FaUsers, to: '/customers' },
  { label: 'Users', icon: FaUsers, to: '/users' },
  { label: 'Business', icon: FaBuilding, to: '/business' },
  { label: 'Support', icon: FaLifeRing, to: '/support' },
  { label: 'Reports', icon: FaChartBar, to: '/reports' },
  
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
      h="100vh"
      bg={bg}
      borderRight="1px solid"
      borderColor={borderColor}
      transition="width 0.2s ease"
      boxShadow="sm"
      display="flex"
      flexDirection="column"
    >
      {/* Header / Collapse button */}
      <Box p={2}>
        <IconButton
          icon={<FaBars />}
          aria-label="Toggle sidebar"
          size="sm"
          onClick={() => setCollapsed(!collapsed)}
          variant="ghost"
        />
      </Box>

      {/* Scrollable Nav */}
      <Box
        flex="1"
        overflowY="auto"
        px={2}
        pb={4}
        sx={{
          '&::-webkit-scrollbar': {
            width: '6px',
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: 'gray.400',
            borderRadius: '4px',
          },
        }}
      >
        <VStack spacing={2} align="stretch">
          {navItems.map((item) => (
            <Tooltip
              key={item.label}
              label={collapsed ? item.label : ''}
              placement="right"
              hasArrow
              openDelay={400}
            >
              <NavLink
                to={item.to}
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
                  <item.icon />
                  <Collapse in={!collapsed} animateOpacity style={{ width: '100%' }}>
                    <Text isTruncated>{item.label}</Text>
                  </Collapse>
                </HStack>
              </NavLink>
            </Tooltip>
          ))}
        </VStack>
      </Box>
    </Box>
  );
}

export default Sidebar;
