// src/App.jsx
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { Box, Flex, Text } from "@chakra-ui/react";

import TopNav from "./components/TopNav";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import MainRoutes from "./MainRoutes";
import { pingBackend } from "./services/api";

// Pages
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";

// ✅ Import axios instance + csrf fetcher
import { getCsrfToken } from "./api/axios";

// Layout for authenticated pages
function Layout({ children, isSidebarOpen, toggleSidebar, apiStatus }) {
  return (
    <Flex direction="column" height="100vh">
      <TopNav />
      <Navbar onToggleSidebar={toggleSidebar} />
      <Flex flex="1" overflow="hidden">
        <Sidebar isOpen={isSidebarOpen} />
        <Box flex="1" p={4} overflowY="auto" bg="gray.50">
          <Text mb={4} color="gray.600" fontSize="sm">
            {apiStatus}
          </Text>
          {children}
        </Box>
      </Flex>
      <Footer />
    </Flex>
  );
}

function AppContent() {
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [apiStatus, setApiStatus] = useState("Checking backend...");

  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);

  useEffect(() => {
    // ✅ Ensure CSRF cookie is set before any POST request
    const initApp = async () => {
      await getCsrfToken(); // fetch CSRF cookie
      try {
        const res = await pingBackend();
        setApiStatus("✅ Backend is Healthy");
        console.log("Backend response:", res.data);
      } catch (err) {
        setApiStatus("❌ Backend is Unreachable");
        console.error("Error connecting to backend:", err);
      }
    };

    initApp();
  }, []);

  // ✅ Minimal layout (no sidebar/topnav/footer) for public pages
  const isMinimalLayout = ["/", "/login", "/signup"].includes(location.pathname);

  if (isMinimalLayout) {
    return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    );
  }

  // ✅ Authenticated routes with full layout
  return (
    <Layout
      isSidebarOpen={isSidebarOpen}
      toggleSidebar={toggleSidebar}
      apiStatus={apiStatus}
    >
      <MainRoutes />
    </Layout>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
