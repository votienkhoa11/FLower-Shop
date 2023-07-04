/* eslint-disable react-native/no-inline-styles */
import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';

//import styles
import style from './style';

const ProductCard = ({data}) => {
  return (
    <TouchableOpacity>
      <View style={style.productCard}>
        <Image source={data.image} style={style.productImage} />
        <View style={style.information} >
            <View style={style.informationCard}>
                <Text style={style.productName} >{data.name}</Text>
                <Text style={style.description}>{data.description}</Text>
            </View>
            <View style={[style.informationCard, {borderBottomWidth: 0}]}>
                <Text style={style.description}>Giao hàng trong 25 phút</Text>
                <Text style={style.description}>Giảm đến 135k cho đơn hàng</Text>
            </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCard;
