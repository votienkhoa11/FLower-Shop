import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import productAPI from '../../api/productAPI';
import serviceRequest from '../../app/serviceRequest';

export const getAllProduct = createAsyncThunk(
    'product/getAll',
    async (data, thunkAPI) => {
        return serviceRequest({
            dispatch: thunkAPI.dispatch,
            serviceMethod: productAPI.getAll,
            payload: data,
        });
    }
);

export const getProductDetailByID = createAsyncThunk(
    'product/getProductDetailByID',
    async (data, thunkAPI) => {
        return serviceRequest({
            dispatch: thunkAPI.dispatch,
            serviceMethod: productAPI.getProductDetailByID,
            payload: data,
        });
    }
);

const productSlice = createSlice({
    name: 'product',
    initialState: {},
    reducers: {},
    extraReducers: (builder) => {},
});

const {actions, reducer} = productSlice;
export const {handleRefreshLstPost} = actions;
export default reducer;
