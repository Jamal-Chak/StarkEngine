import React, { useState } from "react";
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
} from "@chakra-ui/react";
import { FcGoogle } from "react-icons/fc";
import { FaMicrosoft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import signupGraphic from "../assets/signup-graphic.png";
import api, { getCsrfToken } from "../api/axios";        // ✅ Axios instance
import { getCookie } from "../utils/cookies"; // ✅ CSRF helper

export default function SignUp() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    password: "",
    acceptedTerms: false,
  });

  const toast = useToast();
  const navigate = useNavigate();
  const bg = useColorModeValue("white", "gray.800");
  const formBg = useColorModeValue("gray.50", "gray.700");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.acceptedTerms) {
      toast({ title: "Please accept the terms.", status: "error", duration: 3000, isClosable: true });
      return;
    }

        // Ensure CSRF cookie is present (proxied via Vite server)
        await getCsrfToken();

    try {
        "/auth/register",
      await getCsrfToken();

      const payload = {
        username: formData.email,
        email: formData.email,
        password: formData.password,
        name: formData.name,
        company: formData.company,
      };

      console.log('Register payload:', payload);

      await api.post(
        "/auth/register",
        payload,
        {
          headers: { "X-CSRFToken": getCookie("csrftoken") },
          withCredentials: true,
        }
      );

      toast({
          title: "Account created!",
          description: "Welcome to TwineBooks!",
          status: "success",
          duration: 2000,
          isClosable: true,
        });

      setTimeout(() => navigate("/dashboard"), 1000);
    } catch (error) {
      // Show detailed error information when available
      if (error.response) {
        console.error('Signup failed (response):', error.response.status, error.response.data);
      } else {
        console.error('Signup failed (network):', error.message);
      }
      toast({
        title: "Signup failed",
        description: "Please check your info and try again.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Flex minH="100vh" bg={formBg}>
      <Box w={["0", "0", "50%"]} display={["none", "none", "block"]}>
        <Image src={signupGraphic} alt="Sign up graphic" objectFit="cover" h="100%" w="100%" />
      </Box>

      <Flex flex="1" align="center" justify="center" px={4}>
        <Box maxW="md" w="full" bg={bg} boxShadow="2xl" rounded="lg" p={8} textAlign="center">
          <Heading fontSize="2xl" mb={2}>Start Your Free Trial</Heading>
          <Text fontSize="sm" color="gray.500" mb={6}>
            No credit card required. Cancel anytime.
          </Text>

          <Stack spacing={3} mb={4}>
            <Button leftIcon={<FcGoogle />} variant="outline" w="full">Sign up with Google</Button>
            <Button leftIcon={<FaMicrosoft />} variant="outline" w="full">Sign up with Microsoft</Button>
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
                <Input type="password" name="password" value={formData.password} onChange={handleChange} />
              </FormControl>

              <Checkbox name="acceptedTerms" isChecked={formData.acceptedTerms} onChange={handleChange} colorScheme="blue">
                I agree to the{" "}
                <Link color="blue.500" href="/terms">Terms</Link> and{" "}
                <Link color="blue.500" href="/privacy">Privacy Policy</Link>.
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

