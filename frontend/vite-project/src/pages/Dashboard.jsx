// src/pages/Dashboard.jsx
import React, { useEffect, useState } from 'react';
import {
  Box,
  Heading,
  Text,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  useColorModeValue,
  Divider,
  Button,
  VStack,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

import VATCompliance from '../components/VATCompliance';
import RecentTransactions from '../components/RecentTransactions';
import InvoiceOverview from '../components/InvoiceOverview';
import ExpenseChart from '../components/ExpenseChart';
import NotificationsPanel from '../components/NotificationsPanel';
import GoalsProgress from '../components/GoalsProgress';
import CashFlowForecast from '../components/CashFlowForecast';
import AccountSummary from '../components/AccountSummary';
import ProfitVsExpenseGraph from '../components/ProfitVsExpenseGraph';
import RemindersCalendar from '../components/RemindersCalendar';
import DownloadPDF from '../components/DownloadPDF';

import { fetchTransactions } from '../services/api';

function StatCard({ label, value }) {
  const cardBg = useColorModeValue('white', 'gray.800');
  const cardShadow = useColorModeValue('md', 'dark-lg');

  return (
    <Box
      bg={cardBg}
      p={4}
      borderRadius="md"
      shadow={cardShadow}
      border="1px solid"
      borderColor={useColorModeValue('gray.200', 'gray.700')}
    >
      <Stat>
        <StatLabel>{label}</StatLabel>
        <StatNumber>{value}</StatNumber>
      </Stat>
    </Box>
  );
}

function Dashboard() {
  const navigate = useNavigate();
  const cardBg = useColorModeValue('white', 'gray.800');
  const textColor = useColorModeValue('gray.700', 'gray.200');

  const [transactions, setTransactions] = useState([]);
  const [totals, setTotals] = useState({
    receivables: 0,
    payables: 0,
    cashFlow: 0,
    netProfit: 0,
  });

  useEffect(() => {
    fetchTransactions()
      .then((res) => {
        setTransactions(res.data);

        let receivables = 0;
        let payables = 0;
        let cashFlow = 0;

        res.data.forEach((tx) => {
          cashFlow += tx.amount;
          if (tx.amount > 0) receivables += tx.amount;
          else payables += Math.abs(tx.amount);
        });

        setTotals({
          receivables,
          payables,
          cashFlow,
          netProfit: cashFlow * 0.5,
        });
      })
      .catch((err) => {
        console.error('Failed to fetch transactions', err);
      });
  }, []);

  return (
    <Box px={6} py={4}>
      {/* Welcome */}
        <Heading size="lg" mb={2} color="blue.500">
          📘 Welcome to TwineCapital
        </Heading>
      <Text mb={6} fontSize="md" color={textColor}>
        Let’s get your accounting up and running in no time!
      </Text>

      {/* Getting Started Checklist */}
      <Box bg={cardBg} p={5} borderRadius="md" shadow="sm" mb={8}>
        <Heading size="md" mb={4}>✨ Getting Started</Heading>
        <VStack spacing={3} align="stretch">
          <Button onClick={() => navigate('/settings/vat')} variant="outline" colorScheme="purple">
            ⚙️ Configure VAT
          </Button>
          <Button onClick={() => navigate('/invoices/customize')} variant="outline" colorScheme="blue">
            🖌 Customize Invoice Templates
          </Button>
          <Button onClick={() => navigate('/settings/payments')} variant="outline" colorScheme="green">
            💳 Set Up Payment Gateways
          </Button>
          <Button onClick={() => navigate('/modules')} variant="outline" colorScheme="gray">
            🧩 Enable More Modules
          </Button>
        </VStack>
      </Box>

      {/* Quick Actions */}
      <Heading size="md" mb={4}>⚡ Quick Actions</Heading>
      <SimpleGrid columns={[2, null, 4]} spacing={4} mb={8}>
        <Button colorScheme="blue" onClick={() => navigate('/invoices/create')}>
          ➕ New Invoice
        </Button>
        <Button colorScheme="green" onClick={() => navigate('/customers/create')}>
          ➕ New Customer
        </Button>
        <Button colorScheme="red" onClick={() => navigate('/expenses/create')}>
          ➕ New Expense
        </Button>
        <Button colorScheme="orange" onClick={() => navigate('/timelog')}>
          ⏱ Log Time
        </Button>
      </SimpleGrid>

      {/* Summary Stats */}
      <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={6} mb={10}>
        <StatCard label="Total Receivables" value={`$${totals.receivables}`} />
        <StatCard label="Total Payables" value={`$${totals.payables}`} />
        <StatCard label="Cash Flow" value={`$${totals.cashFlow}`} />
        <StatCard label="Net Profit" value={`$${totals.netProfit}`} />
      </SimpleGrid>

      <DownloadPDF transactions={transactions} totals={totals} />

      <Divider my={10} />

      {/* Visual Dashboards */}
      <ExpenseChart />
      <InvoiceOverview />
      <RecentTransactions />
      <NotificationsPanel />
      <GoalsProgress />
      <CashFlowForecast />
      <ProfitVsExpenseGraph />
      <AccountSummary />
      <RemindersCalendar />
      <VATCompliance />
    </Box>
  );
}

export default Dashboard;
