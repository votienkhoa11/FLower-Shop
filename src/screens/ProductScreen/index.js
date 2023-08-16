import React from 'react';
import ProductContainer from './ProductContainer';

const ProdcuctScreen = ({route, navigation}) => {
    const productContainer = {
        route,
        navigation,
    };

  return <ProductContainer {...productContainer}/>;
};

export default ProdcuctScreen;
