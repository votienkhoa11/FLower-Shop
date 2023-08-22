/* eslint-disable react-native/no-inline-styles */
import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import style from '../../styles';
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
              <View style={style.popularCard}>
                  <Image source={data.image[0]} style={style.popularImage} resizeMode="stretch" />
                  <View style={style.title}>
                      <Text style={style.titleText}>{data.name}</Text>
                  </View>
              </View>
          </View>
      </TouchableOpacity>
      ) : null
  );
};

export default PopularCard;
