import axiosClient from './axiosClient';

const productAPI = {
    getAll: payload => {
        const {currentPage, pageSize} = payload;
        return axiosClient.get(`getAll?currentPage=${currentPage}&pageSize=${pageSize}`);
    },

    getProductbyID: data => {
        const {id} = data;
        return axiosClient.get(`getProductDetailbyID/${id}`);
    },
};

export default productAPI;
