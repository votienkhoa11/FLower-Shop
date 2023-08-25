/* eslint-disable react-native/no-inline-styles */
import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';

import styles from '../../styles';
import defaultStyles from '../../../../DefaultStyles';

import { useNavigation } from '@react-navigation/native';

const PopularCard = ({data = {}}) => {
    const navigation = useNavigation();

  return (
    data !== {} ? (
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => navigation.navigate('product', {
            productID: data.id,
        })}
      >
          <View style={{padding: 8}}>
              <View style={[styles.popularCard, defaultStyles.shadow]}>
                  <Image source={data.image[0]} style={styles.popularImage} resizeMode="stretch" />
                  <View style={styles.title}>
                      <Text style={styles.titleText}>{data.name}</Text>
                  </View>
              </View>
          </View>
      </TouchableOpacity>
      ) : null
  );
};

export default PopularCard;
