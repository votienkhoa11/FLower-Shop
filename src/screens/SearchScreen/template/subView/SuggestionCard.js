import { View, Text, Image } from 'react-native';
import React from 'react';

//import style
import styles from '../../styles';
import defaultStyles from '../../../../DefaultStyles';

const SuggestionCard = ({data = {}}) => {
  return (
    data ? (
        <View style={[styles.suggestionCard, defaultStyles.shadow]}>
            <Image source={data.image[0]} style={styles.imageProduct} resizeMode="stretch" />
            <Text style={styles.productName}>{data.name}</Text>
        </View>
    ) : null
  );
};

export default SuggestionCard;
