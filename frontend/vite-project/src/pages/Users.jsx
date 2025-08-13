// src/pages/Users.jsx
import React from 'react';
import {
  Box, Heading, Text, Table, Thead, Tbody, Tr, Th, Td, Button,
} from '@chakra-ui/react';

const dummyUsers = [
  { name: 'John Doe', role: 'Admin', email: 'john@example.com' },
  { name: 'Jane Smith', role: 'User', email: 'jane@example.com' },
];

const Users = () => {
  return (
    <Box p={6}>
      <Heading mb={4}>👥 Users</Heading>
      <Text mb={4}>Manage users within your organization. Invite, remove, or update permissions.</Text>

      <Table variant="striped" size="md">
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Email</Th>
            <Th>Role</Th>
            <Th>Action</Th>
          </Tr>
        </Thead>
        <Tbody>
          {dummyUsers.map((user, idx) => (
            <Tr key={idx}>
              <Td>{user.name}</Td>
              <Td>{user.email}</Td>
              <Td>{user.role}</Td>
              <Td><Button size="sm" colorScheme="blue">Edit</Button></Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default Users;
