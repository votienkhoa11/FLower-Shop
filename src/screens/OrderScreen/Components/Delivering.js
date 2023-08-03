import { View } from 'react-native';
import React from 'react';

import OrderList from './OrderList';

const Delivering = () => {
  return (
    <View>
        <OrderList status={'delivering'} />
    </View>
  );
};

export default Delivering;
