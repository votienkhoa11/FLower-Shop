import React, { useEffect, useState } from 'react';

//import template
import ProductMainView from './template/ProductMainView';

//import data
import { products } from '../../database/MockData';
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

    const productFilter = products.filter((productItem) => productItem.id === productID);
    const productInformation = productFilter[0];

    //set rating
    //this rating can't be changed, used for show products rating in the comments
    const [rating, setRating] = useState(productInformation.rating);
    //this rating can be changed, user can set their own rating for the product
    const [chooseRating, setChooseRating] = useState(productInformation.rating);

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
        productInformation,
        chooseRating,
        quantity,
        rating,
        reviews,
        products,
        //functions
        salePriceCalculator,
        setRating,
        setChooseRating,
        setQuantity,
    };

  return <ProductMainView {...productProps} />;
};

export default ProductContainer;

export const getUserInfo = (userid) => {
    const userFilter = users.filter((userInfomation) => userInfomation.id === userid);
    return userFilter[0];
};

