/* eslint-disable react-native/no-inline-styles */
import { View, Text } from 'react-native';
import React from 'react';
import StarRating from 'react-native-star-rating-widget';

//import styles
import styles from './styles';

const StarRate = ({rating, onChange, styleText, showNumber = true}) => {
  return (
    <View style={styles.ratingView}>
        <StarRating
            rating={rating}
            onChange={onChange}
            maxStars={5}
            starSize={16}
            starStyle={{marginHorizontal: 0}}
        />
        {showNumber ? <Text style={styleText}>{rating}</Text> : null}
    </View>
  );
};

export default StarRate;
