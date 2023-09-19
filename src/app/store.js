import { configureStore } from '@reduxjs/toolkit';
import loaderReducer from './loaderSlice';
import homeReducer from '../screens/HomeScreen/homeSlice';
import productReducer from '../screens/ProductScreen/productSlice';

const rootReducer = {
    loader: loaderReducer,
    home: homeReducer,
    product: productReducer,
};

export default configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
        immutableCheck: false,
        serializableCheck: false,
    }),
});
