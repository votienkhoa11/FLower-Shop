import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

//import data
import { data } from '../../database/MockData';
import { searchResult } from '../../database/MockData';

//import template
import SearchMainView from './template/SearchMainView';

const SearchContainer = (props) => {
    const {
        navigation,
    } = props;

    //set values
    const [products, setProduct] = useState([]);
    //set search
    const [search, setSearch] = useState('');
    const [popularSearch, setPopularSearch] = useState([]);
    const [historySearch, setHisorySearch] = useState([]);
    //set filter search
    const [filterSearchList, setFilterSearchList] = useState([]);

    //set view show
    const [loading, setLoading] = useState(true);
    const [showFilter, setShowFilter] = useState(false);

    const getDatafromDB = async() => {
        //get params search
        //get popular seach
        const popularSearchList = [...searchResult];

        //sort the search based on searchTime(highest to lowest)
        popularSearchList.sort(function(a, b) {
            const keyA = a.searchTime || 0;
            const keyB = b.searchTime || 0;
            return keyB - keyA;
        });

        //set popular search with top 12
        setPopularSearch(popularSearchList.slice(0, 12));

        //set data suggestion
        const productList = [...data];
        productList.sort(() => 0.5 - Math.random());
        setProduct(productList.slice(0, 6));
    };

    //get user history search
    const getHistory = async () => {
        const historySearchListJSON = await AsyncStorage.getItem('search');
        if (historySearchListJSON !== null) {
            const historySearchList = JSON.parse(historySearchListJSON);
            historySearchList.reverse();
            setHisorySearch(historySearchList);
        }

        //set loading to false when getting data is completed
        setLoading(false);
    };

    //on change text function
    const onChangeText = (text) => {
        setSearch(text);
        if (text.length > 0) {
            setShowFilter(true);
        } else if (text.length === 0 ) {
            setShowFilter(false);
        }

        //the filter function will filter everytime users enter a character
        const filterData =
        historySearch && historySearch?.length > 0 ?
        historySearch?.filter(historySearchData =>
            historySearchData?.toLowerCase()?.includes(text?.toLowerCase()),
                    ) : [];

        if (filterData.length < 1) {
            setShowFilter(false);
        }
        setFilterSearchList([...filterData]);
    };

    //set the search bar on focus or not
    const [onFocus, setFocus] = useState(false);

    const setOnFocus = () => {
        setFocus(true);
    };

    const setOnBlur = () => {
        setFocus(false);
        if (search === '') {
            setShowFilter(false);
        }
    };

    //on press functions
    //handle touch search items
    const onTouchSearchItem = (searchItem) => {
        setSearch(searchItem);
    };

    const onSubmitSearch = (keyword) => {
        navigation.navigate('searchresult', {
            search: keyword,
        });
    };

    //remove all history
    //the idea is remove all items in search key and set historySearch to []
    const removeSearch = async () => {
        await AsyncStorage.removeItem('search');
        setHisorySearch([]);
    };

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            getDatafromDB();
            getHistory();
        });

        return unsubscribe;
    }, [navigation]);

    const searchProp = {
        //values
        search,
        filterSearchList,
        historySearch,
        popularSearch,
        products,
        loading,
        onFocus,
        showFilter,
        //functions
        setOnBlur,
        setOnFocus,
        onChangeText,
        onSubmitSearch,
        removeSearch,
        onTouchSearchItem,
    };

  return <SearchMainView {...searchProp} />;
};

export default SearchContainer;
