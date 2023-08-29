import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

//import data
import label from './label';
import { data } from '../../database/MockData';
import { searchResult } from '../../database/MockData';

//import components
import { callToast } from '../../utils/Toast';

//import template
import SearchResultMainView from './template/SearchResultMainView';

const SearchResultContainer = (props) => {
    const {
        route,
        navigation,
    } = props;

    const {keyword} = route.params;

    //set values
    const [products, setProduct] = useState([]);
    //set search
    const [search, setSearch] = useState(keyword);
    const [historySearch, setHisorySearch] = useState([]);
    //set filter search
    const [filterSearchList, setFilterSearchList] = useState([]);
    //set results
    const [results, setResult] = useState([]);
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

        //set data suggestion
        const productList = [...data];
        productList.sort(() => 0.5 - Math.random());
        setProduct(productList.slice(0, 6));
    };

    //save search
    const saveSearch = async (itemSearch) => {
        if (itemSearch !== '') {
            const searchListJSON = await AsyncStorage.getItem('search');
            //if the app already saved any search, use concat to merge the new search
            //if not, add new items
            if (searchListJSON !== null) {
                const searchList = JSON.parse(searchListJSON);

                if (!searchList.includes(itemSearch)) {
                    const newSearchList = searchList.concat(itemSearch);
                    await AsyncStorage.setItem('search', JSON.stringify(newSearchList));
                }

            } else {
                const newSearchList = [];
                newSearchList.push(itemSearch);
                await AsyncStorage.setItem('search', JSON.stringify(newSearchList));
            }
        }
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
        } else if (text.length === 0) {
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

    //on press functions
    //get search results
    //turn off search result function is on line 98, on change text function
    const getResults = (keywordSearch) => {
        const resultList = data.filter(function(productData) {
            return productData.name.toLowerCase().includes(keywordSearch.toLowerCase());
        });

        //if there are one or more results, save the keywords and get the results
        if (resultList.length > 0) {
            saveSearch(keywordSearch);
            setResult(resultList);
            setShowFilter(false);
        } else {
            callToast(label.noResult);
        }
    };

    //handle touch search items
    const onTouchSearchItem = (searchItem) => {
        setSearch(searchItem);
        getResults(searchItem);
    };

    //remove all history
    //the idea is remove all items in search key and set historySearch to []
    const removeSearch = async () => {
        await AsyncStorage.removeItem('search');
        setHisorySearch([]);
    };

    //close result screen
    const onClose = () => {
        setResult([]);
        setSearch('');
    };

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            getDatafromDB();
            getHistory();
        });

        return unsubscribe;
    }, [navigation]);

    const searchProp = {
        navigation,
        //values
        search,
        filterSearchList,
        results,
        historySearch,
        products,
        loading,
        showFilter,
        //functions
        onChangeText,
        getResults,
        onClose,
        removeSearch,
        onTouchSearchItem,
    };

  return <SearchResultMainView {...searchProp} />;
};

export default SearchResultContainer;
