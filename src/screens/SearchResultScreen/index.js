import React from 'react';
import SearchResultContainer from './SearchResultContainer';

const SearchResultScreen = ({route, navigation}) => {
    const searchResultContainerProps = {
        route,
        navigation,
    };
    return <SearchResultContainer {...searchResultContainerProps} />;
};

export default SearchResultScreen;
