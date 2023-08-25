/* eslint-disable react-native/no-inline-styles */
import { View, Text, TouchableOpacity, StatusBar, TextInput, Pressable, ScrollView } from 'react-native';
import React from 'react';

//import style
import defaultStyles, {color} from '../../../DefaultStyles';
import styles from '../styles';

//import icons
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';

//import data
import label from '../label';

//import components
import LoadingScreen from '../../../Components/LoadingScreen';
import Navigations from './subView/Navigations';
import OrderItem from './subView/OrderItem';


const OrderMainView = (props) => {
    const {
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
    } = props;

  return (
    loading ? <LoadingScreen /> :

        <View style={defaultStyles.container}>
            <StatusBar translucent backgroundColor="transparent" barstyles="dark-content" />
            <View style={styles.header}>
                <Text style={styles.headerLabel}>{label.orderTitle}</Text>
                    <View style={styles.searchView}>
                        <TouchableOpacity
                            onPress={() => onPressShowSearch()}
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
        </View>
  );
};

export default OrderMainView;
