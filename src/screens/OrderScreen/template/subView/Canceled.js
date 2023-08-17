import { View } from 'react-native';
import React from 'react';

import OrderList from './OrderList';

const Canceled = () => {
  return (
    <View>
        <OrderList status={'canceled'} />
    </View>
  );
};

export default Canceled;
