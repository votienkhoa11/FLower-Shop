/* eslint-disable react-native/no-inline-styles */
import { Text, View, ScrollView, TouchableOpacity, TextInput, Pressable, StatusBar,
    TouchableHighlight } from 'react-native';
import React from 'react';

//import style
import defaultStyles, {color} from '../../../DefaultStyles';
import styles from '../styles';

//import icons
import AntDesign from 'react-native-vector-icons/AntDesign';

//import data
import label from '../label';

//import components
import LoadingScreen from '../../../Components/LoadingScreen';
import CartButton from '../../../Components/Buttons/CartButton';
import SearchCard from './subView/SearchCard';
import SuggestionCard from './subView/SuggestionCard';
import ResultSearch from './subView/ResultSearch';

const SearchMainView = (props) => {
    const {
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
    } = props;

  return (
    loading ? <LoadingScreen /> :

    <View style={defaultStyles.container}>
        <View style={defaultStyles.safeView}>
            <StatusBar translucent backgroundColor="transparent" barstyles="dark-content" />
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
                                <TouchableOpacity
                                    onPress={() => getResults(search)}
                                >
                                    <AntDesign name="search1" size={24} color={color.lightDark} />
                                </TouchableOpacity>
                            </View>
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
            </ScrollView>
            <CartButton />
        </View>
    </View>
  );
};

export default SearchMainView;
