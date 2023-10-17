import React from 'react';
import SearchResultContainer from './SearchResultContainer';
import {useDispatch, useSelector} from 'react-redux';
import { loaderSelector } from '../../app/selector';

export default function SearchResultScreen (props) {
    //get the keyword
    const dispatch = useDispatch();
    const isLoading = useSelector(loaderSelector);
    const {navigation, route} = props;
    const {keyword} = route.params;

    const searchResultContainerProps = {
        dispatch,
        isLoading,
        keyword,
        navigation,
    };

    return <SearchResultContainer {...searchResultContainerProps} />;
}
