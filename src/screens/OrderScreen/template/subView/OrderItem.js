/* eslint-disable react-native/no-inline-styles */
import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { formatDate } from '../../../../utils/fomatDate';

//import styles
import styles from '../../styles';
import { color } from '../../../../DefaultStyles';

//import data
import label from '../../label';
import { data } from '../../../../database/MockData';
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

    const productData = getProduct(item.productID);

    return (
        item ?
            <View style={styles.itemContainer}>
                {/*Product information */}
                <Image source={productData.image[0]} style={styles.imageProduct} />
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
                            <Text style={styles.price}>{formatDate(item.datePurchase, 'order')}</Text>
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
