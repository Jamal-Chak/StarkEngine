// src/api/axios.js
import axios from "axios";

// Base config: use relative URLs so Vite dev server proxy forwards API calls to the backend.
const api = axios.create({
  baseURL: "", // relative paths — Vite proxy will forward to http://localhost:5000
  withCredentials: true, // send cookies (important for CSRF + auth)
  timeout: 10000,
});

// Fetch CSRF cookie from backend /api/v1/csrf/ endpoint
export const getCsrfToken = async () => {
  try {
    await api.get('/api/v1/csrf/');
    console.log('✅ CSRF cookie set');
  } catch (err) {
    console.error('❌ Failed to fetch CSRF token:', err);
    throw err;
  }
};

export default api;
