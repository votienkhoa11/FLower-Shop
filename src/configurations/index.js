const envConfig = {
    devEndPoint: 'gateway.dev.meu-solutions.com/meu-shop-pr-be/api/v1.0',
    prodEndPoint: 'gateway.dev.meu-solutions.com/meu-shop-pr-be/api/v1.0',
};

const isDevEnv = !process.env.NODE_ENV || process.env.NODE_ENV === 'development';

const endPoint = isDevEnv ? envConfig.devEndPoint : envConfig.prodEndPoint;

export const config = {
    envConfig,
};
