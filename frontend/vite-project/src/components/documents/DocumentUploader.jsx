// src/components/documents/DocumentUploader.jsx
import React, { useState } from 'react';
import { Box, Button, Input, useToast } from '@chakra-ui/react';
import axios from 'axios';

const DocumentUploader = ({ onUploadSuccess }) => {
  const [file, setFile] = useState(null);
  const toast = useToast();

  const handleFileChange = (e) => {
    setFile(e.target.files?.[0] || null);
  };

  const handleUpload = async () => {
    if (!file) {
      toast({
        title: 'No file selected',
        status: 'warning',
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    const formData = new FormData();
    formData.append('file', file); // ✅ matches Flask backend

    try {
      const res = await axios.post('/api/v1/documents/upload', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      toast({
        title: '✅ Upload successful',
        description: `Uploaded ${res.data.filename}`,
        status: 'success',
        duration: 3000,
        isClosable: true,
      });

      if (onUploadSuccess) {
        onUploadSuccess(res.data.filename); // ✅ just filename
      }

      setFile(null); // reset input
    } catch (err) {
      toast({
        title: '❌ Upload failed',
        description: err.response?.data?.error || err.message,
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <Box mb={4}>
      <Input type="file" onChange={handleFileChange} mb={2} />
      <Button onClick={handleUpload} colorScheme="blue" isDisabled={!file}>
        Upload Document
      </Button>
    </Box>
  );
};

export default DocumentUploader;
