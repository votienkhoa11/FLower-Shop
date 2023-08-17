import { View, Text, Image } from 'react-native';
import React from 'react';

//import style
import styles from './styles';

import label from './label';

const SaleComponent = ({data = {}, saleStyle = {}}) => {
  return (
    <View style={saleStyle} >
        <Image source={require('../../assets/imgs/saleLabel.png')} style={styles.salePNG} />
        <View style={styles.saleIcon} >
            <Text style={styles.saleText} >{label.sale} {data.salePercentage}%</Text>
        </View>
    </View>
  );
};

export default SaleComponent;
