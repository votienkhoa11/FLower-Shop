import { View, Text, Image } from 'react-native';
import React from 'react';

//import style
import styles from '../../styles';

const SuggestionCard = ({data = {}}) => {
  return (
    data ? (
        <View style={styles.suggestionCard}>
            <Image source={data.image} style={styles.imageProduct} resizeMode="stretch" />
            <Text style={styles.productName}>{data.name}</Text>
        </View>
    ) : null
  );
};

export default SuggestionCard;
