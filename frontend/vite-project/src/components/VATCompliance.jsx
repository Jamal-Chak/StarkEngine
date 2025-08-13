import React from "react";
import { Box, Heading, Stack, Text, Icon, SimpleGrid } from "@chakra-ui/react";
import { FaFileInvoiceDollar, FaCheckCircle } from "react-icons/fa";

const VATCompliance = () => {
  return (
    <Box p={8} bg="gray.50" borderRadius="xl" boxShadow="md">
      <Heading size="lg" mb={6} textAlign="center">
        Engineered to Unlock Business Growth
      </Heading>

      <SimpleGrid columns={[1, null, 2]} spacing={10}>
        {/* VAT Compliance */}
        <Box>
          <Heading size="md" mb={4}>VAT Compliance</Heading>
          <Stack spacing={3}>
            <Text><Icon as={FaFileInvoiceDollar} mr={2} color="blue.500" />
              Send VAT-applied invoices with auto-populated tax rates.
            </Text>
            <Text><Icon as={FaCheckCircle} mr={2} color="blue.500" />
              Create contacts, items, and transactions with appropriate tax rates.
            </Text>
            <Text><Icon as={FaCheckCircle} mr={2} color="blue.500" />
              Generate VAT 201 reports and audit documents.
            </Text>
            <Text><Icon as={FaCheckCircle} mr={2} color="blue.500" />
              Stay SARS-compliant with correction and summary reports.
            </Text>
          </Stack>
        </Box>

        {/* Collaboration */}
        <Box>
          <Heading size="md" mb={4}>Collaboration</Heading>
          <Stack spacing={3}>
            <Text><Icon as={FaCheckCircle} mr={2} color="green.500" />
              Work as a team, assign roles and permissions.
            </Text>
            <Text><Icon as={FaCheckCircle} mr={2} color="green.500" />
              Use customer and vendor portals for transparent communication.
            </Text>
            <Text><Icon as={FaCheckCircle} mr={2} color="green.500" />
              Centralized data access across finance teams.
            </Text>
          </Stack>
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default VATCompliance;
