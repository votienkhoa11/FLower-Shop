/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

//import data
import { data } from '../../database/MockData';

//import template
import SearchResultMainView from './template/SearchResultMainView';

export default function SearchResultContainer (props) {
    const {
        keyword,
        navigation,
    } = props;

    //set search
    const [search, setSearch] = useState(keyword);
    //set results
    const [results, setResult] = useState([]);
    //set view show
    const [loading, setLoading] = useState(true);

    const classifyItems = ['Hoa hồng', 'hoa baby', 'bó hoa', 'giỏ hoa', 'Quà tặng sinh nhật', 'Hoa tặng người yêu'];

    //save search
    const saveSearch = async (searchKeyWord) => {
        const keywords = searchKeyWord ? searchKeyWord : keyword;

        if (keywords.length > 0) {
            const searchListJSON = await AsyncStorage.getItem('search');
            //if the app already saved any search, use concat to merge the new search
            //if not, add new items
            if (searchListJSON !== null) {
                const searchList = JSON.parse(searchListJSON);

                if (!searchList.includes(keywords)) {
                    const newSearchList = searchList.concat(keywords);
                    await AsyncStorage.setItem('search', JSON.stringify(newSearchList));
                }

            } else {
                const newSearchList = [];
                newSearchList.push(keywords);
                await AsyncStorage.setItem('search', JSON.stringify(newSearchList));
            }
        }

        setLoading(false);
    };

    //on change text function
    const onChangeText = (text) => {
        setSearch(text);
        handleFilter(text);
    };

    //on press functions
    const handleFilter = (keywordSearch) => {
        const filteredList = data.filter(function(productData) {
            return productData.name.toLowerCase().includes(keywordSearch.toLowerCase());
        });

        //if there are one or more results, save the keywords and get the results
        setResult(filteredList);
    };

    const onPressClassifyItem = (item) => {
        console.log(item);
    };

    //handle touch search items
    const onTouchSearchItem = (searchItem) => {
        setSearch(searchItem);
        handleFilter(searchItem);
    };

    const onClose = () => {
        setResult([]);
        setSearch('');
    };

    const [modalVisible, setModalVisible] = useState(false);
    const onPressFilter = () => {
        setModalVisible(!modalVisible);
    };

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            saveSearch(keyword);

            handleFilter(keyword);
        });

        return unsubscribe;
    }, [navigation]);


    const searchProp = {
        navigation,
        //values
        search,
        results,
        loading,
        modalVisible,
        classifyItems,
        //functions
        onChangeText,
        onClose,
        onTouchSearchItem,
        onPressFilter,
        onPressClassifyItem,
    };

  return <SearchResultMainView {...searchProp} />;
}
