import { View } from 'react-native';
import React from 'react';

import OrderList from './OrderList';

const Processing = () => {
  return (
    <View>
        <OrderList status={'processing'} />
    </View>
  );
};

export default Processing;
