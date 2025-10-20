// src/components/Footer.jsx
import React from 'react';
import { Box, Text, Flex, useColorModeValue } from '@chakra-ui/react';

function Footer() {
  const bg = useColorModeValue('gray.50', 'gray.900');
  const textColor = useColorModeValue('gray.600', 'gray.400');
  const borderColor = useColorModeValue('gray.200', 'gray.700');

  return (
    <Box
      as="footer"
      py={1} // 🔽 Reduced padding
      px={4}
      bg={bg}
      borderTop="1px solid"
      borderColor={borderColor}
    >
      <Flex justify="center" align="center">
        <Text fontSize="xs" color={textColor}> {/* 🔽 Smaller text */}
          © {new Date().getFullYear()} TwineCapital. All rights reserved.
        </Text>
      </Flex>
    </Box>
  );
}

export default Footer;
