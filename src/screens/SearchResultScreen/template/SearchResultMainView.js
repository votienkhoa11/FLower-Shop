/* eslint-disable react-native/no-inline-styles */
import { Text, View, TextInput, Pressable, StatusBar } from 'react-native';
import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';

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
import TextInputComponent from '../../../Components/TextInput/TextInputComponent';
import SearchCard from './subView/SearchCard';
import ResultSearch from './subView/ResultSearch';

const SearchResultMainView = (props) => {
    const {
        navigation,
        //values
        search,
        loading,
        onFocus,
        showFilter,
        showResult,
        //functions
        onChangeText,
    } = props;

  return (
    loading ? <LoadingScreen /> :

    <View style={defaultStyles.container}>
        <StatusBar translucent backgroundColor="transparent" barstyles="dark-content" />
            <View style={styles.header}>
                <TouchableOpacity
                    onPress={() => navigation.goBack(null)}
                >
                    <View style={styles.searchLabelContainer}>
                        <AntDesign name="left" style={styles.backIcon} />
                        <Text style={styles.label}>{label.search}</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={{paddingHorizontal: 16,}}>
                <TextInputComponent
                    style={[
                        styles.searchBar,
                    ]}
                    placeholder={label.search}
                    value={search}
                    onChangeText={onChangeText}
                    returnKeyType="go"
                    onSubmitEditing={() => console.log(search)}
                    leftIcon={<AntDesign name="search1" style={styles.searchIcon} />}

                    rightIcon={<AntDesign name="close" style={styles.xIcon} />}
                />
            </View>
    </View>
  );
};

export default SearchResultMainView;
