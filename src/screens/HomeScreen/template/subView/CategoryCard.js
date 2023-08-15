import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import styles from '../../styles';

const CategoryCard = ({data = {}}) => {
  return (
    data !== {} ? (
      <TouchableOpacity>
          <View style={styles.categoryCard}>
              <Image source={data.image} style={styles.categoryImage}/>
              <Text style={styles.categoryName}>{data.name}</Text>
          </View>
      </TouchableOpacity>
      ) : null
  );
};

export default CategoryCard;
