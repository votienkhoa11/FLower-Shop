import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

//import data
import label from './label';
import { data } from '../../database/MockData';
import { searchResult } from '../../database/MockData';

//import components
import { callToast } from '../../utils/Toast';

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
    //set results
    const [results, setResult] = useState([]);
    //set view show
    const [loading, setLoading] = useState(true);
    const [showFilter, setShowFilter] = useState(false);
    const [showResult, setShowResult] = useState(false);

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
        } else if (text.length === 0 && showResult) {
            setShowFilter(false);
            setShowResult(false);
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
            setShowResult(false);
        }
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
            setShowResult(true);
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
        setShowResult(false);
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
        //values
        search,
        filterSearchList,
        results,
        historySearch,
        popularSearch,
        products,
        loading,
        onFocus,
        showFilter,
        showResult,
        //functions
        setOnBlur,
        setOnFocus,
        onChangeText,
        getResults,
        onClose,
        removeSearch,
        onTouchSearchItem,
    };

  return <SearchMainView {...searchProp} />;
};

export default SearchContainer;
