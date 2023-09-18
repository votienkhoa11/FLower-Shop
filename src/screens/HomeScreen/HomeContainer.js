/* eslint-disable react-hooks/exhaustive-deps */
import { Alert } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import NetInfo from '@react-native-community/netinfo';
import { callToast } from '../../utils/Toast';

//get slices
import { getAllProduct } from '../ProductScreen/productSlice';
import { getHomePage } from './homeSlice';

//import data
import { user } from '../../database/MockData';
import { userData } from '../../api/userData';
import { products } from '../../database/MockData';
import string from '../../values/string';

//import template
import HomeMainView from './template/HomeMainView';

const HomeContainer = (props) => {
    const {
        dispatch,
        isLoading,
        navigation,
    } = props;

    //set data
    const [events, setEvents] = useState([]);
    const [product, setProduct] = useState([]);
    const [popularProduct, setPopularProduct] = useState([]);
    const [broughtProducts, setBroughtProduct] = useState([]);
    const [userInfo, setUser] = useState([]);
    const [favorite, setFavorite] = useState(false);

    const fetchHomePage = async () => {
        const res = await dispatch(getHomePage());
        const {responseData} = res.payload.data;

        const eventSlide = responseData.banner_slide.split('|');

        setEvents(eventSlide);
    };

    //get data from the database
    const getDatafromDB = async () => {
        const res = await dispatch(getAllProduct({
            currentPage: 1,
            pageSize: 10,
        }));

        const {data} = res.payload;
        const productList = [...data.responseData.rows];

        setProduct(productList.slice(0, 5));
        //get user
        setUser(await userData());

        //get popular products by sorting productList's like
        //the idea is use the sort function to sort based on comapring like products from (from highest to lowest)
        const popularProductList = productList.sort(function(a, b) {
            const keyA = a.like || 0;
            const keyB = b.like || 0;
            //compare the 2 like of the products
            return keyB - keyA;
        });

        //set the popular product with top 5 item
        setPopularProduct(popularProductList.slice(0, 5));

        //get products that the users has brought before to ask them to buy again
        const broughtProductList = products.filter((productItem) =>
            user.broughtProducts.includes(productItem.id));

        //set 5 brought products
        setBroughtProduct(broughtProductList.slice(0, 5));
    };

    //on press functions
    const setFavoriteButton = () => {
        if (favorite) {
            setFavorite(false);
            callToast('Unfavorite');
        } else {
            setFavorite(true);
            callToast('Favorite');
        }
    };

    //checking connection
    const [connectionStatus, setConnectionStatus] = useState(true);
    const prevConnection = useRef(true);

    //fetch data when screen load
    useEffect(() => {
        getDatafromDB();
        fetchHomePage();
    }, []);

    useEffect(() => {
        const unsubscribe = NetInfo.addEventListener(state => {
            setConnectionStatus(state.isConnected);
        });

        return () => {
            unsubscribe();
        };
    }, []);

    useEffect(() => {
        if (!connectionStatus) {
            Alert.alert(
                string.NO_CONNECTION_TEXT,
                string.NO_CONNECTION_SUB_TEXT,
            );
        } else if (prevConnection.current && connectionStatus) {
            callToast(string.INTERNET_CONNECTED);
        }

        prevConnection.current = connectionStatus;
    }, [connectionStatus]);

    const homeProps = {
        navigation,
        isLoading,
        userInfo,
        favorite,
        events,
        setFavoriteButton,
        popularProduct,
        broughtProducts,
        product,
    };

  return <HomeMainView  {...homeProps} />;
};

export default HomeContainer;
