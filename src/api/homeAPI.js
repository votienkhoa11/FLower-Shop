import axiosClient from './axiosClient';

const homeAPI = {
    getHomePage: () => axiosClient.get('home/getHomePage'),
};

export default homeAPI;
