/* eslint-disable react-native/no-inline-styles */
import { View, Text } from 'react-native';
import React from 'react';
import StarRating from 'react-native-star-rating-widget';

//import styles
import styles from '../../styles';

const StarRate = ({
    rating,
    onChange,
    styleText,
    enableSwiping,
    showNumber,
    showMaxStar,
}) => {
  return (
    <View style={styles.ratingView}>
        <StarRating
            rating={rating}
            onChange={onChange}
            starSize={16}
            starStyle={{marginHorizontal: 0}}
            enableSwiping={enableSwiping}
        />
        {showNumber ? <Text style={styleText}>{rating}{showMaxStar ? '/5' : null}</Text> : null}
    </View>
  );
};

export default StarRate;
