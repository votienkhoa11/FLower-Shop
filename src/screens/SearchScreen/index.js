import React from 'react';
import SearchContainer from './SearchContainer';
import {useDispatch, useSelector} from 'react-redux';
import { loaderSelector } from '../../app/selector';

const SearchScreen = (props) => {
    const dispatch = useDispatch();
    const isLoading = useSelector(loaderSelector);
    const {navigation} = props;

    const searchContainerProps = {
        dispatch,
        isLoading,
        navigation,
    };
    return <SearchContainer {...searchContainerProps} />;
};

export default SearchScreen;
