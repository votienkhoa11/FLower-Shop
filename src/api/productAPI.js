import axiosClient from './axiosClient';

const productAPI = {
    getAll: () => {
        return axiosClient.get('product/getAll');
    },
};

export default productAPI;
