import { View, Text } from 'react-native';
import React from 'react';

//import data
import { data } from '../../database/MockData';

const ProdcuctScreen = ({route, navigation}) => {
    //get product information
    const {productID} = route.params;

    const productInformation = data.filter((productItem) => productItem.id === productID);
  return (
    <View>
      <Text>{productInformation[0].name}</Text>
    </View>
  );
};

export default ProdcuctScreen;
