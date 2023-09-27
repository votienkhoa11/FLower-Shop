/* eslint-disable react-native/no-inline-styles */
import { Text, View, StatusBar, FlatList } from 'react-native';
import Modal from 'react-native-modal';
import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';

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
import Button from '../../../Components/Buttons/Button';
import TextInputComponent from '../../../Components/TextInput/TextInputComponent';
import ResultCard from './subView/ResultCard';
import EmtyData from './subView/EmtyData';
import Filter from './subView/Filter';

export default function SearchResultMainView (props) {
    const {
        navigation,
        //values
        search,
        results,
        loading,
        modalVisible,
        //functions
        onChangeText,
        onClose,
        onTouchSearchItem,
        onPressFilter,
    } = props;

    //render list
    const listFooter = () => {
        return (
            <View style={styles.footer} />
        );
    };

  return (
    loading ? <LoadingScreen /> :

    <View style={defaultStyles.container}>
        <StatusBar translucent backgroundColor="transparent" barstyles="dark-content" />
        {/*Header */}
        <View style={{height: '100%'}}>
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
                    placeholder={label.search}
                    value={search}
                    onChangeText={onChangeText}
                    returnKeyType="go"
                    onSubmitEditing={() => onTouchSearchItem(search)}
                    leftIcon={<AntDesign name="search1" style={styles.searchIcon} />}
                    onPressleftIcon={() => onTouchSearchItem(search)}
                    rightIcon={search && <AntDesign name="close" style={styles.xIcon} />}
                    onPressRightIcon={() => onClose()}
                    style={styles.searchBar}
                    textInputStyle={{fontSize: 14}}
                />
                <Button
                    onPress={() => onPressFilter()}
                    leftIcon={<AntDesign name="filter" size={18} color={color.lightDark} />}
                    width={40}
                    height={40}
                    backgroundColor={color.bgLight}
                    style={{borderRadius: 8}}
                />
            </View>
            {/*search title view */}
            <View style={styles.resultLabelView}>
                <Text style={styles.label}>{label.ResultFound} "{search}"</Text>
                <Text style={styles.numberResults}>{results.length} {label.result}</Text>
            </View>
            <FlatList
                data={search ? results : null}
                keyExtractor={item => item.id}
                renderItem={({item, index}) => {
                    return <ResultCard data={item} />;
                }}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={<EmtyData />}
                ListFooterComponent={listFooter}
            />
        </View>
        <Modal
            isVisible={modalVisible}
            hasBackdrop={true}
            backdropOpacity={0.3}
            swipeDirection={['down']}
            onSwipeComplete={() => onPressFilter()}
            onBackButtonPress={() => onPressFilter()}
            onBackdropPress={() => onPressFilter()}
            style={styles.modalStyle}
        >
            <Filter {...props} />
        </Modal>
        <CartButton />
    </View>
  );
}
