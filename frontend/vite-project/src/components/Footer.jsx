import React from 'react';
import { Box, Text, Flex } from '@chakra-ui/react';

function Footer() {
  return (
    <Box as="footer" py={4} px={6} bg="gray.50" borderTop="1px solid" borderColor="gray.200">
      <Flex justify="center" align="center">
        <Text fontSize="sm" color="gray.600">
          © {new Date().getFullYear()} StarkEngine. All rights reserved.
        </Text>
      </Flex>
    </Box>
  );
}

export default Footer;
