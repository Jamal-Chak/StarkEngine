import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { Box, Flex, Text } from "@chakra-ui/react";

import TopNav from "./components/TopNav";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import MainRoutes from "./MainRoutes";
import { pingBackend } from "./services/api";

import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";

function Layout({ children, isSidebarOpen, toggleSidebar, apiStatus }) {
  const location = useLocation();
  const isCRM = location.pathname.startsWith("/crm");

  if (isCRM) {
    return children; // Render CRM layout directly (it has its own Sidebar from components/crm/Sidebar)
  }

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
    pingBackend()
      .then((res) => {
        setApiStatus("✅ Backend is Healthy");
        console.log("Backend response:", res.data);
      })
      .catch((err) => {
        setApiStatus("❌ Backend is Unreachable");
        console.error("Error connecting to backend:", err);
      });
  }, []);

  const isMinimalLayout = ["/", "/login", "/signup"].includes(location.pathname);

  return (
    <Routes>
      {isMinimalLayout ? (
        <>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </>
      ) : (
        <Route
          path="*"
          element={
            <Layout
              isSidebarOpen={isSidebarOpen}
              toggleSidebar={toggleSidebar}
              apiStatus={apiStatus}
            >
              <MainRoutes />
            </Layout>
          }
        />
      )}
    </Routes>
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