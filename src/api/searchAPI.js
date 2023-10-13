import axiosClient from './axiosClient';

const searchAPI = {
    keyword: payload => {
        const {keyword} = payload;
        return axiosClient.get(`search/keyword/${keyword}`);
    },

    getPopularKeyword: () => axiosClient.get('search/keyword/getPopularKeyword'),
};

export default searchAPI;
