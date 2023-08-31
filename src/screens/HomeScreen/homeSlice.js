import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import productAPI from '../../api/productAPI';
import serviceRequest from '../../app/serviceRequest';

const initialState = {
    productList: [],
};

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

const postSlice = createSlice({
    name: 'product',
    initialState: initialState,
    reducers: {
        handleRefreshLstPost: (state, action) => {
            const {postLstLength} = action.payload;

            if (postLstLength > 10) {
                state.postList = state.postList.slice(0, 10);
            }
        },
    },
});

const {reducer, actions} = postSlice;
export const {handleRefreshLstPost} = actions;
export default reducer;
