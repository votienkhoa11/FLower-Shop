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

 //   const [reviewHeight, setReviewHeight] = useState(0);

    //const onLayOut = (event) => {
   //     const {x, y, height, width} = event.nativeEvent.layout;
   // };



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

