import React from 'react';
import SearchContainer from './SearchContainer';

const SearchScreen = ({navigation}) => {
    const searchContainerProps = {
        navigation,
    };
    return <SearchContainer {...searchContainerProps} />;
};

export default SearchScreen;
