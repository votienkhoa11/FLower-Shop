const envConfig = {
    devEndPoint: 'https://gateway.dev.meu-solutions.com/meu-shop-pr-be/api/v1.0/',
    prodEndPoint: 'https://gateway.dev.meu-solutions.com/meu-shop-pr-be/api/v1.0/',
};

const isDevEnv = !process.env.NODE_ENV || process.env.NODE_ENV === 'development';

const endPoint = isDevEnv ? envConfig.devEndPoint : envConfig.prodEndPoint;

const noImage = require('../assets/imgs/No_Image_Available.jpg');

export const config = {
    isDevEnv,
    envConfig,
    endPoint,
    noImage,
};
