import axios from 'axios';

const API_URL = import.meta.env.VITE_API_BASE_URL;

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json'
  },
  withCredentials: true // Enable cookies
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export const authAPI = {
  register: (userData) => api.post('/auth/register', userData),
  login: (credentials) => api.post('/auth/login', credentials),
  logout: () => api.post('/auth/logout'),
  getProfile: () => api.get('/auth/profile'),
  updateProfile: (formData) => api.put('/auth/profile', formData, {
    headers: { 'Content-Type': 'multipart/form-data' }
  })
};

export const eventAPI = {
  getAllEvents: () => api.get('/events'),
  getEventById: (id) => api.get(`/events/${id}`),
  register: (registrationData) => api.post('/registrations', registrationData),
  getMyRegistrations: () => api.get('/registrations/my'),
  getRegistrationById: (id) => api.get(`/registrations/${id}`)
};

export const adminAPI = {
  getAllEvents: () => api.get('/events'), // Public endpoint is fine for list, or specific admin one if needed
  createEvent: (eventData) => api.post('/events', eventData, {
    headers: { 'Content-Type': 'multipart/form-data' }
  }),
  updateEvent: (id, eventData) => api.put(`/events/${id}`, eventData, {
    headers: { 'Content-Type': 'multipart/form-data' }
  }),
  deleteEvent: (id) => api.delete(`/events/${id}`),

  createSubEvent: (subEventData) => api.post('/events/sub-events', subEventData),
  updateSubEvent: (id, subEventData) => api.put(`/events/sub-events/${id}`, subEventData),
  deleteSubEvent: (id) => api.delete(`/events/sub-events/${id}`),

  getEventRegistrations: (eventId) => api.get(`/registrations/event/${eventId}`)
};

export default api;