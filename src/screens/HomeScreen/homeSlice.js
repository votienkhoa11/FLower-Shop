import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import productAPI from '../../api/productAPI';
import serviceRequest from '../../app/serviceRequest';

const homeSlice = createSlice({
    name: 'homeSlice',
    initialState: {},
    reducers: {},
    extraReducers: (builder) => {},
});

const {actions, reducer} = homeSlice;
export const {handleRefreshLstPost} = actions;
export default reducer;
