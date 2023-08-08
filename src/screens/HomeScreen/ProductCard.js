/* eslint-disable react-native/no-inline-styles */
import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

//import styles
import style from './styles';

//import components
import SaleComponent from './saleComponent';

//import user
import { user } from '../../database/MockData';

const ProductCard = ({data = {}}) => {
    const navigation = useNavigation();

  return (
    data !== {} ? (
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => navigation.navigate('product', {
            productID: data.id,
        })}
    >
        <View style={style.productCard}>
          <Image source={data.image} style={style.productImage} />
          <View style={style.information} >
              <View style={style.informationCard}>
                  <Text style={style.productName} >{data.name}</Text>
                  <Text style={style.description}>{data.description}</Text>
              </View>
              <View style={[style.informationCard, {borderBottomWidth: 0}]}>
                  <Text style={style.description}>{user.delivery}</Text>
                  <Text style={style.description}>{user.promotion}</Text>
              </View>
          </View>
          {
            data.salePercentage > 0 ? (
              <SaleComponent data={data} saleStyle={style.saleRecommend} />
            ) : null
          }
        </View>
      </TouchableOpacity>
      ) : null
  );
};

export default ProductCard;
