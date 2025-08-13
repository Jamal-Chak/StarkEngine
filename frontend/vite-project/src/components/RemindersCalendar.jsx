// components/RemindersCalendar.jsx
import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { Box, Heading, useColorModeValue } from '@chakra-ui/react';

function RemindersCalendar() {
  const [events, setEvents] = useState([
    { title: 'Invoice #103 Due', date: '2025-06-15' },
    { title: 'Tax Filing', date: '2025-06-20' },
    { title: 'Payroll Run', date: '2025-06-25' }
  ]);

  const handleDateClick = (info) => {
    const title = prompt('Enter Reminder Title:');
    if (title) {
      setEvents([...events, { title, date: info.dateStr }]);
    }
  };

  const bg = useColorModeValue('white', 'gray.800');
  const border = useColorModeValue('gray.200', 'gray.700');

  return (
    <Box
      bg={bg}
      borderRadius="md"
      p={4}
      border="1px solid"
      borderColor={border}
      boxShadow="md"
      mb={10}
    >
      <Heading size="md" mb={4}>📅 Calendar-Based Reminders</Heading>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        events={events}
        dateClick={handleDateClick}
        height="auto"
      />
    </Box>
  );
}

export default RemindersCalendar;
