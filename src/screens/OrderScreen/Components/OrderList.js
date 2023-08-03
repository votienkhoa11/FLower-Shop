/* eslint-disable react-native/no-inline-styles */
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import React from 'react';

import styles from '../styles';
import { color } from '../../../DefaultStyles';

//import data
import label from '../label';
import { order } from '../../../database/MockData';
import { data } from '../../../database/MockData';


const OrderList = () => {

    const getProduct = (productID) => {
        for (let productIndex = 0; productIndex < data.length; productIndex++) {
            if (data[productIndex].id === productID) {
                return data[productIndex];
            }
        }
    };

    const formatDate = (rawDate) => {
        let formatedDate = new Date(rawDate);

        let year = formatedDate.getFullYear();

        let month = formatedDate.getMonth() + 1;
        month = month < 10 ? `0${month}` : month;

        let day = formatedDate.getDate();
        day = day < 10 ? `0${day}` : day;

        let hour = formatedDate.getHours() + 1;
        hour = hour < 10 ? `0${hour}` : hour;

        let minute = formatedDate.getMinutes();
        minute = minute < 10 ? `0${minute}` : minute;

        return `${hour}:${minute} - ${day}/${month}/${year}`;
    };

    //render list
    const orderItem = ({item, index}) => {
        const productData = getProduct(item.productID);

        return (
            <View style={styles.itemContainer}>
                <Image source={productData.image} style={styles.imageProduct} />
                <View style={styles.orderInformation}>
                    <View style={styles.productInformation}>
                        <Text style={styles.productName}>{productData.name}</Text>
                        <Text style={styles.price}>{item.price}đ</Text>
                    </View>
                    <Text style={styles.price}>{item.quantity < 10 ? '0' + item.quantity : item.quantity} {label.product}</Text>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',}}>
                        <View>
                            <Text style={[styles.status, {color: item.orderStatus === 'canceled' ? color.red : color.gray}]}>
                                {
                                    item.orderStatus === 'delivering' ? label.delivering :
                                    item.orderStatus === 'processing' ? label.processing :
                                    item.orderStatus === 'delivered' ? label.delivered :
                                    label.canceled
                                }
                            </Text>
                            <Text style={styles.price}>{formatDate(item.datePurchase)}</Text>
                        </View>
                        {
                            item.orderStatus === 'delivered' || item.orderStatus === 'canceled' ?
                                <TouchableOpacity
                                    onPress={() => console.log('Order again')}
                                >
                                    <View style={styles.orderButton}>
                                        <Text style={styles.orderAgain}>{label.orderAgain}</Text>
                                    </View>
                                </TouchableOpacity>
                            :
                                <TouchableOpacity
                                    onPress={() => console.log('Open chat box')}
                                >
                                    <View style={[styles.orderButton, {backgroundColor: color.greenDark}]}>
                                        <Text
                                            style={[styles.orderAgain, {color: color.bgWhite, fontWeight: '500'}]}
                                        >{label.chat}</Text>
                                    </View>
                                </TouchableOpacity>
                        }
                    </View>
                </View>
            </View>
        );
    };

  return (
    <View>
      <FlatList
        data={order}
        renderItem={orderItem}
        keyExtractor={item => item.id}
        ListFooterComponent={
            <View style={styles.footer}>
                <Text>------------------------------------------------</Text>
            </View>
        }
      />
    </View>
  );
};

export default OrderList;
