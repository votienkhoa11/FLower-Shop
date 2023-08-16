import { View } from 'react-native';
import React from 'react';

import OrderList from './OrderList';

const Delivered = () => {
  return (
    <View>
        <OrderList status={'delivered'} />
    </View>
  );
};

export default Delivered;
