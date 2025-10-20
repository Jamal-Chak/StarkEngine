import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
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
  useToast,
} from "@chakra-ui/react";
import loginImage from "../assets/login-image.png";
import api, { getCsrfToken } from "../api/axios";        // ✅ Axios instance
import { getCookie } from "../utils/cookies"; // ✅ CSRF helper

export default function Login() {
  const navigate = useNavigate();
  const toast = useToast();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      await getCsrfToken();
      const response = await api.post(
        "/auth/login",
        { username: email, password },
        {
          headers: { "X-CSRFToken": getCookie("csrftoken") },
          withCredentials: true,
        }
      );

      toast({
        title: "Login successful!",
        status: "success",
        duration: 2000,
        isClosable: true,
      });

      navigate("/dashboard");
    } catch (error) {
      console.error("Login failed:", error.response?.data || error.message);
      toast({
        title: "Login failed",
        description: "Invalid credentials or server issue.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Flex minH="100vh" direction={{ base: "column", md: "row" }}>
      <Box flex="1" display={{ base: "none", md: "block" }} height="100vh">
        <Image src={loginImage} alt="Login background" objectFit="cover" w="100%" h="100%" />
      </Box>

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
              <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </FormControl>

            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
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
