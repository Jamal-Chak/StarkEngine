// src/pages/CreateInvoice.jsx

import React, { useState } from 'react';
import {
  Box, Button, Input, Select, Textarea, Heading,
  FormControl, FormLabel, VStack, HStack
} from '@chakra-ui/react';
import { createInvoice } from '../services/api';
import dayjs from 'dayjs';

const CreateInvoice = () => {
  const [form, setForm] = useState({
    client: '',
    invoiceDate: dayjs().format('YYYY-MM-DD'),
    dueDate: dayjs().add(7, 'day').format('YYYY-MM-DD'),
    terms: 'Due on Receipt',
    invoiceNumber: 'INV-000001',
    orderNumber: '',
    salesperson: '',
    subject: '',
    items: [{ description: '', quantity: 1, rate: 0 }],
    notes: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleItemChange = (index, field, value) => {
    const updatedItems = [...form.items];
    updatedItems[index][field] = value;
    setForm({ ...form, items: updatedItems });
  };

  const addNewItem = () => {
    setForm({ ...form, items: [...form.items, { description: '', quantity: 1, rate: 0 }] });
  };

  const handleSubmit = async () => {
    await createInvoice(form);
    alert('✅ Invoice Created!');
  };

  return (
    <Box maxW="700px" mx="auto" mt={10} p={6} borderWidth="1px" borderRadius="lg" boxShadow="md" bg="white">
      <Heading size="md" mb={6}>Add Invoice</Heading>

      <VStack spacing={4} align="stretch">
        <FormControl>
          <FormLabel>Customer</FormLabel>
          <Select name="client" placeholder="Select Customer" onChange={handleChange}>
            <option value="Client A">Client A</option>
            <option value="Client B">Client B</option>
          </Select>
        </FormControl>

        <Box borderTop="1px solid #e2e8f0" pt={4}>
          <Heading size="sm" mb={2}>Item Details</Heading>
          {form.items.map((item, idx) => (
            <HStack key={idx} spacing={2}>
              <Input
                placeholder="Description"
                value={item.description}
                onChange={(e) => handleItemChange(idx, 'description', e.target.value)}
              />
              <Input
                type="number"
                placeholder="Qty"
                value={item.quantity}
                onChange={(e) => handleItemChange(idx, 'quantity', e.target.value)}
              />
              <Input
                type="number"
                placeholder="Rate"
                value={item.rate}
                onChange={(e) => handleItemChange(idx, 'rate', e.target.value)}
              />
            </HStack>
          ))}
          <Button mt={2} onClick={addNewItem} size="sm" colorScheme="blue" variant="outline">
            + Add new line
          </Button>
        </Box>

        <Box borderTop="1px solid #e2e8f0" pt={4}>
          <Heading size="sm" mb={2}>Invoice Details</Heading>

          <FormControl>
            <FormLabel>Invoice Date</FormLabel>
            <Input type="date" name="invoiceDate" value={form.invoiceDate} onChange={handleChange} />
          </FormControl>

          <FormControl>
            <FormLabel>Terms</FormLabel>
            <Select name="terms" value={form.terms} onChange={handleChange}>
              <option value="Due on Receipt">Due on Receipt</option>
              <option value="Net 15">Net 15</option>
              <option value="Net 30">Net 30</option>
            </Select>
          </FormControl>

          <FormControl>
            <FormLabel>Due Date</FormLabel>
            <Input type="date" name="dueDate" value={form.dueDate} onChange={handleChange} />
          </FormControl>

          <FormControl>
            <FormLabel>Invoice #</FormLabel>
            <Input name="invoiceNumber" value={form.invoiceNumber} onChange={handleChange} />
          </FormControl>

          <FormControl>
            <FormLabel>Order #</FormLabel>
            <Input name="orderNumber" value={form.orderNumber} onChange={handleChange} />
          </FormControl>

          <FormControl>
            <FormLabel>Salesperson</FormLabel>
            <Input name="salesperson" value={form.salesperson} onChange={handleChange} />
          </FormControl>

          <FormControl>
            <FormLabel>Subject</FormLabel>
            <Textarea name="subject" value={form.subject} onChange={handleChange} />
          </FormControl>
        </Box>

        <Button colorScheme="blue" mt={4} onClick={handleSubmit}>Save Invoice</Button>
      </VStack>
    </Box>
  );
};

export default CreateInvoice;
