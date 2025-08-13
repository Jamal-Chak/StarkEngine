// src/pages/Documents.jsx
import React, { useEffect, useState, useCallback } from 'react';
import { Box, Heading, useToast } from '@chakra-ui/react';
import DocumentUploader from '../components/documents/DocumentUploader';
import DocumentList from '../components/documents/DocumentList';
import axios from 'axios';

const Documents = () => {
  const toast = useToast();
  const [documents, setDocuments] = useState([]);

  const fetchDocuments = useCallback(async () => {
    try {
      const res = await axios.get('/api/v1/documents'); // ✅ fixed path
      setDocuments(res.data.files); // ✅ Expecting 'files' array from backend
    } catch (err) {
      toast({
        title: 'Failed to fetch documents',
        description: err.message,
        status: 'error',
        duration: 4000,
        isClosable: true,
      });
    }
  }, [toast]);

  useEffect(() => {
    fetchDocuments();
  }, [fetchDocuments]);

  return (
    <Box p={6}>
      <Heading size="lg" mb={4}>📁 Client Documents</Heading>
      <DocumentUploader onUploadSuccess={fetchDocuments} />
      <DocumentList documents={documents} />
    </Box>
  );
};

export default Documents;
