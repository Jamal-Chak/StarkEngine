// src/components/documents/DocumentList.jsx
import React from 'react';
import {
  Box,
  List,
  ListItem,
  HStack,
  Text,
  Link,
  IconButton,
} from '@chakra-ui/react';
import { FaDownload } from 'react-icons/fa';

const DocumentList = ({ documents }) => {
  // ✅ Ensure it's always an array
  const fileList = Array.isArray(documents) ? documents : [];

  return (
    <Box>
      <List spacing={3}>
        {fileList.map((filename, index) => (
          <ListItem key={index}>
            <HStack justify="space-between">
              <Text>{filename}</Text>
              <Link
                href={`http://localhost:5000/api/v1/documents/download/${filename}`} // ✅ Uses full download URL
                isExternal
              >
                <IconButton
                  icon={<FaDownload />}
                  aria-label="Download"
                  size="sm"
                />
              </Link>
            </HStack>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default DocumentList;
