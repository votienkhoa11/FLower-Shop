import axios from 'axios';
import { config } from '../configurations';

const axiosClient = axios.create({
    baseURL: config.endPoint,
    headers: {
        'Content-Type': 'application/json',
    },
});

axiosClient.interceptors.response.use(
    response => {
        return response;
    },

    error => {
        throw error;
    }
);

export default axiosClient;
