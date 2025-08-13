import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Flex,
  Heading,
  Text,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Button,
  Stack,
  Link,
  Image,
} from '@chakra-ui/react';
import loginImage from '../assets/login-image.png'; // ⬅️ Update path if needed

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // TODO: Replace with real validation/login logic
    if (email && password) {
      navigate('/dashboard');
    }
  };

  return (
    <Flex minH="100vh" direction={{ base: 'column', md: 'row' }}>
      {/* Left Image Panel */}
      <Box flex="1" display={{ base: 'none', md: 'block' }} height="100vh">
        <Image src={loginImage} alt="Login background" objectFit="cover" width="100%" height="100%" />
      </Box>

      {/* Right Login Panel */}
      <Flex flex="1" align="center" justify="center" bg="white" p={8}>
        <Box width="100%" maxW="md">
          <Heading mb={4} fontSize="2xl" textAlign="center">
            Welcome Back
          </Heading>
          <Text fontSize="sm" textAlign="center" mb={6}>
            Don’t have an account? <Link href="/signup" color="purple.500">Sign up</Link>
          </Text>

          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>

            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormControl>

            <Stack direction="row" justify="space-between" align="center">
              <Checkbox>Remember me</Checkbox>
              <Link color="purple.500">Forgot password?</Link>
            </Stack>

            <Button colorScheme="purple" size="md" onClick={handleLogin}>
              Sign in
            </Button>
          </Stack>
        </Box>
      </Flex>
    </Flex>
  );
}
