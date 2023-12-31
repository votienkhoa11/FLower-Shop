/* eslint-disable react-native/no-inline-styles */
import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { config } from '../../../../configurations';

import styles from '../../styles';

import { useNavigation } from '@react-navigation/native';

const PopularCard = ({data = {}}) => {
    const navigation = useNavigation();

  return (
    data ? (
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => navigation.navigate('product', {
            productID: data.id,
        })}
      >
          <View style={{padding: 8}}>
              <View style={styles.popularCard}>
                  <Image source={data.image ? data.image[0] : config.noImage} style={styles.popularImage} resizeMode="stretch" />
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
