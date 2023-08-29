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

const SearchResultMainView = (props) => {
    const {
        navigation,
        //values
        search,
        loading,
        //functions
        onChangeText,
        onClose,
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
            <View style={styles.searchFilterBar}>
                <TextInputComponent
                    style={styles.searchBar}
                    placeholder={label.search}
                    value={search}
                    onChangeText={onChangeText}
                    returnKeyType="go"
                    onSubmitEditing={() => console.log(search)}
                    leftIcon={<AntDesign name="search1" style={styles.searchIcon} />}

                    rightIcon={search && <AntDesign name="close" style={styles.xIcon} />}
                    onPressRightIcon={() => onClose()}
                />
                <View style={styles.filterIconContainer}>
                    <AntDesign name="filter" size={18} color={color.lightDark} />
                </View>
            </View>
        <CartButton />
    </View>
  );
};

export default SearchResultMainView;
