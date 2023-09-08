import axiosClient from './axiosClient';

const productAPI = {
    getAll: payload => {
        const {currentPage, pageSize} = payload;
        return axiosClient.get(`product/getAll?currentPage=${currentPage}&pageSize=${pageSize}`);
    },

};

export default productAPI;
