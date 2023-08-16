import { View, Text, FlatList } from 'react-native';
import React from 'react';

//import styles
import styles from '../../styles';

//import data
import label from '../../label';
import { order } from '../../../../database/MockData';

//import components
import OrderItem from './OrderItem';

export const ListEmptyComponent = () => {
    return (
        <View style={styles.emptyView}>
            <Text style={styles.emptyText}>{label.empty}</Text>
        </View>
    );
};

const OrderList = ({status}) => {
    //filter the object order with status
    const orderFilter = order.filter((orderItem) => orderItem.orderStatus === status);

    //render list
    const listFooter = () => {
        return (
            <View style={styles.footer}>
                <Text>------------------------------------------------</Text>
            </View>
        );
    };

  return (
    <View>
      <FlatList
        data={status ? orderFilter : order}
        renderItem={OrderItem}
        ListEmptyComponent={ListEmptyComponent}
        keyExtractor={item => item.id}
        ListFooterComponent={listFooter}
      />
    </View>
  );
};

export default OrderList;
