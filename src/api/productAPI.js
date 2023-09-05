import axiosClient from './axiosClient';

const productAPI = {
    getAll: () => {
        return axiosClient.get('getAll');
    },
};

export default productAPI;
