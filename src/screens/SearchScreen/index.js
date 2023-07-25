/* eslint-disable react-native/no-inline-styles */
import { Text, View, ScrollView, TouchableOpacity, TextInput, Pressable,
    TouchableHighlight, Keyboard } from 'react-native';
import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-root-toast';

//import style
import defaultStyles from '../../DefaultStyles';
import styles from './styles';
import { color } from '../../DefaultStyles';

//import icons
import AntDesign from 'react-native-vector-icons/AntDesign';

//import data
import label from './label';
import { data } from '../../database/MockData';
import { searchResult } from '../../database/MockData';

//import components
import LoadingScreen from '../Components/LoadingScreen';
import CartButton from '../Components/CartButton';
import SearchCard from './SearchCard';
import SuggestionCard from './SuggestionCard';
import ResultSearch from './ResultSearch';

const SearchScreen = ({navigation}) => {
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

    const callToast = (msg) => {
        Toast.show(msg, {
          duration: Toast.durations.LONG,
          position: Toast.positions.BOTTOM,
          shadow: true,
          animation: true,
          hideOnPress: true,
          delay: 0,
          backgroundColor: '#fff',
          textColor: '#000',
      });
    };

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

        //set loading to false when getting data is completed
        setLoading(false);
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

    //get search results
    //turn off search result function is on line 113, on change text function
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
            callToast('Không tìm thấy kết quả tìm kiếm');
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

    return (
        <View style={defaultStyles.container}>
        { loading ? (
                <LoadingScreen />
            ) : (
                <View style={defaultStyles.safeView}>
                    <ScrollView
                        keyboardShouldPersistTaps="handled"
                    >
                        <View>
                            {/*Search View */}
                            <View style={styles.header}>
                                <Text style={styles.searchLabel}>{label.searchLabel}</Text>
                                {/*Search bar */}
                                <View style={[
                                    styles.searchBar, (onFocus ?
                                        {borderColor: color.black} : {borderColor: color.bgMedium})]}>
                                    <TextInput
                                        placeholder="Tìm kiếm                                                                   "
                                        autoCapitalize="none"
                                        onChangeText={onChangeText}
                                        value={search}
                                        returnKeyType="go"
                                        onSubmitEditing={() => getResults(search)}
                                        onFocus={setOnFocus}
                                        onBlur={setOnBlur}
                                        style={styles.searchInput}
                                    />

                                    <TouchableOpacity
                                        onPress={() => getResults(search)}
                                    >
                                        <View style={styles.searchBarIcons}>
                                            {showResult ? (
                                                <TouchableOpacity onPress={() => onClose()}>
                                                    <AntDesign
                                                        name="closecircleo"
                                                        size={18}
                                                        color={color.lightDark}
                                                        style={styles.closeIcon}
                                                    />
                                                </TouchableOpacity>
                                            ) : null}
                                            <AntDesign name="search1" size={24} color={color.lightDark} />
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            {showResult ? (
                                <View style={defaultStyles.padding16}>
                                    <View>
                                        <Text style={styles.label}>{label.ResultFound}</Text>
                                        {
                                            (results || []).map(resultData => {
                                                return <ResultSearch data={resultData} key={resultData.id} />;
                                            })
                                        }
                                    </View>
                                </View>
                            ) : (
                                <View>
                                    {/*User history search */}
                                    <View style={styles.historySearchView}>
                                        <View style={styles.labelView}>
                                            <Text style={styles.label}>{label.historysearchLabel}</Text>
                                            {historySearch !== [] ?
                                                <TouchableHighlight
                                                    activeOpacity={0.4}
                                                    underlayColor={color.greenWhite}
                                                    onPress={() => removeSearch()}
                                                >
                                                    <Text style={styles.clearText}>{label.clear}</Text>
                                                </TouchableHighlight> : null
                                            }
                                        </View>
                                        <View style={styles.searchResultView}>
                                            {
                                                //show 5 searches on screen
                                                (historySearch.slice(0, 5) || []).map((historySearchData, searchIndex) => {
                                                    return (
                                                        <TouchableOpacity
                                                            onPress={() => onTouchSearchItem(historySearchData)}
                                                            key={searchIndex}
                                                        >
                                                            <SearchCard searchItem={historySearchData} />
                                                        </TouchableOpacity>
                                                    );
                                                })
                                            }
                                        </View>
                                    </View>
                                { /*most popular search item*/}
                                    <View style={styles.historySearchView}>
                                        <Text style={styles.label}>{label.mostPopularSearchLabel}</Text>
                                        <View style={styles.searchResultView}>
                                            {
                                                (popularSearch || []).map(popularSearchData => {
                                                    return (
                                                        <TouchableOpacity
                                                            onPress={() => onTouchSearchItem(popularSearchData.search)}
                                                            key={popularSearchData.id}
                                                        >
                                                            <SearchCard searchItem={popularSearchData.search} />
                                                        </TouchableOpacity>
                                                    );
                                                })
                                            }
                                        </View>
                                    </View>
                                    {/*suggestion search items*/}
                                    <View>
                                        <View style={{paddingHorizontal: 16}}>
                                            <Text style={styles.label}>{label.suggestionLabel}</Text>
                                        </View>
                                        <ScrollView
                                            horizontal
                                            showsHorizontalScrollIndicator={false}
                                        >
                                            <View style={styles.suggestProductsView}>
                                                {
                                                    (products || []).map(suggestProductData => {
                                                        return <SuggestionCard data={suggestProductData} key={suggestProductData.id} />;
                                                    })
                                                }
                                            </View>
                                        </ScrollView>
                                    </View>
                                </View>
                                )
                            }
                        </View>
                        {/*Searcch filter */}
                        {
                            showFilter ? (
                                <View style={styles.historySearchListView}>
                                    <View style={styles.historySearchList}>
                                    {
                                        //show 3 search only
                                        (filterSearchList.slice(0, 3) || []).map((historySearchItem, searchIndex) => {
                                            return (
                                                <Pressable
                                                    key={searchIndex}
                                                    style={({pressed}) => [
                                                        {
                                                            backgroundColor: pressed ? color.greenWhite : color.bgWhite,
                                                            margin: 5,
                                                        },
                                                    ]}
                                                    onPress={() => onTouchSearchItem(historySearchItem)}
                                                >
                                                    <Text style={styles.textSearch}>{historySearchItem}</Text>
                                                </Pressable>
                                            );
                                        })
                                    }
                                    </View>
                                </View>
                        ) : null
                        }
                    </ScrollView>
                    <CartButton />
                </View>
            )
        }
        </View>
    );
};

export default SearchScreen;
