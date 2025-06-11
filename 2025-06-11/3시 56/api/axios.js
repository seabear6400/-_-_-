// src/api/axios.js
import axios from 'axios';

const instance = axios.create({
    baseURL: '', // '' 또는 '/api'로 설정 가능
    headers: {
        'Content-Type': 'application/json',
    },
});

instance.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export default instance;
