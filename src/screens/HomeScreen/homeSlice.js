import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import productAPI from '../../api/productAPI';
import serviceRequest from '../../app/serviceRequest';

const initialState = {
    productList: [],
};

export const getAll = createAsyncThunk(
    'product/getAll',
    async (data, thunkAPI) => {
        return serviceRequest({
            dispatch: thunkAPI.dispatch,
            serviceMethod: productAPI.getAll,
            payload: data,
        });
    }
);

const postSlice = createSlice({
    name: 'product',
    initialState: initialState,
    reducers: {
        handleRefreshLstPost: (state, action) => {
            const {postLstLength} = action.payload;

            if (postLstLength > 10) {
                state.productList = state.productList.slice(0, 10);
            }
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getAll.fulfilled, (state, action) => {
            const {data} = action.payload;

            if (data) {
                state.productList = data.responseData.rows;
            }
        });
    },
});

const {actions, reducer} = postSlice;
export const {handleRefreshLstPost} = actions;
export default reducer;
