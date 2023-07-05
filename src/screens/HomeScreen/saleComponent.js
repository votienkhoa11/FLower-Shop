import { View, Text, Image } from 'react-native';
import React from 'react';

//import style
import style from './style';

const SaleComponent = ({data, saleStyle}) => {
  return (
    <View style={saleStyle} >
        <Image source={require('../../styles/imgs/saleLabel.png')} style={style.saleIcon} />
        <View style={style.sale2} >
            <Text style={style.saleText} >Giảm {data.salePercentage}%</Text>
        </View>
    </View>
  );
};

export default SaleComponent;
