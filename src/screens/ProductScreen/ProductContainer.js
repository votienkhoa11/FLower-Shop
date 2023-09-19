/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';

//import template
import ProductMainView from './template/ProductMainView';

//import slices
import { getProductDetailByID } from './productSlice';

//import data
import { products } from '../../database/MockData';
import { users } from '../../database/MockData';
import { reviews } from '../../database/MockData';

const ProductContainer = (props) => {
    const {
        dispatch,
        isLoading,
        params,
        navigation,
    } = props;

    //get product information
    const {productID} = params;

    const [productInformation, setProductInformation] = useState({});
    const fetchProductByID = async () => {
        const res = await dispatch(getProductDetailByID({
            id: productID,
        }));

        const {responseData} = res.payload.data;
        console.log(responseData);

        setProductInformation(responseData);
    };

    //set rating
    //this rating can't be changed, used for show products rating in the comments
    const [rating, setRating] = useState(productInformation.star_rating);
    //this rating can be changed, user can set their own rating for the product
    const [chooseRating, setChooseRating] = useState(productInformation.star_rating);

    //set quantity
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        fetchProductByID();
    }, []);

    const productProps = {
        navigation,
        //values
        isLoading,
        productInformation,
        chooseRating,
        quantity,
        rating,
        reviews,
        products,
        //functions
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

