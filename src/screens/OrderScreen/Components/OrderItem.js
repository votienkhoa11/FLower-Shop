/* eslint-disable react-native/no-inline-styles */
import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';

//import styles
import styles from '../styles';
import { color } from '../../../DefaultStyles';

//import data
import label from '../label';
import { data } from '../../../database/MockData';
import { ListEmptyComponent } from './OrderList';

const OrderItem = ({item = {}, index}) => {

    //get product information to show name and get product ID
    const getProduct = (productID) => {
        for (let productIndex = 0; productIndex < data.length; productIndex++) {
            if (data[productIndex].id === productID) {
                return data[productIndex];
            }
        }
    };

    //format date to hh:mm - dd/mm/yy
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

    const productData = getProduct(item.productID);

    return (
        item ?
            <View style={styles.itemContainer}>
                {/*Product information */}
                <Image source={productData.image} style={styles.imageProduct} />
                <View style={styles.orderInformation}>
                    <View style={styles.productInformation}>
                        <Text style={styles.productName}>{productData.name}</Text>
                        <Text style={styles.price}>{item.price}đ</Text>
                    </View>
                    <Text style={styles.price}>{item.quantity < 10 ? '0' + item.quantity : item.quantity} {label.product}</Text>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                        {/*Order status */}
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
                        {/*render button based on the status
                            when the status is deliverdd or canceled, the button is order again
                            otherwise, it is a chat box button */}
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
        : <ListEmptyComponent />
    );
};

export default OrderItem;
