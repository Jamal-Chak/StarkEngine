// src/services/api.js
import axios from 'axios';

// ✅ Set base URL to match backend
const API_BASE_URL = '/api/v1'; // Matches Flask blueprint: /api/v1/...

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

// ✅ Attach auth token if present
api.interceptors.request.use(config => {
  const token = localStorage.getItem('authToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// ✅ Handle API response errors globally
api.interceptors.response.use(
  response => response,
  error => {
    if (error.response?.status === 401) {
      console.error('Authentication required. Redirect to login if needed.');
    }
    return Promise.reject(error);
  }
);

// ✅ Health check
export const pingBackend = () => api.get('/health');

// ✅ Transactions
export const fetchTransactions = () => api.get('/transactions');

// ✅ Invoices
export const createInvoice = (data) => api.post('/invoices', data);
export const getInvoice = (invoiceId) => api.get(`/invoices/${invoiceId}`);
export const draftInvoice = (data) => api.post('/invoices/draft', data);
export const getAIJobStatus = (jobId) => api.get(`/ai/status/${jobId}`);

// ✅ Expandable endpoints
// export const updateInvoice = (id, data) => api.put(`/invoices/${id}`, data);
// export const deleteInvoice = (id) => api.delete(`/invoices/${id}`);

export default api;
