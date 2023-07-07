import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import style from './style';

const CategoryCard = ({data = {}}) => {
  return (
    data !== {} ? (
      <TouchableOpacity>
          <View style={style.categoryCard}>
              <Image source={data.image} style={style.categoryImage}/>
              <Text style={style.categoryName}>{data.name}</Text>
          </View>
      </TouchableOpacity>
      ) : null
  );
};

export default CategoryCard;
