/* eslint-disable react-native/no-inline-styles */
import { View, Text, Image } from 'react-native';
import React from 'react';
import Button from '../../../../Components/Buttons/Button';
import { formatDate } from '../../../../utils/fomatDate';

//import styles
import styles from '../../styles';
import { color } from '../../../../values/color';

//import data
import label from '../../label';
import { products } from '../../../../database/MockData';
import { ListEmptyComponent } from './OrderList';

const OrderItem = ({item = {}, index}) => {

    //get product information to show name and get product ID
    const getProduct = (productID) => {
        for (let productIndex = 0; productIndex < products.length; productIndex++) {
            if (products[productIndex].id === productID) {
                return products[productIndex];
            }
        }
    };

    const productData = getProduct(item.productID);

    const buttonStyle = {
        width: 65,
        paddingVertical: 7,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: item.orderStatus === 'delivered' || item.orderStatus === 'canceled' ?
            color.greenLight : color.greenDark,
        borderRadius: 40,
    };

    const textButtonStyle = {
        fontSize: 12,
        fontWeight: item.orderStatus === 'delivered' || item.orderStatus === 'canceled' ?
            'bold' : '500',
        color: item.orderStatus === 'delivered' || item.orderStatus === 'canceled' ?
            color.greenDark : color.bgWhite,
    };

    const onPressButton = () => {
        if (item.orderStatus === 'delivered' || item.orderStatus === 'canceled') {
            console.log('Order again');
        } else {
            console.log('Open chat box');
        }
    };

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
                        <Button
                            onPress={() => onPressButton()}
                            text={
                                item.orderStatus === 'delivered' || item.orderStatus === 'canceled' ?
                                    label.orderAgain : label.chat
                            }
                            textStyle={textButtonStyle}
                            style={buttonStyle}
                        />
                    </View>
                </View>
            </View>
        : <ListEmptyComponent />
    );
};

export default OrderItem;
