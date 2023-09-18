import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import serviceRequest from '../../app/serviceRequest';
import homeAPI from '../../api/homeAPI';

export const getHomePage = createAsyncThunk(
    'getHomePage',
    async (data, thunkAPI) => {
        return serviceRequest({
            dispatch: thunkAPI.dispatch,
            serviceMethod: homeAPI.getHomePage,
        });
    }
);

const homeSlice = createSlice({
    name: 'home',
    initialState: {},
    reducers: {},
    extraReducers: (builder) => {},
});

const {actions, reducer} = homeSlice;
export const {handleRefreshLstPost} = actions;
export default reducer;
