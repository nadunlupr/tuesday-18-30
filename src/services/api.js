import axios from 'axios';

const api = axios.create({
    baseURL: 'http://88.200.63.148:5009/'
});

export default api;