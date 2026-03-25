// =============================================
// INSTRUCTIONS:
// Copy this file into your React project at:
// src/api.js
// =============================================

import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:8000' });

// Auto-attach JWT token to every request
API.interceptors.request.use((req) => {
  const token = localStorage.getItem('token');
  if (token) req.headers.Authorization = `Bearer ${token}`;
  return req;
});

export default API;


// =============================================
// HOW TO USE IN YOUR REACT COMPONENTS:
// =============================================

// --- REGISTER ---
// import API from '../api';
// const register = async () => {
//   const res = await API.post('/auth/register', { name, email, password });
//   console.log(res.data);
// };

// --- LOGIN ---
// const login = async () => {
//   const res = await API.post('/auth/login', { email, password });
//   localStorage.setItem('token', res.data.token);
// };

// --- SAVE CHAT MESSAGE (call this after Dialogflow replies) ---
// const saveChat = async (user_message, bot_reply) => {
//   await API.post('/chat/save', { user_message, bot_reply });
// };

// --- GET CHAT HISTORY ---
// const loadHistory = async () => {
//   const res = await API.get('/chat/history');
//   setMessages(res.data);
// };
