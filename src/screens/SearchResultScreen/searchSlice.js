import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import searchAPI from '../../api/searchAPI';
import serviceRequest from '../../app/serviceRequest';

export const getPopularKeyword = createAsyncThunk(
    'search/keyword/getPopularKeyword',
    async (data, thunkAPI) => {
        return serviceRequest({
            dispatch: thunkAPI.dispatch,
            serviceMethod:searchAPI.getPopularKeyword,
        });
    }
);

export const searchKeyword = createAsyncThunk(
    'search/keyword',
    async (data, thunkAPI) => {
        return serviceRequest({
            dispatch: thunkAPI.dispatch,
            serviceMethod: searchAPI.getPopularKeyword,
            payload: data,
        });
    }
);

const searchSlice = createSlice({
    name: 'search',
    initialState: {},
    extraReducers: (builder) => {},
});

const {actions, reducer} = searchSlice;
export const {handleRefreshLstPost} = actions;
export default reducer;
