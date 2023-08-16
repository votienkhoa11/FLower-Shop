import React from 'react';
import OrderContainer from './OrderContainer';

const OrderScreen = ({navigation}) => {
    const orderContainer = {
        navigation,
    };

    return <OrderContainer {...orderContainer} />;
};

export default OrderScreen;
