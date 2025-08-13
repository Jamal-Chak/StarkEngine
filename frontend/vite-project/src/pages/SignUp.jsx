import React, { useState } from 'react';
import {
  Box,
  Heading,
  Text,
  Stack,
  FormControl,
  FormLabel,
  Input,
  Button,
  Checkbox,
  useToast,
  Flex,
  Divider,
  useColorModeValue,
  Link,
  Image,
} from '@chakra-ui/react';
import { FcGoogle } from 'react-icons/fc';
import { FaMicrosoft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import signupGraphic from '../assets/signup-graphic.png'; // ✅ Your image path

export default function SignUp() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    password: '',
    acceptedTerms: false,
  });

  const toast = useToast();
  const navigate = useNavigate();
  const bg = useColorModeValue('white', 'gray.800');
  const formBg = useColorModeValue('gray.50', 'gray.700');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.acceptedTerms) {
      toast({
        title: 'Please accept the terms.',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    if (formData.password.length < 6) {
      toast({
        title: 'Password too short.',
        description: 'Use at least 6 characters.',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    toast({
      title: 'Account created.',
      description: 'Welcome to StarkBooks!',
      status: 'success',
      duration: 2000,
      isClosable: true,
    });

    setTimeout(() => {
      navigate('/dashboard');
    }, 1000);
  };

  return (
    <Flex minH="100vh" bg={formBg}>
      {/* Image Section */}
      <Box w={['0', '0', '50%']} display={['none', 'none', 'block']}>
        <Image
          src={signupGraphic}
          alt="Sign up graphic"
          objectFit="cover"
          height="100%"
          width="100%"
        />
      </Box>

      {/* Form Section */}
      <Flex flex="1" align="center" justify="center" px={4}>
        <Box
          maxW="md"
          w="full"
          bg={bg}
          boxShadow="2xl"
          rounded="lg"
          p={8}
          textAlign="center"
        >
          <Heading fontSize="2xl" mb={2}>
            Start Your Free Trial
          </Heading>
          <Text fontSize="sm" color="gray.500" mb={6}>
            No credit card required. Cancel anytime.
          </Text>

          <Stack spacing={3} mb={4}>
            <Button leftIcon={<FcGoogle />} variant="outline" w="full">
              Sign up with Google
            </Button>
            <Button leftIcon={<FaMicrosoft />} variant="outline" w="full">
              Sign up with Microsoft
            </Button>
          </Stack>

          <Divider my={6} />

          <form onSubmit={handleSubmit}>
            <Stack spacing={4}>
              <FormControl id="name" isRequired>
                <FormLabel>Full Name</FormLabel>
                <Input name="name" value={formData.name} onChange={handleChange} />
              </FormControl>

              <FormControl id="email" isRequired>
                <FormLabel>Email Address</FormLabel>
                <Input type="email" name="email" value={formData.email} onChange={handleChange} />
              </FormControl>

              <FormControl id="company" isRequired>
                <FormLabel>Company</FormLabel>
                <Input name="company" value={formData.company} onChange={handleChange} />
              </FormControl>

              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <Input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                />
              </FormControl>

              <Checkbox
                name="acceptedTerms"
                isChecked={formData.acceptedTerms}
                onChange={handleChange}
                colorScheme="blue"
              >
                I agree to the{' '}
                <Link color="blue.500" href="/terms">
                  Terms
                </Link>{' '}
                and{' '}
                <Link color="blue.500" href="/privacy">
                  Privacy Policy
                </Link>
                .
              </Checkbox>

              <Button colorScheme="blue" size="lg" type="submit" w="full">
                Start Free Trial
              </Button>
            </Stack>
          </form>
        </Box>
      </Flex>
    </Flex>
  );
}
