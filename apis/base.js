import axios from 'axios';

export const base = axios.create({
    baseURL: '/api',
});
