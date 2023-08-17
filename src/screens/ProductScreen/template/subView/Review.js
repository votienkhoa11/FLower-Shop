/* eslint-disable react-native/no-inline-styles */
import { View, Text, Image } from 'react-native';
import React from 'react';

//import styles
import styles from '../../styles';

import { getUserInfo } from '../../ProductContainer';
import label from '../../label';

//import components
import StarRate from './StarRate';

const Review = ({reviewData = {}}) => {
    const userInformation =  getUserInfo(reviewData.userID);

  return (
    reviewData ?
    <View style={styles.reviewSection}>
        <Image style={styles.userAvatar} source={userInformation.avatar} />
        <View style={{gap: 8}}>
            <Text style={styles.userName}>{userInformation.name}</Text>
            <View pointerEvents= "none">
                <StarRate
                    rating={reviewData.rating}
                />
            </View>
            <Text style={styles.classify}>{label.classify}</Text>
            {reviewData.review ? <Text style={styles.review}>{reviewData.review}</Text> : null}
            <View>
            </View>
        </View>
    </View>
    : null
  );
};

export default Review;
