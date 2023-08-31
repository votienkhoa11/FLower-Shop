import { configureStore } from '@reduxjs/toolkit';
import loaderReducer from './loaderSlice';
import productReducer from '../screens/HomeScreen/homeSlice';

const rootReducer = {
    loader: loaderReducer,
    product: productReducer,
};

export default configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => {
        getDefaultMiddleware({
            immutableCheck: false,
            serializableCheck: false,
        });
    },
});
