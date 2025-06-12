import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Box, Flex } from '@chakra-ui/react';

import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import MainRoutes from './MainRoutes';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true); // Sidebar open by default

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <Router>
      <Flex direction="column" height="100vh">
        <Navbar onToggleSidebar={toggleSidebar} />
        <Flex flex="1" overflow="hidden">
          <Sidebar isOpen={isSidebarOpen} />
          <Box flex="1" p="4" overflowY="auto" bg="gray.50">
            <MainRoutes />
          </Box>
        </Flex>
        <Footer />
      </Flex>
    </Router>
  );
}

export default App;
