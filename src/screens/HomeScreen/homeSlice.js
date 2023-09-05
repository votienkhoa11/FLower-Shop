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
                state.productList = state.productList.slice(0, 10);
            }
        },
    },
    extraReducers: builder => {
        builder.addCase(getAllProduct.fulfilled, (state, action) => {
            const {data, success} = action.payload;

            if (success) {
                console.log('success')
                data.pageIndex = 1
                    ? (state.productList = data.collection)
                    : (state.productList = [
                        ...state.productList,
                        ...data.collection,
                    ]);
            }
        });
    },
});

const {actions, reducer} = postSlice;
export const {handleRefreshLstPost} = actions;
export default reducer;
