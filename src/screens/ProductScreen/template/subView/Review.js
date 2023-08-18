/* eslint-disable react-native/no-inline-styles */
import { View, Text, Image } from 'react-native';

//import styles
import styles from '../../styles';

import { getUserInfo } from '../../ProductContainer';
import { formatDate } from '../../ProductContainer';
import label from '../../label';

//import components
import StarRate from './StarRate';

const Review = ({reviewData = {}}) => {
    const userInformation = reviewData ? getUserInfo(reviewData.userID) : null;

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
            <View style={styles.dateView}>
                <Text style={styles.dateText}>{formatDate(reviewData.date)}</Text>
                <View style={styles.shopResponseButton}>
                    <Text style={styles.dateText}>{label.shopResponse}</Text>
                </View>
            </View>
        </View>
    </View>
    : null
  );
};

export default Review;
