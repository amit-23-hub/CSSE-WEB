import axios from 'axios';

const API_URL = import.meta.env.VITE_API_BASE_URL;

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json'
  },
  withCredentials: true // Enable cookies
});

export const authAPI = {
  register: (userData) => api.post('/auth/register', userData),
  login: (credentials) => api.post('/auth/login', credentials),
  logout: () => api.post('/auth/logout'),
  getProfile: () => api.get('/auth/profile'),
  updateProfile: (formData) => api.put('/auth/profile', formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
    withCredentials: true
  })
};

export const eventAPI = {
  register: (eventData) => api.post('/events/register', eventData),
  getMyRegistrations: () => api.get('/events/my-registrations'),
  getRegistrationById: (id) => api.get(`/events/${id}`)
};

export const adminAPI = {
  getAllEvents: () => api.get('/admin/events'),
  getEventRegistrations: (eventName) => api.get(`/admin/registrations?eventName=${encodeURIComponent(eventName)}`)
};

export default api;