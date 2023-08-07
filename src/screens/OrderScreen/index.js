/* eslint-disable react-native/no-inline-styles */
import { View, Text, TouchableOpacity, StatusBar, TextInput, Pressable,
    Keyboard, ScrollView } from 'react-native';
import React, {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

//import style
import defaultStyles, {color} from '../../DefaultStyles';
import styles from './styles';

//import icons
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';

//import data
import label from './label';
import { data } from '../../database/MockData';
import { order } from '../../database/MockData';

//import components
import LoadingScreen from '../../Components/LoadingScreen';
import Navigations from './Navigations';
import OrderItem from './Components/OrderItem';

const OrderScreen = ({navigation}) => {
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
        const resultProductList = data.filter(function(productData) {
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

    return (
    <View style={defaultStyles.container} >
        <StatusBar translucent backgroundColor="transparent" barstyles="dark-content" />
        { loading ? <LoadingScreen /> :
            <View style={{flex: 1}}>
                <View style={styles.header}>
                    <Text style={styles.headerLabel}>{label.orderTitle}</Text>
                        <View style={styles.searchView}>
                            <TouchableOpacity
                                onPress={() => {
                                    showsearch ? getResults(search)
                                    : setShowSearch(true);
                                }}
                            >
                                <Feather name="search" style={styles.searchButton} />
                            </TouchableOpacity>
                        </View>
                </View>
                {   showsearch ?
                    <View style={[styles.searchBar, (onFocus ?
                                    {borderColor: color.black} : {borderColor: color.bgMedium})]}>
                        <TextInput
                            placeholder="Tìm kiếm"
                            onChangeText={onChangeText}
                            value={search}
                            autoCapitalize="none"
                            returnKeyType="go"
                            onSubmitEditing={() => getResults(search)}
                            onFocus={setOnFocus}
                            onBlur={setOnBlur}
                            style={styles.searchInput}
                        />
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
                    </View>
                    : null
                }
                { showResult ?
                    (
                        <ScrollView>
                            {
                               (result || []).map(orderResultData => {
                                    return <OrderItem item={orderResultData} key={orderResultData.id} />;
                               })
                            }
                        </ScrollView>
                    )
                :   <Navigations/>
                }
                {/*Search filter */}
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
            </View>
        }
    </View>
  );
};

export default OrderScreen;
