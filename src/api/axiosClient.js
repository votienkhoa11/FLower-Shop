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
        if (response.data) {
            return response.data;
        }
        return response;
    },

    error => {
        throw error;
    }
);

export default axiosClient;
