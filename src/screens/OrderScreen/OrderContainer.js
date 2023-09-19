import { Keyboard } from 'react-native';
import React, {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

//import data
import { products } from '../../database/MockData';
import { order } from '../../database/MockData';

//import template
import OrderMainView from './template/OrderMainView';

const OrderContainer = (props) => {
    const {
        navigation,
    } = props;

    const [loading, setLoading] = useState(true);

    //set search
    const [search, setSearch] = useState('');
    const [showsearch, setShowSearch] = useState(false);
    const [historySearch, setHisorySearch] = useState([]);

    //set filter search
    const [filterSearchList, setFilterSearchList] = useState([]);
    const [showFilter, setShowFilter] = useState(false);

    //set results
    const [result, setResult] = useState([]);
    const [showResult, setShowResult] = useState(false);

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

    const getResults = (keywordSearch) => {
        const resultProductList = products.filter(function(productData) {
            return productData.name.toLowerCase().includes(keywordSearch.toLowerCase());
        });

        const orderResultsList = [];

        for (let resultProductIndex = 0; resultProductIndex < resultProductList.length; resultProductIndex++) {
            for (let orderIndex = 0; orderIndex < order.length; orderIndex++) {
                if (resultProductList[resultProductIndex].id === order[orderIndex].productID) {
                    orderResultsList.push(order[orderIndex]);
                }
            }
        }

        setShowResult(true);
        setResult(orderResultsList);
        setShowFilter(false);
        Keyboard.dismiss();
    };

    //set the search bar on focus or not
    const [onFocus, setFocus] = useState(false);

    const setOnFocus = () => {
        setFocus(true);
    };

    const setOnBlur = () => {
        setFocus(false);
        if (search === '') {
            setShowSearch(false);
            setShowFilter(false);
            setShowResult(false);
        }
    };

     //handle touch search items
     const onTouchSearchItem = (searchItem) => {
        setSearch(searchItem);
        setShowResult(true);
        setShowFilter(false);
        Keyboard.dismiss();
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

    //on press functions
    const onPressShowSearch = () => {
        if (showsearch) {
            getResults(search);
        } else {
            setShowSearch(true);
        }
    };

     //close result screen
     const onClose = () => {
        setLoading(true);
        setShowResult(false);
        setSearch('');
        setLoading(false);
        setResult([]);
    };

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            getHistory();
        });

      return unsubscribe;
    }, [navigation]);

    const orderProps = {
        //values
        loading,
        search,
        showsearch,
        onFocus,
        result,
        showResult,
        filterSearchList,
        showFilter,
        //functions
        getResults,
        onPressShowSearch,
        onChangeText,
        setOnFocus,
        setOnBlur,
        onClose,
        onTouchSearchItem,
    };

  return <OrderMainView {...orderProps} />;
};

export default OrderContainer;
