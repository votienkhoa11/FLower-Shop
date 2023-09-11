import React from 'react';
import SearchResultContainer from './SearchResultContainer';

export default function SearchResultScreen ({route, navigation}) {
    //get the keyword
    const {keyword} = route.params;

    const searchResultContainerProps = {
        keyword,
        navigation,
    };

    return <SearchResultContainer {...searchResultContainerProps} />;
}
