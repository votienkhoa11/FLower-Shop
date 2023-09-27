/* eslint-disable react-native/no-inline-styles */
import { Text, View, ScrollView, Pressable, StatusBar, TouchableHighlight } from 'react-native';
import React from 'react';

//import style
import defaultStyles from '../../../DefaultStyles';
import styles from '../styles';
import { color } from '../../../values/color';

//import icons
import AntDesign from 'react-native-vector-icons/AntDesign';

//import data
import label from '../label';

//import components
import LoadingScreen from '../../../Components/LoadingScreen';
import CartButton from '../../../Components/Buttons/CartButton';
import TextInputComponent from '../../../Components/TextInput/TextInputComponent';
import SuggestionCard from './subView/SuggestionCard';
import Button from '../../../Components/Buttons/Button';

const SearchMainView = (props) => {
    const {
        //values
        search,
        filterSearchList,
        historySearch,
        popularSearch,
        productData,
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
    } = props;

  return (
    loading ? <LoadingScreen /> :

    <View style={defaultStyles.container}>
        <View style={{height: '100%'}}>
            <StatusBar translucent backgroundColor="transparent" barstyles="dark-content" />
            <ScrollView
                keyboardShouldPersistTaps="handled"
            >
                {/*Search View */}
                <View style={styles.header}>
                    <Text style={styles.searchLabel}>{label.search}</Text>
                    {/*Search bar */}
                    <TextInputComponent
                        placeholder={label.search}
                        value={search}
                        onChangeText={onChangeText}
                        returnKeyType="go"
                        onSubmitEditing={() => onSubmitSearch(search)}
                        onFocus={setOnFocus}
                        onBlur={setOnBlur}
                        rightIcon={<AntDesign name="search1" style={styles.searchIcon} />}
                        onPressRightIcon={() => onSubmitSearch(search)}
                        style={[
                            styles.searchBar,
                            (onFocus &&
                                {borderColor: color.green}
                            ),
                        ]}
                        textInputStyle={{fontSize: 14}}
                    />
                </View>
                <View>
                    {/*User history search */}
                    <View style={styles.historySearchView}>
                        <View style={styles.labelView}>
                            <Text style={styles.label}>{label.historysearchLabel}</Text>
                            {historySearch.length > 0 ?
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
                                        <Button
                                            onPress={() => {
                                                onTouchSearchItem(historySearchData);
                                            }}
                                            text={historySearchData}
                                            key={searchIndex}
                                            fontSize={14}
                                            textColor={color.green}
                                            textStyle={styles.searchText}
                                            backgroundColor={color.bgLight}
                                            borderWidth={0.3}
                                            borderColor={color.bgMedium}
                                            style={styles.searchItem}
                                        />
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
                                        <Button
                                            onPress={() => {
                                                onTouchSearchItem(popularSearchData);
                                            }}
                                            text={popularSearchData.search}
                                            key={popularSearchData.id}
                                            fontSize={14}
                                            textColor={color.green}
                                            textStyle={styles.searchText}
                                            backgroundColor={color.bgLight}
                                            borderWidth={0.3}
                                            borderColor={color.bgMedium}
                                            style={styles.searchItem}
                                        />
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
                                    (productData || []).map(suggestProductData => {
                                        return <SuggestionCard data={suggestProductData} key={suggestProductData.id} />;
                                    })
                                }
                            </View>
                        </ScrollView>
                    </View>
                </View>
                {/*Search filter */}
                {
                    showFilter ? (
                        <View style={styles.historySearchListView}>
                            <View style={[styles.historySearchList, defaultStyles.shadow]}>
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
    </View>
  );
};

export default SearchMainView;
