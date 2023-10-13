/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
//import slide
import { searchKeyword } from './searchSlice';
//import data
import { products } from '../../database/MockData';
import { colorProduct } from '../../values/color';
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

    //set filter
    const [filterValue, setFilterValue] = useState({
        classify: [],
        priceRange: [500000, 1500000],
        color: [],
        starRating: 0,
    });

    const classifyItems = ['Hoa hồng', 'hoa baby', 'bó hoa', 'giỏ hoa', 'Quà tặng sinh nhật', 'Hoa tặng người yêu'];
    const colorList = [
        {name: 'Hồng', color: colorProduct.pink},
        {name: 'Xanh dương', color: colorProduct.blue},
        {name: 'Cam', color: colorProduct.orange},
        {name: 'Tím', color: colorProduct.purple},
        {name: 'Xanh biển', color: colorProduct.oceanBlue},
        {name: 'Vàng', color: colorProduct.yellow},
        {name: 'Xanh lá', color: colorProduct.green},
        {name: 'Trắng', color: colorProduct.white},
    ];

    const starRatingList = [1, 2, 3, 4, 5];
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
        const filteredList = products.filter(function(productData) {
            return productData.name.toLowerCase().includes(keywordSearch.toLowerCase());
        });

        //if there are one or more results, save the keywords and get the results
        setResult(filteredList);
    };

    const onPressClassifyItem = (item) => {
        if (filterValue.classify.indexOf(item) > -1) {
            const filteredArray = filterValue.classify.filter(classifyItem =>
                classifyItem !== item
            );

            setFilterValue(previous => {
                return {...previous, classify: filteredArray};
            });
        } else {
            const newArray = [...filterValue.classify, item];

            setFilterValue(previous => {
                return {...previous, classify: newArray};
            });
        }
    };

    const onChangePriceRange = values => {
        setFilterValue(previous => {
            return {...previous, priceRange: values};
        });
    };

    const onTouchColor = (item) => {
        if (filterValue.color.indexOf(item) > -1) {
            const filteredArray = filterValue.color.filter(colorItem =>
                colorItem !== item
            );

            setFilterValue(previous => {
                return {...previous, color: filteredArray};
            });
        } else {
            const newArray = [...filterValue.color, item];

            setFilterValue(previous => {
                return {...previous, color: newArray};
            });
        }
    };

    const onTouchRating = (item) => {
        if (filterValue.starRating === item) {
            setFilterValue(previous => {
                return {...previous, starRating: 0};
            });
        } else {
            setFilterValue(previous => {
                return {...previous, starRating: item};
            });
        }
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
        setFilterValue({
            classify: [],
            priceRange: [500000, 1500000],
            color: [],
            starRating: 0,
        });

        setModalVisible(!modalVisible);
    };

    const onPressSaveFilterValue = () => {
        console.log(filterValue);
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
        starRatingList,
        colorList,
        filterValue,
        //functions
        onChangeText,
        onClose,
        onTouchSearchItem,
        onPressFilter,
        onPressClassifyItem,
        onChangePriceRange,
        onTouchColor,
        onTouchRating,
        onPressSaveFilterValue,
    };

  return <SearchResultMainView {...searchProp} />;
}
