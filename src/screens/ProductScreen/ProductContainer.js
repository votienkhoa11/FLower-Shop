import { Animated, Button, Easing, View, Text, StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';

//import template
import ProductMainView from './template/ProductMainView';

//import data
import { data } from '../../database/MockData';
import { users } from '../../database/MockData';
import { reviews } from '../../database/MockData';

const ProductContainer = (props) => {
    const {
        navigation,
        route,
    } = props;

    const [loading, setLoading] = useState(true);
    //get product information
    const {productID} = route.params;

    const [isCollapseInformation, setIsCollapseInformation] = useState(false);
    const [isCollapseReview, setIsCollapseReview] = useState(true);

    const productFilter = data.filter((productItem) => productItem.id === productID);
    const productInformation = productFilter[0];

    //set rating
    //this rating can't be changed, used for show products rating in the comments
    const [rating, setRating] = useState(productInformation.rating);
    //this rating can be changed, user can set their own rating for the product
    const [chooseRating, setChooseRating] = useState(productInformation.rating);

    //collaspible has bug that the height of view after expanding is lower than expected
    //to avoid this, I use the onLayOut function to get the original height and recaculate the height of the view
    //in order to avoid the issue.

    const [reviewHeight, setReviewHeight] = useState(0);

    const onLayOut = (event) => {
        const {x, y, height, width} = event.nativeEvent.layout;
    };

    //on press functions
    const onPressCollapse = (isCollapse, setIsCollapse) => {
        if (isCollapse) {
            setIsCollapse(false);
        } else {
            setIsCollapse(true);
        }
    };

    //set quantity
    const [quantity, setQuantity] = useState(1);

    const salePriceCalculator = (price, sale) => {
        let offPrice = price / 100 * sale;

        return price - offPrice;
    };

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            setLoading(false);
        });

        return unsubscribe;
    }, [navigation]);

    const productProps = {
        navigation,
        //values
        loading,
        isCollapseInformation,
        isCollapseReview,
        productInformation,
        chooseRating,
        quantity,
        rating,
        reviews,
        //functions
        salePriceCalculator,
        setRating,
        setChooseRating,
        setQuantity,
        setIsCollapseInformation,
        setIsCollapseReview,
        onPressCollapse,
    };

  return <ProductMainView {...productProps} />;
};

export default ProductContainer;

export const getUserInfo = (userid) => {
    const userFilter = users.filter((userInfomation) => userInfomation.id === userid);
    return userFilter[0];
};

export const formatDate = (rawDate) => {
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

    return `${day}/${month}/${year} ${hour}:${minute}`;
};

