/* eslint-disable react-native/no-inline-styles */
import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';

//import styles
import style from './style';

//import components
import SaleComponent from './saleComponent';
import { DataTable } from 'react-native-paper';

//import user
import { user } from '../../database/MockData';

const ProductCard = ({data = {}}) => {

  return (
    data !== {} ? (
      <TouchableOpacity>
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
