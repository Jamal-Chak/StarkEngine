import { Box, Button, Flex, Heading, Image, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import homeHero from '../assets/home-hero.png'; // adjust if your filename is different

function Home() {
  return (
    <Flex
      direction={{ base: 'column', md: 'row' }}
      minH="100vh"
      bg="gray.900"
      color="white"
    >
      {/* Image section */}
      <Box flex="1" display={{ base: 'none', md: 'block' }}>
        <Image
          src={homeHero}
          alt="Welcome to OnlyPipe"
          objectFit="cover"
          height="100vh"
          width="100%"
        />
      </Box>

      {/* Text + Buttons section */}
      <Flex
        flex="1"
        direction="column"
        align="center"
        justify="center"
        px={8}
        py={12}
        textAlign="center"
      >
        <Heading fontSize="5xl" mb={4}>
          Welcome to OnlyPipe
        </Heading>
        <Text fontSize="lg" mb={8} color="gray.400">
          Simplify your work with a secure, scalable platform. Start your journey today.
        </Text>
        <Flex gap={4}>
          <Link to="/signup">
            <Button colorScheme="purple">Get Started</Button>
          </Link>
          <Link to="/login">
            <Button variant="outline" colorScheme="purple">Login</Button>
          </Link>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Home;
