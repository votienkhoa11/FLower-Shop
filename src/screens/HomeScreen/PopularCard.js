/* eslint-disable react-native/no-inline-styles */
import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import style from './styles';

const PopularCard = ({data = {}}) => {
  return (
    data !== {} ? (
      <TouchableOpacity activeOpacity={1}>
          <View style={{padding: 8}}>
              <View style={style.popularCard}>
                  <Image source={data.image} style={style.popularImage} resizeMode="stretch" />
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
