import React from 'react';
import SearchResultContainer from './SearchResultContainer';

const SearchResultScreen = ({navigation}) => {
    const searchResultContainerProps = {
        navigation,
    };
    return <SearchResultContainer {...searchResultContainerProps} />;
};

export default SearchResultScreen;
