/* eslint-disable react-native/no-inline-styles */
import { View, Text } from 'react-native';
import React from 'react';

//import styles
import styles from '../../styles';

//import icons
import Entypo from 'react-native-vector-icons/Entypo';

const ItemCard = (props) => {
    const {
        item,
        style,
        icon,
        textStyle,
        iconStyle,
    } = props;

    return (
        item &&
        <View style={[
                styles.itemCard,
                style,
                {paddingVertical: icon ? 4 : 8},
            ]}
        >
            <Text
                style={[
                    styles.itemText,
                    textStyle,
                ]}
            >{item}</Text>
            {
                icon &&
                <Entypo
                    name="star"
                    style={[
                        styles.starIcon,
                        iconStyle,
                    ]}
                />
            }
        </View>

    );
};

export default ItemCard;
