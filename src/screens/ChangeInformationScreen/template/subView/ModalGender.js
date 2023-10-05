/* eslint-disable react-native/no-inline-styles */
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import React from 'react';

//import styles
import styles from '../../styles';

const Item = ({item}) => {
    return (
        <View style={styles.genderItem}>
            <Text style={styles.genderText}>{item}</Text>
        </View>
    );
};

const ModalGender = (props) => {
    const {
        genders,
        onSelectedGender,
    } = props;
  return (
    <View style={{paddingVertical: 8}}>
        <FlatList
            data={genders}
            scrollEnabled={false}
            renderItem={({item, index}) => (
                <TouchableOpacity
                    activeOpacity={1}
                    onPress={() => onSelectedGender(item)}
                >
                    <Item item={item} />
                </TouchableOpacity>
            )}
            keyExtractor={(item, index) => String(index)}
        />
    </View>
  );
};

export default ModalGender;
